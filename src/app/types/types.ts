import { z } from "zod";

export const BookSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  description: z.string(),
  price: z.string().optional(),
  image: z
    .object({ data: z.number().array(), type: z.string() })
    .optional(),
  onSale: z.boolean().optional(),
  draft: z.boolean().optional(),
});

export const BookDataSchema = z.array(BookSchema);

export type BookDataType = z.infer<typeof BookDataSchema>;

export type BookType = z.infer<typeof BookSchema>;
