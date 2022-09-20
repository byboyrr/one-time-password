import { useState } from "react";
import { UsernameLogin } from "./components/UsernameLogin";
import { CheckPassword } from "./components/CheckPassword";

// Am creat o mini aplicatie care e compusa din 2 pasi.
// Fisierul users.ts din /utils contine lista cu userii (id si username)
// Primul pas este sa facem un login by username
// In al doilea pas trebuie sa introducem parola generata, ea fiind compusa din userId
// si date.now in format de milisecunde.
// In functie de corectitudinea parolei, afisam un mesaj corespunzator.

export default function App() {
  const [currentUser, setCurrentUser] = useState<string>("");

  if (!currentUser) return <UsernameLogin setCurrentUser={setCurrentUser} />;
  else
    return (
      <CheckPassword
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    );
}
