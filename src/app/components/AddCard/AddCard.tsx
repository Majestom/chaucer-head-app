import { useForm } from "@tanstack/react-form";
import * as classes from "./AddCard.css";

export default function AddCard() {
  const form = useForm({
    defaultValues: {
      title: "",
      author: "",
      description: "",
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
                <input
                  className={classes.formField}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) =>
                    field.handleChange(e.target.value)
                  }
                />
              )}
            </form.Field>
            <form.Field name="author">
              {(field) => (
                <input
                  className={classes.formField}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) =>
                    field.handleChange(e.target.value)
                  }
                />
              )}
            </form.Field>
            <form.Field name="description">
              {(field) => (
                <input
                  className={classes.formField}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) =>
                    field.handleChange(e.target.value)
                  }
                />
              )}
            </form.Field>
          </div>
          <button type="submit">Submit</button>
        </form>
      </form.Provider>
    </div>
  );
}
