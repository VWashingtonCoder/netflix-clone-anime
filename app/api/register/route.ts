import bcrypt from "bcryptjs";
import prismadb from "@/lib/prismadb";

export async function POST (req: Request) {
  const body = await req.json()
  const { email, name, password } = body;

  try {
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) return Response.json({ error: "Email taken" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return Response.json(user);
  } catch (err) {
    return Response.json({ error: err })
  }
}
