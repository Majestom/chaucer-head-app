import { BookType } from "@/app/types/types";

export default function useAddBook() {
  const postTheBook = (bookData: BookType) =>
    fetch("/api/add-book", {
      method: "POST",
      body: JSON.stringify(bookData),
      headers: {
        "Content-Type": "application/json",
      },
    });

  return postTheBook;
}
