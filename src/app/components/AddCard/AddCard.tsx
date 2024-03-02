import Image from "next/image";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { SaleIndicator } from "../SaleIndicator/SaleIndicator";
import * as classes from "./AddCard.css";

export default function AddCard() {
  return (
    <div className={classes.card}>
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className={classes.inputHolder}>
          <label htmlFor={"title"}>Title</label>
          <input
            className={classes.formField}
            name={"title"}
          />

          <label htmlFor={"author"}>Author</label>
          <input
            className={classes.formField}
            name={"author"}
          />

          <label htmlFor={"description"}>Description</label>
          <textarea
            className={classes.formField}
            name={"description"}
          />

          <label htmlFor={"price"}>Price</label>
          <input
            className={classes.formField}
            name={"price"}
          />

          <ToggleSwitch
            showLeft={true}
            setShowLeft={() => true}
            toggleLabel={"On Sale?"}
          />
          <SaleIndicator onSale={true} />
        </div>
        <div className={classes.buttonHolder}>
          <button type="submit" className={classes.button}>
            <Image
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
