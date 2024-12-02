"use client";
import background from "@/public/Images/background.jpg";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, SignInFormData } from "../../lib/zodSchema";
import { use, useEffect, useState } from "react";
// Zod schema for validation

export default function Signin() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: "onChange", // Real-time validation
  });

  const handleSignIn = async (data: SignInFormData) => {
    const apiResult = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (apiResult?.error) {
      setError(apiResult.error);
      toast.error(apiResult.error);
    } else {
      router.push("/pages/home");
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/pages/home");
    }
  }, [status, router]);

  // If session is loading, show a loading indicator
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full h-full">
        <Image
          src={background}
          className="w-full h-full object-cover"
          alt="background"
        />
        <div className="absolute flex space-y-5 flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="w-80 bg-myBrown2 p-5 rounded-lg">
            <p className="text-white text-2xl my-3 text-center font-bold">
              Login Page
            </p>
            <form
              onSubmit={handleSubmit(handleSignIn)}
              className="flex flex-col space-y-2"
            >
              {/* Email Input */}
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  isRequired
                />
                {errors.email && (
                  <p className="text-red-500 font-bold text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 font-bold text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center space-x-3 items-center">
                <Button type="submit" className="bg-myBrown1 text-white">
                  Sign In
                </Button>
                {error && (
                  <Button
                    onClick={() => router.push("signup")}
                    className="bg-myBrown1 text-white"
                  >
                    Go to Sign Up
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
