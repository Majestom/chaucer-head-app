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

  type FieldName =
    | "id"
    | "title"
    | "author"
    | "description"
    | "price"
    | "image"
    | "onSale"
    | "draft";

  type FieldError = {
    message: string;
    type: string;
    types: {
      required: string;
    };
    ref: {
      name: FieldName;
    };
  };

  type Field = {
    name: FieldName;
    type: string;
    placeholder: string;
    label: string;
    error: FieldError | undefined;
  };

  const createField = (
    name: FieldName,
    type: string,
    placeholder: string,
    label: string,
    error: FieldError | undefined
  ): Field => {
    return {
      name,
      type,
      placeholder,
      label,
      error,
    };
  };

  const fieldsData: Field[] = [
    {
      name: "title",
      type: "text",
      placeholder: "Title of the book",
      label: "Title",
      error: {
        message: "Title is required.",
        type: "required",
        types: {
          required: "Title is required.",
        },
        ref: {
          name: "title",
        },
      },
    },
    {
      name: "author",
      type: "text",
      placeholder: "Author of the book",
      label: "Author",
      error: {
        message: "Author is required.",
        type: "required",
        types: {
          required: "Author is required.",
        },
        ref: {
          name: "author",
        },
      },
    },
    {
      name: "description",
      type: "text",
      placeholder: "Description of the book",
      label: "Description",
      error: {
        message: "Description is required.",
        type: "required",
        types: {
          required: "Description is required.",
        },
        ref: {
          name: "description",
        },
      },
    },
    {
      name: "price",
      type: "number",
      placeholder: "Price of the book",
      label: "Price",
      error: {
        message: "Price is required.",
        type: "required",
        types: {
          required: "Price is required.",
        },
        ref: {
          name: "price",
        },
      },
    },
    {
      name: "image",
      type: "hidden",
      placeholder: "",
      label: "",
      error: {
        message: "",
        type: "",
        types: {
          required: "",
        },
        ref: {
          name: "image",
        },
      },
    },
    {
      name: "onSale",
      type: "hidden",
      placeholder: "",
      label: "",
      error: {
        message: "",
        type: "",
        types: {
          required: "",
        },
        ref: {
          name: "onSale",
        },
      },
    },
  ];

  const fields: Field[] = fieldsData.map((fieldData) => {
    return createField(
      fieldData.name,
      fieldData.type,
      fieldData.placeholder,
      fieldData.label,
      fieldData.error
    );
  });

  return (
    <>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        {fields.map(
          ({ type, name, label, placeholder }) => {
            if (type !== "hidden") {
              return (
                <div
                  key={name}
                  className={classes.inputHolder}
                >
                  <label htmlFor={name}>{label}</label>
                  <input
                    {...register(name, {
                      required: `${label} is required.`,
                    })}
                    placeholder={placeholder}
                    className={classes.formField}
                    name={name}
                  />
                  {errors[name as keyof typeof errors] && (
                    <div className={classes.inputHolder}>
                      <p>
                        {
                          errors[
                            name as keyof typeof errors
                          ]?.message
                        }
                      </p>
                    </div>
                  )}
                </div>
              );
            }
          }
        )}
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
    </>

    // <div className={classes.card}>
    //   <form
    //     className={classes.form}
    //     onSubmit={handleSubmit(onSubmit)}
    //   >
    //     <div className={classes.inputHolder}>
    //       <label htmlFor={"title"}>Title</label>
    //       <input
    //         {...register("title", {
    //           required: "Title is required.",
    //         })}
    //         placeholder="Title of the book"
    //         className={classes.formField}
    //         name={"title"}
    //       />
    //       {errors.title ? (
    //         <div className={classes.inputHolder}>
    //           {errors.title && (
    //             <p>{errors.title.message}</p>
    //           )}
    //         </div>
    //       ) : null}
    //       <label htmlFor={"author"}>Author</label>
    //       <input
    //         {...register("author", {
    //           required: "Author is required.",
    //         })}
    //         placeholder="Author of the book"
    //         className={classes.formField}
    //         name={"author"}
    //       />

    //       <label htmlFor={"description"}>Description</label>
    //       <textarea
    //         {...register("description", {
    //           required: "Description is required.",
    //         })}
    //         placeholder="Description of the book"
    //         className={classes.formField}
    //         name={"description"}
    //       />

    //       <label htmlFor={"price"}>Price</label>
    //       <input
    //         {...register("price", {
    //           required: "Price is required.",
    //         })}
    //         placeholder="Price of the book"
    //         className={classes.formField}
    //         name={"price"}
    //       />
    //       <input type="hidden" {...register("image")} />

    //       <Controller
    //         control={control}
    //         name="onSale"
    //         render={({ field }) => (
    //           <ToggleSwitch
    //             showLeft={field.value ? field.value : false}
    //             setShowLeft={field.onChange}
    //             toggleLabel={"On Sale?"}
    //           />
    //         )}
    //       />
    //       <Controller
    //         control={control}
    //         name="onSale"
    //         render={({ field }) => (
    //           <SaleIndicator onSale={field.value} />
    //         )}
    //       />
    //     </div>
    //     <div className={classes.buttonHolder}>
    //       <button type="submit" className={classes.button}>
    //         <Image
    //           priority={true}
    //           src={"/icons/add.svg"}
    //           alt={"Add"}
    //           width={50}
    //           height={50}
    //         />
    //         Push To Submit
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
}
