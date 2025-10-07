import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      setError("");
      // Submit the form
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input
          type="password"
          name="password"
          id=""
          defaultValue={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledField;
