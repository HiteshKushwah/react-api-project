

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../axiosInstance";

function ResetPassword() {
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passError, setPassError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { id, token } = useParams();
  const userId = id;
  const goTo = useNavigate();

  const handleChange = (field, value) => {
    if (field === "pass") {
      setPass(value);
      if (confirmPass && value !== confirmPass) {
        setPassError("Passwords do not match.");
      } else {
        setPassError("");
      }
    } else if (field === "confirmPass") {
      setConfirmPass(value);
      if (pass && value !== pass) {
        setPassError("Passwords do not match.");
      } else {
        setPassError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass !== confirmPass) {
      setPassError("Passwords do not match.");
      return;
    }

    try {
      const response = await axiosInstance.post("/user/reset-password", { userId, token, password: pass });
      console.log("Reset Password Response:", response.data);

      toast.success("Password Changed Successfully.");

      setTimeout(() => {
        goTo("/");
      }, 2000);
    } catch (error) {
      console.error("Reset Password Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="box">
      <ToastContainer />
      <h3>Reset Password</h3>
      <form onSubmit={handleSubmit}>
        <div className="password-toggle">
          <label>New Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={pass}
            onChange={(e) => handleChange("pass", e.target.value)}
            required
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <div className="password-toggle">
          <label>Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={confirmPass}
            onChange={(e) => handleChange("confirmPass", e.target.value)}
            required
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        {passError && <p className="error">{passError}</p>}
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
