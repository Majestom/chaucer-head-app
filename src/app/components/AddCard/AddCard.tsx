import { useForm } from "@tanstack/react-form";
import * as classes from "./AddCard.css";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";

export default function AddCard() {
  const form = useForm({
    defaultValues: {
      title: "",
      author: "",
      description: "",
      price: "",
      onSale: false,
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <div className={classes.card}>
      <form.Provider>
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
        >
          <div className={classes.inputHolder}>
            <form.Field name="title">
              {(field) => (
                <>
                  <label htmlFor={field.name}>Title</label>
                  <input
                    className={classes.formField}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) =>
                      field.handleChange(e.target.value)
                    }
                  />
                </>
              )}
            </form.Field>
            <form.Field name="author">
              {(field) => (
                <>
                  <label htmlFor={field.name}>Author</label>
                  <input
                    className={classes.formField}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) =>
                      field.handleChange(e.target.value)
                    }
                  />
                </>
              )}
            </form.Field>
            <form.Field name="description">
              {(field) => (
                <>
                  <label htmlFor={field.name}>
                    Description
                  </label>
                  <textarea
                    className={classes.formField}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) =>
                      field.handleChange(e.target.value)
                    }
                  />
                </>
              )}
            </form.Field>
            <form.Field name="price">
              {(field) => (
                <>
                  <label htmlFor={field.name}>Price</label>
                  <input
                    className={classes.formField}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) =>
                      field.handleChange(e.target.value)
                    }
                  />
                </>
              )}
            </form.Field>
            <form.Field name="onSale">
              {(field) => (
                <>
                  <ToggleSwitch
                    showLeft={field.state.value}
                    setShowLeft={field.handleChange}
                    toggleLabel={"On Sale?"}
                  />
                  {field.state.value === false ? (
                    <div className={classes.onSaleMarker}>
                      On Sale
                    </div>
                  ) : (
                    <div className={classes.offSaleMarker}>
                      Not On Sale
                    </div>
                  )}
                </>
              )}
            </form.Field>
          </div>
          <div className={classes.buttonHolder}>
            <button
              className={classes.submitButton}
              type="submit"
            >
              Send To Database
            </button>
          </div>
        </form>
      </form.Provider>
    </div>
  );
}
