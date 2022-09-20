import { useState } from "react";
import { UsernameLogin } from "./components/UsernameLogin";
import { CheckPassword } from "./components/CheckPassword";

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
