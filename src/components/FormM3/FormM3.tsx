import css from "./FormM3.module.css";
interface FormM3Props {
  onSubmit: (value: string) => void;
}

export default function FormM3({ onSubmit }: FormM3Props) {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    onSubmit(username);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <input type="text" name="username" />
      <button type="submit">Place order</button>
    </form>
  );
}
