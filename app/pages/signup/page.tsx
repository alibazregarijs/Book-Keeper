"use client";
import background from "@/public/Images/background.jpg";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { schema, TSignUpSchema } from "./lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function Signup() {
  const router = useRouter();
  
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    try {
      const response = await axios.post("/api/signup", data);
      if (response.status === 201) {
        router.push("/pages/signin");
      }
    } catch (err: any) {
      if (err.response.data.error) {
        setError(err.response.data.error, {
          message: err.response.data.message,
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="  w-full h-full">
        <Image
          src={background}
          className="w-full h-full object-cover"
          alt="background"
        />
        <div className="absolute flex space-y-5 flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="w-80">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-2"
              action=""
              method="post"
            >
              <Input type="email" placeholder="Email" {...register("email")} />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {typeof errors.email?.message === "string" &&
                    errors.email.message}
                </p>
              )}
              <Input
                type="text"
                placeholder="Username"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {typeof errors.username?.message === "string" &&
                    errors.username.message}
                </p>
              )}
              <Input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {typeof errors.password?.message === "string" &&
                    errors.password.message}
                </p>
              )}
              <Input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {typeof errors.confirmPassword?.message === "string" &&
                    errors.confirmPassword.message}
                </p>
              )}
              <div className="flex justify-center items-center">
                <Button type="submit" className="bg-myGreen1 text-white">
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
