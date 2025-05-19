import { useState } from "react";
import { useNavigate } from "react-router";

function Subscribe() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!email.trim()) {
      alert("กรุณากรอกอีเมลก่อน");
      return;
    }

    navigate("/success/" + email);
  }

  return (
    <div>
      <h1>Subscribe Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />&nbsp;  
          <button type="submit">สมัครเลย</button>
      </form>
      
    </div>
  );
}

export default Subscribe;
