
// // // // // // import React, { useState } from 'react';
// // // // // // import { useNavigate, useParams } from 'react-router-dom';
// // // // // // import { toast, ToastContainer } from 'react-toastify';
// // // // // // import axiosInstance from '../axiosInstance';

// // // // // // const ResetPassword = () => {
// // // // // //   const [newPassword, setNewPassword] = useState('');
// // // // // //   const [message, setMessage] = useState('');
// // // // // //   const { id: userId, token } = useParams();
// // // // // //   const navigate = useNavigate();

// // // // // //   const handleResetPassword = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setMessage('Resetting password...');

// // // // // //     try {
// // // // // //       const response = await axiosInstance.post('/user/reset-password', {
// // // // // //         password: newPassword,
// // // // // //         userId,
// // // // // //         token,
// // // // // //       });

// // // // // //       console.log('Reset Password Response:', response.data);
// // // // // //       setMessage('Password reset successful!');
// // // // // //       toast.success('Password reset successful!');
// // // // // //       setTimeout(() => navigate('/login'), 2000);
// // // // // //     } catch (error) {
// // // // // //       console.error('Reset Password Error:', error.response?.data || error.message);
// // // // // //       setMessage('Failed to reset password. The link may be invalid or expired.');
// // // // // //       toast.error(error.response?.data?.message || 'Failed to reset password.');
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="box">
// // // // // //       <h2>Reset Password</h2>
// // // // // //       <form onSubmit={handleResetPassword}>
// // // // // //         <div>
// // // // // //           <label>New Password</label>
// // // // // //           <input
// // // // // //             type="password"
// // // // // //             value={newPassword}
// // // // // //             onChange={(e) => setNewPassword(e.target.value)}
// // // // // //             required
// // // // // //             minLength="6"
// // // // // //           />
// // // // // //         </div>
// // // // // //         <button type="submit">Reset Password</button>
// // // // // //       </form>
// // // // // //       {message && (
// // // // // //         <p className={message.includes('Failed') ? 'error' : 'success'}>
// // // // // //           {message}
// // // // // //         </p>
// // // // // //       )}
// // // // // //       <ToastContainer />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ResetPassword;



// // // // // import React, { useState } from 'react';
// // // // // import { useNavigate, useParams } from 'react-router-dom';
// // // // // import { toast, ToastContainer } from 'react-toastify';
// // // // // import axiosInstance from '../axiosInstance';

// // // // // const ResetPassword = () => {
// // // // //   const [newPassword, setNewPassword] = useState('');
// // // // //   const [message, setMessage] = useState('');
// // // // //   const { id: userId, token } = useParams();
// // // // //   const navigate = useNavigate();

// // // // //   const handleResetPassword = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setMessage('Resetting password...');

// // // // //     try {
// // // // //       const response = await axiosInstance.post('/user/reset-password', {
// // // // //         password: newPassword,
// // // // //         userId,
// // // // //         token,
// // // // //       });

// // // // //       console.log('Reset Password Response:', response.data);
// // // // //       setMessage('Password reset successful!');
// // // // //       toast.success('Password reset successful!');
// // // // //       setTimeout(() => navigate('/login'), 2000);
// // // // //     } catch (error) {
// // // // //       console.error('Reset Password Error:', error.response?.data || error.message);
// // // // //       setMessage('Failed to reset password. The link may be invalid or expired.');
// // // // //       toast.error(error.response?.data?.message || 'Failed to reset password.');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="box">
// // // // //       <h2>Reset Password</h2>
// // // // //       <form onSubmit={handleResetPassword}>
// // // // //         <div>
// // // // //           <label>New Password</label>
// // // // //           <input
// // // // //             type="password"
// // // // //             value={newPassword}
// // // // //             onChange={(e) => setNewPassword(e.target.value)}
// // // // //             required
// // // // //             minLength="6"
// // // // //           />
// // // // //         </div>
// // // // //         <button type="submit">Reset Password</button>
// // // // //       </form>
// // // // //       {message && (
// // // // //         <p className={message.includes('Failed') ? 'error' : 'success'}>
// // // // //           {message}
// // // // //         </p>
// // // // //       )}
// // // // //       <ToastContainer />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ResetPassword;



// // // // import { useState } from "react";
// // // // import { useNavigate, useParams } from "react-router-dom";
// // // // import { toast, ToastContainer } from "react-toastify";
// // // // import axiosInstance from "../axiosInstance";

// // // // function ResetPassword() {
// // // //   const [pass, setPass] = useState("");
// // // //   const { id, token } = useParams();
// // // //   const userId = id;
// // // //   const goTo = useNavigate();

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     console.log("Id and token:", userId, token);

// // // //     try {
// // // //       const response = await axiosInstance.post("/user/reset-password", { userId, token, password: pass });
// // // //       console.log("Reset Password Response:", response.data);

// // // //       toast.success("Password Changed Successfully.");

// // // //       setTimeout(() => {
// // // //         goTo("/");
// // // //       }, 2000);
// // // //     } catch (error) {
// // // //       console.error("Reset Password Error:", error.response?.data || error.message);
// // // //       toast.error(error.response?.data?.message || "An error occurred.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section style={{ background: "linear-gradient(to bottom, #FFF8E1, #FFD54F)", height: "100vh" }}>
// // // //       <ToastContainer />
// // // //       <div className="container py-5 h-100">
// // // //         <div className="row d-flex justify-content-center align-items-center h-100">
// // // //           <div className="col-lg-6 col-xl-4">
// // // //             <div className="card rounded-3 p-4">
// // // //               <h3 className="mb-4 text-center">Reset Password</h3>
// // // //               <form onSubmit={handleSubmit}>
// // // //                 <div className="form-outline mb-4">
// // // //                   <label className="form-label">New Password</label>
// // // //                   <input
// // // //                     type="password"
// // // //                     value={pass}
// // // //                     onChange={(event) => setPass(event.target.value)}
// // // //                     className="form-control"
// // // //                     required
// // // //                   />
// // // //                 </div>
// // // //                 <button type="submit" className="btn btn-warning btn-lg w-100">
// // // //                   Change Password
// // // //                 </button>
// // // //               </form>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // export default ResetPassword;





// // // import { useState } from "react";
// // // import { useNavigate, useParams } from "react-router-dom";
// // // import { toast, ToastContainer } from "react-toastify";
// // // import axiosInstance from "../axiosInstance";

// // // function ResetPassword() {
// // //   const [pass, setPass] = useState("");
// // //   const { id, token } = useParams();
// // //   const userId = id;
// // //   const goTo = useNavigate();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     console.log("Id and token:", userId, token);

// // //     try {
// // //       const response = await axiosInstance.post("/user/reset-password", { userId, token, password: pass });
// // //       console.log("Reset Password Response:", response.data);

// // //       toast.success("Password Changed Successfully.");

// // //       setTimeout(() => {
// // //         goTo("/");
// // //       }, 2000);
// // //     } catch (error) {
// // //       console.error("Reset Password Error:", error.response?.data || error.message);
// // //       toast.error(error.response?.data?.message || "An error occurred.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="box">
// // //       <ToastContainer />
// // //       <h3>Reset Password</h3>
// // //       <form onSubmit={handleSubmit}>
// // //         <div>
// // //           <label>New Password</label>
// // //           <input
// // //             type="password"
// // //             value={pass}
// // //             onChange={(event) => setPass(event.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         <button type="submit">Change Password</button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default ResetPassword;


// // import { useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { toast, ToastContainer } from "react-toastify";
// // import axiosInstance from "../axiosInstance";

// // function ResetPassword() {
// //   const [pass, setPass] = useState("");
// //   const [confirmPass, setConfirmPass] = useState("");
// //   const [passError, setPassError] = useState("");
// //   const { id, token } = useParams();
// //   const userId = id;
// //   const goTo = useNavigate();

// //   const handlePasswordChange = (e) => {
// //     const newPass = e.target.value;
// //     setPass(newPass);
// //     if (confirmPass && newPass !== confirmPass) {
// //       setPassError("Passwords do not match.");
// //     } else {
// //       setPassError("");
// //     }
// //   };

// //   const handleConfirmPasswordChange = (e) => {
// //     const newConfirmPass = e.target.value;
// //     setConfirmPass(newConfirmPass);
// //     if (pass && newConfirmPass !== pass) {
// //       setPassError("Passwords do not match.");
// //     } else {
// //       setPassError("");
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (pass !== confirmPass) {
// //       setPassError("Passwords do not match.");
// //       return;
// //     }

// //     try {
// //       const response = await axiosInstance.post("/user/reset-password", { userId, token, password: pass });
// //       console.log("Reset Password Response:", response.data);

// //       toast.success("Password Changed Successfully.");

// //       setTimeout(() => {
// //         goTo("/");
// //       }, 2000);
// //     } catch (error) {
// //       console.error("Reset Password Error:", error.response?.data || error.message);
// //       toast.error(error.response?.data?.message || "An error occurred.");
// //     }
// //   };

// //   return (
// //     <div className="box">
// //       <ToastContainer />
// //       <h3>Reset Password</h3>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>New Password</label>
// //           <input
// //             type="password"
// //             value={pass}
// //             onChange={handlePasswordChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Confirm Password</label>
// //           <input
// //             type="password"
// //             value={confirmPass}
// //             onChange={handleConfirmPasswordChange}
// //             required
// //           />
// //         </div>
// //         {passError && <p className="error">{passError}</p>}
// //         <button type="submit">Change Password</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default ResetPassword;



// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import axiosInstance from "../axiosInstance";

// function ResetPassword() {
//   const [pass, setPass] = useState("");
//   const [confirmPass, setConfirmPass] = useState("");
//   const [passError, setPassError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const { id, token } = useParams();
//   const userId = id;
//   const goTo = useNavigate();

//   const handlePasswordChange = (e) => {
//     const newPass = e.target.value;
//     setPass(newPass);
//     if (confirmPass && newPass !== confirmPass) {
//       setPassError("Passwords do not match.");
//     } else {
//       setPassError("");
//     }
//   };

//   const handleConfirmPasswordChange = (e) => {
//     const newConfirmPass = e.target.value;
//     setConfirmPass(newConfirmPass);
//     if (pass && newConfirmPass !== pass) {
//       setPassError("Passwords do not match.");
//     } else {
//       setPassError("");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (pass !== confirmPass) {
//       setPassError("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await axiosInstance.post("/user/reset-password", { userId, token, password: pass });
//       console.log("Reset Password Response:", response.data);

//       toast.success("Password Changed Successfully.");

//       setTimeout(() => {
//         goTo("/");
//       }, 2000);
//     } catch (error) {
//       console.error("Reset Password Error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "An error occurred.");
//     }
//   };

//   return (
//     <div className="box">
//       <ToastContainer />
//       <h3>Reset Password</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="password-toggle">
//           <label>New Password</label>
//           <input
//             type={showPassword ? "text" : "password"}
//             value={pass}
//             onChange={handlePasswordChange}
//             required
//           />
//           <span
//             className="eye-icon"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? "🙈" : "👁️"}
//           </span>
//         </div>
//         <div className="password-toggle">
//           <label>Confirm Password</label>
//           <input
//             type={showPassword ? "text" : "password"}
//             value={confirmPass}
//             onChange={handleConfirmPasswordChange}
//             required
//           />
//           <span
//             className="eye-icon"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? "🙈" : "👁️"}
//           </span>
//         </div>
//         {passError && <p className="error">{passError}</p>}
//         <button type="submit">Change Password</button>
//       </form>
//     </div>
//   );
// }

// export default ResetPassword;


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
