import { useForm } from "@tanstack/react-form";
import * as classes from "./AddCard.css";

export default function AddCard() {
  const form = useForm({
    defaultValues: {
      fullName: "",
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
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
        >
          <div>
            <form.Field name="fullName">
              {(field) => (
                <input
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
