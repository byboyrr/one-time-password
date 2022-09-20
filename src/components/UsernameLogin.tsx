import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { users } from "../utils/users";

interface Props {
  setCurrentUser: Function;
}

export const UsernameLogin = ({ setCurrentUser }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: { username: "" },
  });
  const [error, setError] = useState<string>("");

  // daca username-ul introdus in input exista atunci o sa setam valoarea, implicit
  // trecem la pasul al doilea, in caz contrar afisam un mesaj de eraore
  const onSubmit = (formData: any) =>
    users.find(
      (user: any) =>
        user.username === formData.username && setCurrentUser(user.id)
    ) || setError("User inexistent");

  return (
    <div>
      <p> Users: </p>
      {users.map((user) => {
        return (
          <p key={user.id}>
            id: {user.id} username: {user.username}
          </p>
        );
      })}
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "20%",
          paddingRight: "20%",
          gap: "20px",
        }}
      >
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <input {...field} id="username" name="username" type="text" />
          )}
        />
        <button>Spre password login</button>
        {!!error && (
          <p
            style={{ color: "red", display: "flex", justifyContent: "center" }}
          >
            {error}
          </p>
        )}
      </form>
    </div>
  );
};
