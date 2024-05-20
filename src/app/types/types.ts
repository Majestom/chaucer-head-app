import { z } from "zod";

export const ImageSchema = z
  .object({
    data: z.number().array().optional(),
    type: z.string().optional(),
  })
  .default({ data: [], type: "" });

export type ImageType = z.infer<typeof ImageSchema>;

export const BookSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  description: z.string(),
  price: z.string(),
  image: ImageSchema,
  onSale: z.boolean().optional(),
  draft: z.boolean().optional(),
});

export const BookDataSchema = z.array(BookSchema);

export type BookDataType = z.infer<typeof BookDataSchema>;

export type BookType = z.infer<typeof BookSchema>;
