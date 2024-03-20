import { BookDataSchema } from "@/app/types/types";

export default function useAddBook() {
  const payload = BookDataSchema.safeParse(bookData);
}
