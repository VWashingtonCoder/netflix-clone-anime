"use client";
import { useCallback, useState } from "react";
import axios from "axios";
import Input from "@/components/input";
import Image from "next/image";

export default function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((current) => (current === "login" ? "register" : "login"));
  }, []);

  const register = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()

    try {
      const res = await axios.post("/api/register", { email, name, password })
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }

    setEmail("")
    setName("")
    setPassword("")
  }

  const login = () => {};

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.png')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full md:bg-opacity-70">
        <nav className="px-3 py-5">
          <Image src="/images/logo.png" alt="logo" width={300} height={100} />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-90 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? " Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="username"
                  label="Username"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              )}
              <Input
                id="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
              />
              <Input
                id="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
              />
            </div>

            {variant === "login" ? (
              <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                Login
              </button>
            ) : (
              <button
                onClick={register}
                className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
              >
                Sign Up
              </button>
            )}

            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? `First time here? `
                : `Already have an account? `}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
