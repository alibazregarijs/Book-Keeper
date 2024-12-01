import { z } from "zod";


export const schema = z
    .object({
      email: z.string().email("Invalid email address"),
      username: z
        .string()
        .min(3, "Username must be at least 3 characters long"),
      password: z
        .string()
        .min(2, "Password must be at least 8 characters long"),
      //   .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      //   .regex(/[0-9]/, "Password must contain at least one number")
      //   .regex(
      //     /[!@#$%^&*(),.?":{}|<>]/,
      //     "Password must contain at least one special character"
      //   ),
      confirmPassword: z
        .string()
        .min(2, "Confirm password must be at least 8 characters long"),
      //   .regex(
      //     /[A-Z]/,
      //     "Confirm password must contain at least one uppercase letter"
      //   )
      //   .regex(/[0-9]/, "Confirm password must contain at least one number")
      //   .regex(
      //     /[!@#$%^&*(),.?":{}|<>]/,
      //     "Confirm password must contain at least one special character"
      //   ),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Passwords must match",
          path: ["confirmPassword"],
        });
      }
    });
export type TSignUpSchema = z.infer<typeof schema>;