import serverAuth from "@/lib/serverAuth";

export async function GET() {
  try {
    const { currentUser } = await serverAuth();
    return Response.json(currentUser);
  } catch (err) {
    return Response.json(err);
  }
}
