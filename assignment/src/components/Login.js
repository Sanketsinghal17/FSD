import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("userData"));

    if (!savedUser) {
      setMessage("No user found. Please register first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      setMessage("Login Successful!");
    } else {
      setMessage("Invalid email or password!");
    }
  };

  return (
    <div className="center-page">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>

      {message && <p style={{ color: message.includes("Successful") ? "green" : "red" }}>{message}</p>}
    </div>
  );
}

export default Login;
