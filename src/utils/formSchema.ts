import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "product name should be more than 2 characters!",
    })
    .max(50, {
      message: "product name cannot more than 50 characters!",
    }),
  description: z
    .string()
    .min(3, {
      message: "description should be more tham 2 characters!",
    })
    .max(50),
  company: z.string().min(1).max(50, {
    message: "company name cannot more than 50 characters!",
  }),
  production_date: z.string().date(),
  expired_date: z.string().date(),
});
