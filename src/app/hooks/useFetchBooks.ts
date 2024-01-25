import { useState, useEffect } from "react";

export type BookItem = {
  id: number;
  title: string;
  author: string;
  price: string;
  onSale: boolean;
  draft: boolean;
  description?: string;
  coverImage?: string;
  publisher?: string;
};

export default function useFetchBooks() {
  const [data, setData] = useState<BookItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/books"
        );
        if (!response.ok) {
          throw new Error("Error fetching books");
        }
        const data = await response.json();
        setData(data.result.rows);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("data in hook: ", data);

  return { data, loading, error };
}
