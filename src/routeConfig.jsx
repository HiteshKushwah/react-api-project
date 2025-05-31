// // // import { createBrowserRouter } from 'react-router-dom';
// // // import Login from './components/Login';
// // // import Register from './components/Register';
// // // import EmailVerification from './components/EmailVerification';
// // // import Dashboard from './components/Dashboard';
// // // import UserDetails from './components/UserDetails';
// // // import EditUser from './components/EditUser';

// // // const router = createBrowserRouter([
// // //   { path: '/', element: <Login /> },
// // //   { path: '/login', element: <Login /> },
// // //   { path: '/register', element: <Register /> },
// // //   { path: '/email-verification/:email/:id/:token', element: <EmailVerification /> },
// // //   { path: '/dashboard', element: <Dashboard /> },
// // //   { path: '/user/:id/:token', element: <UserDetails /> },
// // //   { path: '/edit-user/:id/:token', element: <EditUser /> },
// // // ]);

// // // export default router;




// // import { createBrowserRouter } from 'react-router-dom';
// // import Login from './components/Login';
// // import Register from './components/Register';
// // import EmailVerification from './components/EmailVerification';
// // import Dashboard from './components/Dashboard';
// // import UserDetails from './components/UserDetails';
// // import EditUser from './components/EditUser';
// // import PrivateRoute from './PrivateRoute'; // Import PrivateRoute

// // const router = createBrowserRouter([
// //   { path: '/', element: <Login /> },
// //   { path: '/login', element: <Login /> },
// //   { path: '/register', element: <Register /> },
// //   { path: '/email-verification/:email/:id/:token', element: <EmailVerification /> },
// //   { path: '/dashboard', element: <PrivateRoute><Dashboard /></PrivateRoute> }, // Protected
// //   { path: '/user/:id/:token', element: <PrivateRoute><UserDetails /></PrivateRoute> }, // Protected
// //   { path: '/edit-user/:id/:token', element: <PrivateRoute><EditUser /></PrivateRoute> }, // Protected
// // ]);

// // export default router;


// import { createBrowserRouter } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import EmailVerification from './components/EmailVerification';
// import Dashboard from './components/Dashboard';
// import UserDetails from './components/UserDetails';
// import EditUser from './components/EditUser';
// import PrivateRoute from './PrivateRoute';

// const router = createBrowserRouter([
//   { path: '*', element: <Login /> },
//   { path: '/', element: <Login /> },
//   { path: '/login', element: <Login /> },
//   { path: '/register', element: <Register /> },
//   { path: '/email-verification/:email', element: <EmailVerification /> }, 
//   { path: '/dashboard', element: <PrivateRoute><Dashboard /></PrivateRoute> },
//   { path: '/user/:id/:token', element: <PrivateRoute><UserDetails /></PrivateRoute> },
  
//   { path: '/edit-user/:id/:token', element: <PrivateRoute><EditUser /></PrivateRoute> },
// ]);

// export default router;


import { createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import EmailVerification from './components/EmailVerification';
import Dashboard from './components/Dashboard';
import UserDetails from './components/UserDetails';
import EditUser from './components/EditUser';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

const router = createBrowserRouter([
  { path: '*', element: <Login /> },
  { path: '/', element: <Login /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/email-verification/:email', element: <EmailVerification /> }, 
  { path: '/dashboard', element: <PrivateRoute><Dashboard /></PrivateRoute> },
  { path: '/user/:id/:token', element: <PrivateRoute><UserDetails /></PrivateRoute> },
  { path: '/edit-user/:id/:token', element: <PrivateRoute><EditUser /></PrivateRoute> },
  { path: '/forgot-password', element: <ForgotPassword /> }, // Added ForgotPassword route
  { path: '/auth/reset-password/:id/:token', element: <ResetPassword /> }, // Added ResetPassword route
]);

export default router;