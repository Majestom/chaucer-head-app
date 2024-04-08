import { useState, useEffect } from "react";
import {
  BookDataSchema,
  BookDataType,
} from "@/app/types/types";

export default function useFetchBooks() {
  const [rowData, setRowData] = useState<BookDataType[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/books-new`
        );
        if (!res.ok) {
          throw new Error("Error fetching books");
        }
        const data = await res.json();
        setRowData(data.result);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const response = BookDataSchema.safeParse(rowData);

  if (response.success !== true) {
    console.log("response.error: ", response.error);
    return { error: response.error };
  } else {
    return { error, data: response.data, loading };
  }
}
