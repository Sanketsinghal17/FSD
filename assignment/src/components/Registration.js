import { useState } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMessage("All fields are required!");
      return;
    }

    // Save user data in localStorage
    const user = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(user));

    setMessage("Registration Successful!");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="center-page">
      <h1>Registration</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type="email" 
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password" 
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
    </div>
  );
}

export default Registration;
