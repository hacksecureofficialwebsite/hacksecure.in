import { useState } from "react";
import Auth from "../components/Auth/Auth";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e: React.FormEvent) => {
    e.preventDefault();
    // handle signin logic here
    console.log("Signing in:", email, password);
  };

  return (
    <Auth
      type="signin"
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleSignin}
    />
  );
}
