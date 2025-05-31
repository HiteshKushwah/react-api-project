// // // // // // import React, { useState } from 'react';
// // // // // // import { useNavigate, Link } from 'react-router-dom';
// // // // // // import axios from 'axios';
// // // // // // import { toast, ToastContainer } from 'react-toastify';
// // // // // // import api from '../api';

// // // // // // const Login = () => {
// // // // // //   const [email, setEmail] = useState('');
// // // // // //   const [password, setPassword] = useState('');
// // // // // //   const [error, setError] = useState('');
// // // // // //   const navigate = useNavigate();

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setError('');

// // // // // //     try {
// // // // // //       const result = await axios.post(api.LOGIN, { email, password });
// // // // // //       console.log('Login Response:', result.data);
// // // // // //       toast.success('Login successful!');

// // // // // //       // Extract user name from response for dashboard
// // // // // //       const userName = result.data.data.name;

// // // // // //       setTimeout(() => {
// // // // // //         navigate('/dashboard', { state: { userName } });
// // // // // //       }, 2000);
// // // // // //     } catch (err) {
// // // // // //       console.log('Error Response:', err.response);
// // // // // //       const errorMessage = err.response?.data?.message || 'Invalid credentials. Please try again.';
// // // // // //       setError(errorMessage);
// // // // // //       toast.error(errorMessage);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="auth-container">
// // // // // //       <h2>Login</h2>
// // // // // //       <form onSubmit={handleSubmit}>
// // // // // //         <div>
// // // // // //           <label>Email:</label>
// // // // // //           <input
// // // // // //             type="email"
// // // // // //             value={email}
// // // // // //             onChange={(e) => setEmail(e.target.value)}
// // // // // //             required
// // // // // //           />
// // // // // //         </div>
// // // // // //         <div>
// // // // // //           <label>Password:</label>
// // // // // //           <input
// // // // // //             type="password"
// // // // // //             value={password}
// // // // // //             onChange={(e) => setPassword(e.target.value)}
// // // // // //             required
// // // // // //           />
// // // // // //         </div>
// // // // // //         {error && <p className="error">{error}</p>}
// // // // // //         <button type="submit">Login</button>
// // // // // //       </form>
// // // // // //       <div>
// // // // // //         <p>Don't have an account? <Link to="/register">Register</Link></p>
// // // // // //       </div>
// // // // // //       <ToastContainer />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Login;

// // // // // import React, { useState } from 'react';
// // // // // import { useNavigate, Link } from 'react-router-dom';
// // // // // import axios from 'axios';
// // // // // import { toast, ToastContainer } from 'react-toastify';
// // // // // import api from '../api';

// // // // // const Login = () => {
// // // // //   const [emailBox, setEmailBox] = useState('');
// // // // //   const [pass, setPass] = useState('');
// // // // //   const [problem, setProblem] = useState('');
// // // // //   const goTo = useNavigate();

// // // // //   const loginNow = async (event) => {
// // // // //     event.preventDefault();
// // // // //     setProblem('');

// // // // //     try {
// // // // //       const response = await axios.post(api.LOGIN, { email: emailBox, password: pass });
// // // // //       toast.success('Logged in!');
// // // // //       const userName = response.data.data.name;
// // // // //       setTimeout(() => {
// // // // //         goTo('/dashboard', { state: { userName } });
// // // // //       }, 2000);
// // // // //     } catch (err) {
// // // // //       const errorMsg = err.response?.data?.message || 'Wrong email or password.';
// // // // //       setProblem(errorMsg);
// // // // //       toast.error(errorMsg);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="box">
// // // // //       <h2>Login</h2>
// // // // //       <form onSubmit={loginNow}>
// // // // //         <div>
// // // // //           <label>Email</label>
// // // // //           <input
// // // // //             type="email"
// // // // //             value={emailBox}
// // // // //             onChange={(e) => setEmailBox(e.target.value)}
// // // // //             required
// // // // //           />
// // // // //         </div>
// // // // //         <div>
// // // // //           <label>Password</label>
// // // // //           <input
// // // // //             type="password"
// // // // //             value={pass}
// // // // //             onChange={(e) => setPass(e.target.value)}
// // // // //             required
// // // // //           />
// // // // //         </div>
// // // // //         {problem && <p className="error">{problem}</p>}
// // // // //         <button type="submit">Login</button>
// // // // //       </form>
// // // // //       <div>
// // // // //         <p style={{color:"white"}}>Not signed up? <Link to="/register">Sign Up</Link></p>
// // // // //       </div>
// // // // //       <ToastContainer />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Login;



// // // // import React, { useState } from 'react';
// // // // import { useNavigate, Link } from 'react-router-dom';
// // // // import axios from 'axios';
// // // // import { toast, ToastContainer } from 'react-toastify';
// // // // import api from '../api';

// // // // const Login = () => {
// // // //   const [emailBox, setEmailBox] = useState('');
// // // //   const [pass, setPass] = useState('');
// // // //   const [problem, setProblem] = useState('');
// // // //   const goTo = useNavigate();

// // // //   const loginNow = async (event) => {
// // // //     event.preventDefault();
// // // //     setProblem('');

// // // //     try {
// // // //       const response = await axios.post(api.LOGIN, { email: emailBox, password: pass });
// // // //       toast.success('Logged in!');
// // // //       const userName = response.data.data.name;
// // // //       const userToken = response.data.token; // Assuming token comes in response
// // // //       setTimeout(() => {
// // // //         goTo('/dashboard', { state: { userName, userToken } });
// // // //       }, 2000);
// // // //     } catch (err) {
// // // //       const errorMsg = err.response?.data?.message || 'Wrong email or password.';
// // // //       setProblem(errorMsg);
// // // //       toast.error(errorMsg);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="box">
// // // //       <h2>Login</h2>
// // // //       <form onSubmit={loginNow}>
// // // //         <div>
// // // //           <label>Email</label>
// // // //           <input
// // // //             type="email"
// // // //             value={emailBox}
// // // //             onChange={(e) => setEmailBox(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div>
// // // //           <label>Password</label>
// // // //           <input
// // // //             type="password"
// // // //             value={pass}
// // // //             onChange={(e) => setPass(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         {problem && <p className="error">{problem}</p>}
// // // //         <button type="submit">Login</button>
// // // //       </form>
// // // //       <div>
// // // //         <p>Not signed up? <Link to="/register">Sign Up</Link></p>
// // // //       </div>
// // // //       <ToastContainer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;



// // // // import React, { useState } from 'react';
// // // // import { useNavigate, Link } from 'react-router-dom';
// // // // import axios from 'axios';
// // // // import { toast, ToastContainer } from 'react-toastify';
// // // // import api from '../api';

// // // // const Login = () => {
// // // //   const [emailBox, setEmailBox] = useState('');
// // // //   const [pass, setPass] = useState('');
// // // //   const [problem, setProblem] = useState('');
// // // //   const goTo = useNavigate();

// // // //   const loginNow = async (event) => {
// // // //     event.preventDefault();
// // // //     setProblem('');

// // // //     try {
// // // //       const response = await axios.post(api.LOGIN, { email: emailBox, password: pass });
// // // //       const userName = response.data.data?.name || 'Guest';
// // // //       const userToken = response.data.token || response.data.data?.token;
// // // //        const localToken = localStorage.setItem("userToken", userToken)
// // // //        const localName = localStorage.setItem("userName" , userName)

      
   

// // // //       toast.success('Logged in!');
// // // //       goTo('/dashboard', { state: { userName } });
// // // //     } catch (err) {
// // // //       const errorMsg = err.response?.data?.message || 'Wrong email or password.';
// // // //       setProblem(errorMsg);
// // // //       toast.error(errorMsg);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="box">
// // // //       <h2>Login</h2>
// // // //       <form onSubmit={loginNow}>
// // // //         <div>
// // // //           <label>Email</label>
// // // //           <input
// // // //             type="email"
// // // //             value={emailBox}
// // // //             onChange={(e) => setEmailBox(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div>
// // // //           <label>Password</label>
// // // //           <input
// // // //             type="password"
// // // //             value={pass}
// // // //             onChange={(e) => setPass(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         {problem && <p className="error">{problem}</p>}
// // // //         <button type="submit">Login</button>
// // // //       </form>
// // // //       <div>
// // // //         <p>Not signed up? <Link to="/register">Sign Up</Link></p>
// // // //       </div>
// // // //       <ToastContainer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;





// // // import React, { useState } from 'react';
// // // import { useNavigate, Link } from 'react-router-dom';
// // // import axios from 'axios';
// // // import { toast, ToastContainer } from 'react-toastify';
// // // import api from '../api';

// // // const Login = () => {
// // //   const [emailBox, setEmailBox] = useState('');
// // //   const [pass, setPass] = useState('');
// // //   const [problem, setProblem] = useState('');
// // //   const goTo = useNavigate();

// // //  const loginNow = async (event) => {
// // //   event.preventDefault();
// // //   setProblem('');

// // //   console.log('Attempting login with:', { email: emailBox, password: pass });

// // //   try {
// // //     const response = await axios.post(api.LOGIN, { email: emailBox, password: pass });

// // //     console.log('Login API Response:', response.data);

// // //     const userName = response.data.data?.name || 'Guest';
// // //     const userToken = response.data.data?.token;

// // //     console.log('Extracted userName:', userName, 'userToken:', userToken);

// // //     if (!userToken) {
// // //       setProblem('Login failed: No token received.');
// // //       toast.error('Login failed: No token received.');
// // //       console.warn('Login failed: No token received from API response.');
// // //       return;
// // //     }

 
// // //     localStorage.setItem("userName", userName); 
// // //     localStorage.setItem("userToken", userToken); 

// // //     toast.success('Logged in!');

// // //     console.log('Login successful. Navigating to /dashboard with state:', { userName, userToken });
// // //     goTo('/dashboard', {}); 
// // //   } catch (err) {
// // //     const errorMsg = err.response?.data?.message || 'Wrong email or password.';
// // //     console.error('Login Error:', err.response?.data || err.message);
// // //     setProblem(errorMsg);
// // //     toast.error(errorMsg);
// // //   }
// // // };


// // //   return (
// // //     <div className="box">
// // //       <h2>Login</h2>
// // //       <form onSubmit={loginNow}>
// // //         <div>
// // //           <label>Email</label>
// // //           <input
// // //             type="email"
// // //             value={emailBox}
// // //             onChange={(e) => setEmailBox(e.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         <div>
// // //           <label>Password</label>
// // //           <input
// // //             type="password"
// // //             value={pass}
// // //             onChange={(e) => setPass(e.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         {problem && <p className="error">{problem}</p>}
// // //         <button type="submit">Login</button>
// // //       </form>
// // //       <div>
// // //         <p>Not signed up? <Link to="/register">Sign Up</Link></p>
// // //       </div>
// // //       <ToastContainer />
// // //     </div>
// // //   );
// // // };

// // // export default Login;



// // import React from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import axios from 'axios';
// // import { toast, ToastContainer } from 'react-toastify';
// // import { useFormik } from 'formik'; // Added Formik
// // import * as Yup from 'yup'; // Added Yup
// // import api from '../api';

// // // Yup validation schema
// // const validationSchema = Yup.object({
// //   emailBox: Yup.string().email("Invalid Email").required("Email is required."),
// //   pass: Yup.string().required("Password is required."),
// // });

// // const Login = () => {
// //   const goTo = useNavigate();

// //   // Formik setup
// //   const formik = useFormik({
// //     initialValues: {
// //       emailBox: '',
// //       pass: '',
// //     },
// //     validationSchema,
// //     onSubmit: async (values) => {
// //       const { emailBox, pass } = values;

// //       console.log('Attempting login with:', { email: emailBox, password: pass });

// //       try {
// //         const response = await axios.post(api.LOGIN, { email: emailBox, password: pass });

// //         console.log('Login API Response:', response.data);

// //         const userName = response.data.data?.name || 'Guest';
// //         const userToken = response.data.data?.token;

// //         console.log('Extracted userName:', userName, 'userToken:', userToken);

// //         if (!userToken) {
// //           toast.error('Login failed: No token received.');
// //           console.warn('Login failed: No token received from API response.');
// //           return;
// //         }

// //         localStorage.setItem("userName", userName);
// //         localStorage.setItem("userToken", userToken);

// //         toast.success('Logged in!');

// //         console.log('Login successful. Navigating to /dashboard with state:', { userName, userToken });
// //         goTo('/dashboard', {});
// //       } catch (err) {
// //         const errorMsg = err.response?.data?.message || 'Wrong email or password.';
// //         console.error('Login Error:', err.response?.data || err.message);
// //         toast.error(errorMsg);
// //       }
// //     },
// //   });

// //   return (
// //     <div className="box">
// //       <h2>Login</h2>
// //       <form onSubmit={formik.handleSubmit}>
// //         <div>
// //           <label>Email</label>
// //           <input
// //             type="email"
// //             name="emailBox"
// //             value={formik.values.emailBox}
// //             onChange={formik.handleChange}
// //             onBlur={formik.handleBlur}
// //             required
// //           />
// //           {formik.touched.emailBox && formik.errors.emailBox && (
// //             <p className="error">{formik.errors.emailBox}</p>
// //           )}
// //         </div>
// //         <div>
// //           <label>Password</label>
// //           <input
// //             type="password"
// //             name="pass"
// //             value={formik.values.pass}
// //             onChange={formik.handleChange}
// //             onBlur={formik.handleBlur}
// //             required
// //           />
// //           {formik.touched.pass && formik.errors.pass && (
// //             <p className="error">{formik.errors.pass}</p>
// //           )}
// //         </div>
// //         <button type="submit">Login</button>
// //       </form>
// //       <div>
// //         <p>
// //           Not signed up? <Link to="/register">Sign Up</Link>
// //         </p>
// //       </div>
// //       <ToastContainer />
// //     </div>
// //   );
// // };

// // export default Login;

// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axiosInstance from "../axiosInstance"; 

// const validationSchema = Yup.object({
//   emailBox: Yup.string().email("Invalid Email").required("Email is required."),
//   pass: Yup.string().required("Password is required."),
// });

// const Login = () => {
//   const goTo = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       emailBox: "",
//       pass: "",
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       const { emailBox, pass } = values;

//       console.log("Attempting login with:", { email: emailBox, password: pass });

//       try {
//         const response = await axiosInstance.post("/user/login", { email: emailBox, password: pass });

//         console.log("Login API Response:", response.data);

//         const userName = response.data.data?.name || "Guest";
//         const userToken = response.data.data?.token;

//         console.log("Extracted userName:", userName, "userToken:", userToken);

//         if (!userToken) {
//           toast.error("Login failed: No token received.");
//           console.warn("Login failed: No token received from API response.");
//           return;
//         }

//         localStorage.setItem("userName", userName);
//         localStorage.setItem("userToken", userToken);

//         toast.success("Logged in!");

//         console.log("Login successful. Navigating to /dashboard with state:", { userName, userToken });
//         goTo("/dashboard", {});
//       } catch (err) {
//         const errorMsg = err.response?.data?.message || "Wrong email or password.";
//         console.error("Login Error:", err.response?.data || err.message);
//         toast.error(errorMsg);
//       }
//     },
//   });

//   return (
//     <div className="box">
//       <h2>Login</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="emailBox"
//             value={formik.values.emailBox}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             required
//           />
//           {formik.touched.emailBox && formik.errors.emailBox && (
//             <p className="error">{formik.errors.emailBox}</p>
//           )}
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="pass"
//             value={formik.values.pass}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             required
//           />
//           {formik.touched.pass && formik.errors.pass && (
//             <p className="error">{formik.errors.pass}</p>
//           )}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <div>
//         <p>
//           Not signed up? <Link to="/register">Sign Up</Link>
//         </p>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;


import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../axiosInstance"; 

const validationSchema = Yup.object({
  emailBox: Yup.string().email("Invalid Email").required("Email is required."),
  pass: Yup.string().required("Password is required."),
});

const Login = () => {
  const goTo = useNavigate();

  const formik = useFormik({
    initialValues: {
      emailBox: "",
      pass: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const { emailBox, pass } = values;

      console.log("Attempting login with:", { email: emailBox, password: pass });

      try {
        const response = await axiosInstance.post("/user/login", { email: emailBox, password: pass });

        console.log("Login API Response:", response.data);

        const userName = response.data.data?.name || "Guest";
        const userToken = response.data.data?.token;

        console.log("Extracted userName:", userName, "userToken:", userToken);

        if (!userToken) {
          toast.error("Login failed: No token received.");
          console.warn("Login failed: No token received from API response.");
          return;
        }

        localStorage.setItem("userName", userName);
        localStorage.setItem("userToken", userToken);

        toast.success("Logged in!");

        console.log("Login successful. Navigating to /dashboard with state:", { userName, userToken });
        goTo("/dashboard", {});
      } catch (err) {
        const errorMsg = err.response?.data?.message || "Wrong email or password.";
        console.error("Login Error:", err.response?.data || err.message);
        toast.error(errorMsg);
      }
    },
  });

  return (
    <div className="box">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="emailBox"
            value={formik.values.emailBox}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.emailBox && formik.errors.emailBox && (
            <p className="error">{formik.errors.emailBox}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="pass"
            value={formik.values.pass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.pass && formik.errors.pass && (
            <p className="error">{formik.errors.pass}</p>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <p>
          Not signed up? <Link to="/register">Sign Up</Link>
        </p>
        <p>
          <Link to="/forgot-password" className="text-warning fw-bold">
            Forgot Password?
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;