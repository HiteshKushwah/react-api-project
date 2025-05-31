


import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

function ForgotPassword() {
  const [emailBox, setEmailBox] = useState("");
  const goTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/user/forgot-password", { email: emailBox });
      console.log("Forgot Password Response:", response.data);

      toast.success("Password reset link has been sent to your Email");

      setTimeout(() => {
        goTo("/");
      }, 2000);
    } catch (error) {
      console.error("Forgot Password Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="box">
      <ToastContainer />
      <h3>Forgot Password</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            onChange={(event) => setEmailBox(event.target.value)}
            placeholder="Enter your Email"
            type="email"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgotPassword;