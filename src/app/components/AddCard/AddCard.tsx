import { useContext, useEffect } from "react";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import useAddBook from "@/app/hooks/useAddBook";
import { ImageContext } from "@/app/contexts/ImageContext";
import { BookType } from "@/app/types/types";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { SaleIndicator } from "../SaleIndicator/SaleIndicator";
import * as classes from "./AddCard.css";

export default function AddCard() {
  const postTheBook = useAddBook();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<BookType>();
  const image = useContext(ImageContext)[0];

  useEffect(() => {
    if (!image) return;
    setValue("image", image);
  }, [image, setValue]);

  const onSubmit = (data: BookType) => {
    postTheBook(data);
  };

  return (
    <div className={classes.card}>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classes.inputHolder}>
          <label htmlFor={"title"}>Title</label>
          <input
            {...register("title", {
              required: "Title is required.",
            })}
            placeholder="Title of the book"
            className={classes.formField}
            name={"title"}
          />

          <label htmlFor={"author"}>Author</label>
          <input
            {...register("author", {
              required: "Author is required.",
            })}
            placeholder="Author of the book"
            className={classes.formField}
            name={"author"}
          />

          <label htmlFor={"description"}>Description</label>
          <textarea
            {...register("description", {
              required: "Description is required.",
            })}
            placeholder="Description of the book"
            className={classes.formField}
            name={"description"}
          />

          <label htmlFor={"price"}>Price</label>
          <input
            {...register("price", {
              required: "Price is required.",
            })}
            placeholder="Price of the book"
            className={classes.formField}
            name={"price"}
          />
          <input type="hidden" {...register("image")} />

          <Controller
            control={control}
            name="onSale"
            render={({ field }) => (
              <ToggleSwitch
                showLeft={field.value ? field.value : false}
                setShowLeft={field.onChange}
                toggleLabel={"On Sale?"}
              />
            )}
          />
          <Controller
            control={control}
            name="onSale"
            render={({ field }) => (
              <SaleIndicator onSale={field.value} />
            )}
          />
        </div>
        <div className={classes.buttonHolder}>
          <button type="submit" className={classes.button}>
            <Image
              priority={true}
              src={"/icons/add.svg"}
              alt={"Add"}
              width={50}
              height={50}
            />
            Push To Submit
          </button>
        </div>
      </form>
    </div>
  );
}
