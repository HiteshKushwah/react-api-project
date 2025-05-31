// import { RouterProvider } from "react-router-dom";
// import router from "./routeConfig";
// import './App.css';

// function App() {
//   return (
//     <div className="main">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;



import { RouterProvider } from "react-router-dom";
import router from "./routeConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  return (
    <div className="main">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
