import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

interface Props {
  currentUser: string;
  setCurrentUser: Function;
}

export const CheckPassword = ({ currentUser, setCurrentUser }: Props) => {
  const [password, setPassword] = useState<string>("");
  const { control, handleSubmit } = useForm({
    defaultValues: { password: "" },
  });
  const [message, setMessage] = useState<string>("");

  // afisam mesaj daca parola este ok sau nu
  const onSubmit = (formData: any) => {
    if (formData.password === password) setMessage("Success");
    else setMessage("Invalid password");
  };

  // in acest useEffect generam parola, initial la prima randare cand parola este empty string
  // o generam, iar mai apoi cu un timeout la fiecare 30 secunde generam o noua parola
  useEffect(() => {
    const currentDateInMilisec = Number(new Date()).toString();
    if (password === "") setPassword(currentUser + currentDateInMilisec);
    else
      setTimeout(() => {
        setPassword(currentUser + currentDateInMilisec);
      }, 30000);
  }, [password]);

  return (
    <div>
      <p> Parola curenta: {password} </p>
      <button onClick={() => setCurrentUser("")}>
        Inapoi la username login
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "25%",
          gap: "20px",
        }}
      >
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <input {...field} id="password" name="password" type="text" />
          )}
        />
        <button> Verify Password</button>
        {!!message && (
          <p
            style={{
              color: message === "Success" ? "green" : "red",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};
