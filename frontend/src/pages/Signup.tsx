// src/pages/Signup.tsx
import { useState } from "react";
import Auth from "../components/Auth/Auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // handle signup logic here
    console.log("Signing up:", email, password);
  };

  return (
    <Auth
      type="signup"
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleSignup}
    />
  );
}
