// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // import axios from 'axios';
// // // // // // // // import { toast, ToastContainer } from 'react-toastify';
// // // // // // // // import 'react-toastify/dist/ReactToastify.css';
// // // // // // // // import api from '../api';


// // // // // // // // const Register = () => {
// // // // // // // //   const [data, setData] = useState({ name: '', email: '', password: '' });
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const handleChange = (e) => {
// // // // // // // //     setData({ ...data, [e.target.name]: e.target.value });
// // // // // // // //   };

// // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     const { name, email, password } = data;
// // // // // // // // //     try {
// // // // // // // // //       const result = await axios.post(apis.REGISTER, { name, email, password });
// // // // // // // // //       console.log(result.data);
// // // // // // // // //       toast.success("Registration Successfully..");
// // // // // // // // //       const { emailVerificationToken, id } = result.data;
// // // // // // // // //       setTimeout(() => {
// // // // // // // // //         navigate(`/email-verification?email=${email}&token=${emailVerificationToken}`);
// // // // // // // // //       }, 2000);
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.log(error);
// // // // // // // // //       toast.error(error.response?.data?.message || 'Failed to register. Email may already exist.');
// // // // // // // // //     }
// // // // // // // // //   };




// // // // // // // // // const handleSubmit = async (e) => {
// // // // // // // // //   e.preventDefault();
// // // // // // // // //   const { name, email, password } = data;
// // // // // // // // //   console.log('Request Body:', { name, email, password }); // Add this line
// // // // // // // // //   try {
// // // // // // // // //     const result = await axios.post(api.REGISTER, { name, email, password });
// // // // // // // // //     console.log("result:", result.data);
// // // // // // // // //     toast.success("Registration Successfully..");
    
    
// // // // // // // // //   } catch (error) {
// // // // // // // // //     console.log(error);
// // // // // // // // //     toast.error(error.response?.data?.message || 'Failed to register. Email may already exist.');
// // // // // // // // //   }
// // // // // // // // // };



// // // // // // // // const handleSubmit = async (e) => {
// // // // // // // //   e.preventDefault();
// // // // // // // //   const { name, email, password } = data;
// // // // // // // //   console.log('Request Body:', { name, email, password });
// // // // // // // //   try {
// // // // // // // //     const result = await axios.post(api.REGISTER, { name, email, password });
// // // // // // // //     console.log("result:", result.data);
// // // // // // // //     toast.success("Registration Successfully..");
// // // // // // // //   } catch (error) {
// // // // // // // //     console.log('Error Response:', error.response); // Add this line
// // // // // // // //     toast.error(error.response?.data?.message || 'Failed to register. Email may already exist.');
// // // // // // // //   }
// // // // // // // // };
// // // // // // // //   return (
// // // // // // // //     <div className="auth-container">
// // // // // // // //       <h2>Register</h2>
// // // // // // // //       <form onSubmit={handleSubmit}>
// // // // // // // //         <div>
// // // // // // // //           <label>Name:</label>
// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             name="name"
// // // // // // // //             value={data.name}
// // // // // // // //             onChange={handleChange}
// // // // // // // //             required
// // // // // // // //           />
// // // // // // // //         </div>
// // // // // // // //         <div>
// // // // // // // //           <label>Email:</label>
// // // // // // // //           <input
// // // // // // // //             type="email"
// // // // // // // //             name="email"
// // // // // // // //             value={data.email}
// // // // // // // //             onChange={handleChange}
// // // // // // // //             required
// // // // // // // //           />
// // // // // // // //         </div>
// // // // // // // //         <div>
// // // // // // // //           <label>Password:</label>
// // // // // // // //           <input
// // // // // // // //             type="password"
// // // // // // // //             name="password"
// // // // // // // //             value={data.password}
// // // // // // // //             onChange={handleChange}
// // // // // // // //             required
// // // // // // // //           />
// // // // // // // //         </div>
// // // // // // // //         <button type="submit">Register</button>
// // // // // // // //       </form>
// // // // // // // //       <ToastContainer />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Register;




// // // // // // // import React, { useState } from 'react';
// // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // import axios from 'axios';
// // // // // // // import { toast, ToastContainer } from 'react-toastify';
// // // // // // // import 'react-toastify/dist/ReactToastify.css';
// // // // // // // import api from '../api';

// // // // // // // const Register = () => {
// // // // // // //   const [data, setData] = useState({ name: '', email: '', password: '' });
// // // // // // //   const [error, setError] = useState('');
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const handleChange = (e) => {
// // // // // // //     setData({ ...data, [e.target.name]: e.target.value });
// // // // // // //     setError('');
// // // // // // //   };

// // // // // // //   const validatePassword = (password) => {
// // // // // // //     const passwordRegex = /^(?=.*[0-9]).{1,6}$/;
// // // // // // //     return passwordRegex.test(password);
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     const { name, email, password } = data;

// // // // // // //     if (!validatePassword(password)) {
// // // // // // //       setError('Password must be 6 characters or less and contain at least 1 number.');
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     console.log('Request Body:', { name, email, password });
// // // // // // //     try {
// // // // // // //       const result = await axios.post(api.REGISTER, { name, email, password });
// // // // // // //       console.log("result:", result.data);
// // // // // // //       toast.success("Registration Successfully..");
      
// // // // // // //       // Extract id and token from response
// // // // // // //       const { id, emailVerificationToken } = result.data.data; // Nested under "data"
// // // // // // //       setTimeout(() => {
// // // // // // //         navigate(`/email-verification?email=${email}&id=${id}&token=${emailVerificationToken}`);
// // // // // // //       }, 2000);
// // // // // // //     } catch (error) {
// // // // // // //       console.log('Error Response:', error.response);
// // // // // // //       toast.error(error.response?.data?.message || 'Failed to register. Email may already exist.');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="auth-container">
// // // // // // //       <h2>Register</h2>
// // // // // // //       <form onSubmit={handleSubmit}>
// // // // // // //         <div>
// // // // // // //           <label>Name:</label>
// // // // // // //           <input
// // // // // // //             type="text"
// // // // // // //             name="name"
// // // // // // //             value={data.name}
// // // // // // //             onChange={handleChange}
// // // // // // //             required
// // // // // // //           />
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <label>Email:</label>
// // // // // // //           <input
// // // // // // //             type="email"
// // // // // // //             name="email"
// // // // // // //             value={data.email}
// // // // // // //             onChange={handleChange}
// // // // // // //             required
// // // // // // //           />
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <label>Password:</label>
// // // // // // //           <input
// // // // // // //             type="password"
// // // // // // //             name="password"
// // // // // // //             value={data.password}
// // // // // // //             onChange={handleChange}
// // // // // // //             required
// // // // // // //           />
// // // // // // //         </div>
// // // // // // //         {error && <p className="error">{error}</p>}
// // // // // // //         <button type="submit">Register</button>
// // // // // // //       </form>
// // // // // // //       <ToastContainer />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Register;


// // // // // // import React, { useState } from 'react';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import axios from 'axios';
// // // // // // import { toast, ToastContainer } from 'react-toastify';
// // // // // // import 'react-toastify/dist/ReactToastify.css';
// // // // // // import api from '../api';

// // // // // // const Register = () => {
// // // // // //   const [userInfo, setUserInfo] = useState({ fullName: '', emailBox: '', pass: '' });
// // // // // //   const [problem, setProblem] = useState('');
// // // // // //   const goTo = useNavigate();

// // // // // //   const updateInfo = (event) => {
// // // // // //     const fieldName = event.target.name;
// // // // // //     const fieldValue = event.target.value;
// // // // // //     setUserInfo({ ...userInfo, [fieldName]: fieldValue });
// // // // // //     setProblem('');
// // // // // //   };

// // // // // //   const checkPass = (passValue) => {
// // // // // //     const hasNumber = /[0-9]/.test(passValue);
// // // // // //     return passValue.length <= 6 && hasNumber;
// // // // // //   };

// // // // // //   const signUp = async (event) => {
// // // // // //     event.preventDefault();
// // // // // //     const { fullName, emailBox, pass } = userInfo;

// // // // // //     if (!checkPass(pass)) {
// // // // // //       setProblem('Password should be max 6 characters with at least 1 number.');
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       const response = await axios.post(api.REGISTER, {
// // // // // //         name: fullName,
// // // // // //         email: emailBox,
// // // // // //         password: pass
// // // // // //       });
// // // // // //       toast.success('You are registered DON !');
// // // // // //       const userId = response.data.data.id;
// // // // // //       const userToken = response.data.data.emailVerificationToken;
// // // // // //       setTimeout(() => {
// // // // // //         goTo(`/email-verification?email=${emailBox}&id=${userId}&token=${userToken}`);
// // // // // //       }, 2000);
// // // // // //     } catch (error) {
// // // // // //       setProblem(error.response?.data?.message || 'Registration failed. Email might already exist.');
// // // // // //       toast.error(error.response?.data?.message || 'Registration failed.');
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="box">
// // // // // //       <h2>Sign Up</h2>
// // // // // //       <form onSubmit={signUp}>
// // // // // //         <div>
// // // // // //           <label>Name</label>
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             name="fullName"
// // // // // //             value={userInfo.fullName}
// // // // // //             onChange={updateInfo}
// // // // // //             required
// // // // // //           />
// // // // // //         </div>
// // // // // //         <div>
// // // // // //           <label>Email</label>
// // // // // //           <input
// // // // // //             type="email"
// // // // // //             name="emailBox"
// // // // // //             value={userInfo.emailBox}
// // // // // //             onChange={updateInfo}
// // // // // //             required
// // // // // //           />
// // // // // //         </div>
// // // // // //         <div>
// // // // // //           <label>Password</label>
// // // // // //           <input
// // // // // //             type="password"
// // // // // //             name="pass"
// // // // // //             value={userInfo.pass}
// // // // // //             onChange={updateInfo}
// // // // // //             required
// // // // // //           />
// // // // // //         </div>
// // // // // //         {problem && <p className="error">{problem}</p>}
// // // // // //         <button type="submit">Sign Up</button>
// // // // // //       </form>
// // // // // //       <ToastContainer />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Register;




// // // // // import React, { useState } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import axios from 'axios';
// // // // // import { toast, ToastContainer } from 'react-toastify';
// // // // // import 'react-toastify/dist/ReactToastify.css';
// // // // // import api from '../api';

// // // // // const Register = () => {
// // // // //   const [userInfo, setUserInfo] = useState({ fullName: '', emailBox: '', pass: '' });
// // // // //   const [problem, setProblem] = useState('');
// // // // //   const goTo = useNavigate();

// // // // //   const updateInfo = (event) => {
// // // // //     const fieldName = event.target.name;
// // // // //     const fieldValue = event.target.value;
// // // // //     setUserInfo({ ...userInfo, [fieldName]: fieldValue });
// // // // //     setProblem('');
// // // // //   };

// // // // //   const checkPass = (passValue) => {
// // // // //     const hasNumber = /[0-9]/.test(passValue);
// // // // //     return passValue.length <= 6 && hasNumber;
// // // // //   };

// // // // //   const signUp = async (event) => {
// // // // //     event.preventDefault();
// // // // //     const { fullName, emailBox, pass } = userInfo;

// // // // //     console.log('Attempting to sign up with:', { fullName, emailBox, pass }); 

// // // // //     if (!checkPass(pass)) {
// // // // //       setProblem('Password should be max 6 characters with at least 1 number.');
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const response = await axios.post(api.REGISTER, {
// // // // //         name: fullName,
// // // // //         email: emailBox,
// // // // //         password: pass
// // // // //       });

// // // // //       console.log('Registration API Response:', response.data); 
// // // // //       toast.success('You are registered BROTHER !');
// // // // //       const userId = response.data.data.id;
// // // // //       const userToken = response.data.data.emailVerificationToken;
       
// // // // //        const localId = localStorage.setItem("userToken", userToken )

     

// // // // //       console.log('Extracted userId:', userId, 'userToken:', userToken);

// // // // //       setTimeout(() => {
// // // // //         const redirectUrl = `/email-verification?email=${emailBox}&id=${userId}&token=${userToken}`;
// // // // //         console.log('Redirecting to:', redirectUrl); 
// // // // //         goTo(redirectUrl);
// // // // //       }, 2000);
// // // // //     } catch (error) {
// // // // //       console.error('Registration Error:', error.response?.data || error.message); 
// // // // //       setProblem(error.response?.data?.message || 'Registration failed. Email might already exist.');
// // // // //       toast.error(error.response?.data?.message || 'Registration failed.');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="box">
// // // // //       <h2>Sign Up</h2>
// // // // //       <form onSubmit={signUp}>
// // // // //         <div>
// // // // //           <label>Name</label>
// // // // //           <input
// // // // //             type="text"
// // // // //             name="fullName"
// // // // //             value={userInfo.fullName}
// // // // //             onChange={updateInfo}
// // // // //             required
// // // // //           />
// // // // //         </div>
// // // // //         <div>
// // // // //           <label>Email</label>
// // // // //           <input
// // // // //             type="email"
// // // // //             name="emailBox"
// // // // //             value={userInfo.emailBox}
// // // // //             onChange={updateInfo}
// // // // //             required
// // // // //           />
// // // // //         </div>
// // // // //         <div>
// // // // //           <label>Password</label>
// // // // //           <input
// // // // //             type="password"
// // // // //             name="pass"
// // // // //             value={userInfo.pass}
// // // // //             onChange={updateInfo}
// // // // //             required
// // // // //           />
// // // // //         </div>
// // // // //         {problem && <p className="error">{problem}</p>}
// // // // //         <button type="submit">Sign Up</button>
// // // // //       </form>
// // // // //       <ToastContainer />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Register;


// // // // import React, { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import axios from 'axios';
// // // // import { toast, ToastContainer } from 'react-toastify';
// // // // import 'react-toastify/dist/ReactToastify.css';
// // // // import api from '../api';

// // // // const Register = () => {
// // // //   const [userInfo, setUserInfo] = useState({ fullName: '', emailBox: '', pass: '' });
// // // //   const [problem, setProblem] = useState('');
// // // //   const goTo = useNavigate();

// // // //   const updateInfo = (event) => {
// // // //     const fieldName = event.target.name;
// // // //     const fieldValue = event.target.value;
// // // //     setUserInfo({ ...userInfo, [fieldName]: fieldValue });
// // // //     setProblem('');
// // // //   };

// // // //   const checkPass = (passValue) => {
// // // //     const hasNumber = /[0-9]/.test(passValue);
// // // //     return passValue.length <= 6 && hasNumber;
// // // //   };

// // // //   const signUp = async (event) => {
// // // //     event.preventDefault();
// // // //     const { fullName, emailBox, pass } = userInfo;

// // // //     console.log('Attempting to sign up with:', { fullName, emailBox, pass });

// // // //     if (!checkPass(pass)) {
// // // //       setProblem('Password should be max 6 characters with at least 1 number.');
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const response = await axios.post(api.REGISTER, {
// // // //         name: fullName,
// // // //         email: emailBox,
// // // //         password: pass
// // // //       });

// // // //       console.log('Registration API Response:', response.data);
// // // //       toast.success('You are registered BROTHER !');
      
// // // //       const userId = response.data.data.id;
// // // //       const userToken = response.data.data.emailVerificationTOken;

// // // //       localStorage.setItem("userToken", userToken); 

// // // //       console.log('Extracted userId:', userId, 'userToken:', userToken);

// // // //       setTimeout(() => {
      
// // // //         const redirectUrl = `/email-verification/${emailBox}/${userId}/${userToken}`;
// // // //         console.log('Redirecting to:', redirectUrl);
// // // //         goTo(redirectUrl);
// // // //       }, 2000);
// // // //     } catch (error) {
// // // //       console.error('Registration Error:', error.response?.data || error.message);
// // // //       setProblem(error.response?.data?.message || 'Registration failed. Email might already exist.');
// // // //       toast.error(error.response?.data?.message || 'Registration failed.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="box">
// // // //       <h2>Sign Up</h2>
// // // //       <form onSubmit={signUp}>
// // // //         <div>
// // // //           <label>Name</label>
// // // //           <input
// // // //             type="text"
// // // //             name="fullName"
// // // //             value={userInfo.fullName}
// // // //             onChange={updateInfo}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div>
// // // //           <label>Email</label>
// // // //           <input
// // // //             type="email"
// // // //             name="emailBox"
// // // //             value={userInfo.emailBox}
// // // //             onChange={updateInfo}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div>
// // // //           <label>Password</label>
// // // //           <input
// // // //             type="password"
// // // //             name="pass"
// // // //             value={userInfo.pass}
// // // //             onChange={updateInfo}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         {problem && <p className="error">{problem}</p>}
// // // //         <button type="submit">Sign Up</button>
// // // //       </form>
// // // //       <ToastContainer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Register;



// // // import React from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import axios from 'axios';
// // // import { toast, ToastContainer } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';
// // // import { useFormik } from 'formik'; // Added Formik
// // // import * as Yup from 'yup'; // Added Yup
// // // import api from '../api';

// // // // Yup validation schema
// // // const validationSchema = Yup.object({
// // //   fullName: Yup.string().required("Name is required."),
// // //   emailBox: Yup.string().email("Invalid Email").required("Email is required."),
// // //   pass: Yup.string()
// // //     .matches(/[0-9]/, "Password must contain at least 1 number.")
// // //     .max(6, "Password should be max 6 characters.")
// // //     .required("Password is required."),
// // // });

// // // const Register = () => {
// // //   const goTo = useNavigate();

// // //   // Formik setup
// // //   const formik = useFormik({
// // //     initialValues: {
// // //       fullName: '',
// // //       emailBox: '',
// // //       pass: '',
// // //     },
// // //     validationSchema,
// // //     onSubmit: async (values) => {
// // //       const { fullName, emailBox, pass } = values;

// // //       console.log('Attempting to register with:', { fullName, emailBox, pass });

// // //       try {
// // //         const response = await axios.post(api.REGISTER, {
// // //           name: fullName,
// // //           email: emailBox,
// // //           password: pass,
// // //         });

// // //         console.log('Registration API Response:', response.data);
// // //         toast.success('You are registered BROTHER!');

// // //         const userId = response.data.data.id;
// // //         const userToken = response.data.data.emailVerificationTOken;

// // //         localStorage.setItem("userToken", userToken);

// // //         console.log('Extracted userId:', userId, 'userToken:', userToken);

// // //         setTimeout(() => {
// // //           const redirectUrl = `/email-verification/${emailBox}/${userId}/${userToken}`;
// // //           console.log('Redirecting to:', redirectUrl);
// // //           goTo(redirectUrl);
// // //         }, 2000);
// // //       } catch (error) {
// // //         console.error('Registration Error:', error.response?.data || error.message);
// // //         toast.error(error.response?.data?.message || 'Registration failed.');
// // //       }
// // //     },
// // //   });

// // //   return (
// // //     <div className="box">
// // //       <h2>Sign Up</h2>
// // //       <form onSubmit={formik.handleSubmit}>
// // //         <div>
// // //           <label>Name</label>
// // //           <input
// // //             type="text"
// // //             name="fullName"
// // //             value={formik.values.fullName}
// // //             onChange={formik.handleChange}
// // //             onBlur={formik.handleBlur}
// // //             required
// // //           />
// // //           {formik.touched.fullName && formik.errors.fullName && (
// // //             <p className="error">{formik.errors.fullName}</p>
// // //           )}
// // //         </div>
// // //         <div>
// // //           <label>Email</label>
// // //           <input
// // //             type="email"
// // //             name="emailBox"
// // //             value={formik.values.emailBox}
// // //             onChange={formik.handleChange}
// // //             onBlur={formik.handleBlur}
// // //             required
// // //           />
// // //           {formik.touched.emailBox && formik.errors.emailBox && (
// // //             <p className="error">{formik.errors.emailBox}</p>
// // //           )}
// // //         </div>
// // //         <div>
// // //           <label>Password</label>
// // //           <input
// // //             type="password"
// // //             name="pass"
// // //             value={formik.values.pass}
// // //             onChange={formik.handleChange}
// // //             onBlur={formik.handleBlur}
// // //             required
// // //           />
// // //           {formik.touched.pass && formik.errors.pass && (
// // //             <p className="error">{formik.errors.pass}</p>
// // //           )}
// // //         </div>
// // //         <button type="submit">Sign Up</button>
// // //       </form>
// // //       <ToastContainer />
// // //     </div>
// // //   );
// // // };

// // // export default Register;


// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import { useFormik } from "formik";
// // import * as Yup from "yup";
// // import axiosInstance from "../axiosInstance"; 

// // const validationSchema = Yup.object({
// //   fullName: Yup.string().required("Name is required."),
// //   emailBox: Yup.string().email("Invalid Email").required("Email is required."),
// //   pass: Yup.string()
// //     .matches(/[0-9]/, "Password must contain at least 1 number.")
// //     .max(6, "Password should be max 6 characters.")
// //     .required("Password is required."),
// // });

// // const Register = () => {
// //   const goTo = useNavigate();


// //   const formik = useFormik({
// //     initialValues: {
// //       fullName: "",
// //       emailBox: "",
// //       pass: "",
// //     },
// //     validationSchema,
// //     onSubmit: async (values) => {
// //       const { fullName, emailBox, pass } = values;

// //       console.log("Attempting to register with:", { fullName, emailBox, pass });

// //       try {
// //         const response = await axiosInstance.post("/user", {
// //           name: fullName,
// //           email: emailBox,
// //           password: pass,
// //         });

// //         console.log("Registration API Response:", response.data);
// //         toast.success("You are registered BROTHER!");

// //         const userId = response.data.data.id;
// //         const userToken = response.data.data.emailVerificationTOken;

// //         localStorage.setItem("userToken", userToken);

// //         console.log("Extracted userId:", userId, "userToken:", userToken);

// //         setTimeout(() => {
// //           const redirectUrl = `/email-verification/${emailBox}/${userId}/${userToken}`;
// //           console.log("Redirecting to:", redirectUrl);
// //           goTo(redirectUrl);
// //         }, 2000);
// //       } catch (error) {
// //         console.error("Registration Error:", error.response?.data || error.message);
// //         toast.error(error.response?.data?.message || "Registration failed.");
// //       }
// //     },
// //   });

// //   return (
// //     <div className="box">
// //       <h2>Sign Up</h2>
// //       <form onSubmit={formik.handleSubmit}>
// //         <div>
// //           <label>Name</label>
// //           <input
// //             type="text"
// //             name="fullName"
// //             value={formik.values.fullName}
// //             onChange={formik.handleChange}
// //             onBlur={formik.handleBlur}
// //             required
// //           />
// //           {formik.touched.fullName && formik.errors.fullName && (
// //             <p className="error">{formik.errors.fullName}</p>
// //           )}
// //         </div>
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
// //         <button type="submit">Sign Up</button>
// //       </form>
// //       <ToastContainer />
// //     </div>
// //   );
// // };

// // export default Register;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axiosInstance from "../axiosInstance"; 

// const validationSchema = Yup.object({
//   fullName: Yup.string().required("Name is required."),
//   emailBox: Yup.string().email("Invalid Email").required("Email is required."),
//   pass: Yup.string()
//     .matches(/[0-9]/, "Password must contain at least 1 number.")
//     .max(6, "Password should be max 6 characters.")
//     .required("Password is required."),
// });

// const Register = () => {
//   const goTo = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       fullName: "",
//       emailBox: "",
//       pass: "",
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       const { fullName, emailBox, pass } = values;

//       console.log("Attempting to register with:", { fullName, emailBox, pass });

//       try {
//         const response = await axiosInstance.post("/user", {
//           name: fullName,
//           email: emailBox,
//           password: pass,
//         });

//         console.log("Registration API Response:", response.data);
//         toast.success("You are registered BROTHER!");

//         const userId = response.data.data.id;
//         const userToken = response.data.data.emailVerificationTOken;

//         // Set userId and userToken in local storage
//         localStorage.setItem("userId", userId);
//         localStorage.setItem("userToken", userToken);

//         console.log("Stored in localStorage - userId:", userId, "userToken:", userToken);

//         setTimeout(() => {
//           const redirectUrl = `/email-verification/${emailBox}`; // Pass only email in URL
//           console.log("Redirecting to:", redirectUrl);
//           goTo(redirectUrl);
//         }, 2000);
//       } catch (error) {
//         console.error("Registration Error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Registration failed.");
//       }
//     },
//   });

//   return (
//     <div className="box">
//       <h2>Sign Up</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formik.values.fullName}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             required
//           />
//           {formik.touched.fullName && formik.errors.fullName && (
//             <p className="error">{formik.errors.fullName}</p>
//           )}
//         </div>
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
//         <button type="submit">Sign Up</button>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Register;


import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../axiosInstance"; 

const validationSchema = Yup.object({
  fullName: Yup.string().required("Name is required."),
  emailBox: Yup.string().email("Invalid Email").required("Email is required."),
  pass: Yup.string()
    .matches(/[0-9]/, "Password must contain at least 1 number.")
    .max(6, "Password should be max 6 characters.")
    .required("Password is required."),
});

const Register = () => {
  const goTo = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      emailBox: "",
      pass: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const { fullName, emailBox, pass } = values;

      console.log("Attempting to register with:", { fullName, emailBox, pass });

      try {
        const response = await axiosInstance.post("/user", {
          name: fullName,
          email: emailBox,
          password: pass,
        });

        console.log("Registration API Response:", response.data);
        toast.success("You are registered BROTHER!");

        const userId = response.data.data.id;
        const userToken = response.data.data.emailVerificationTOken;

        
        localStorage.setItem("userId", userId);
        localStorage.setItem("userToken", userToken);

        console.log("Stored in localStorage - userId:", userId, "userToken:", userToken);

        setTimeout(() => {
          const redirectUrl = `/email-verification/${emailBox}`; 
          console.log("Redirecting to:", redirectUrl);
          goTo(redirectUrl);
        }, 2000);
      } catch (error) {
        console.error("Registration Error:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Registration failed.");
      }
    },
  });

  return (
    <div className="box">
      <h2>Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="error">{formik.errors.fullName}</p>
          )}
        </div>
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
        <button type="submit">Sign Up</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
