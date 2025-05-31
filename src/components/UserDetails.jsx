// // // // import React, { useState, useEffect } from 'react';
// // // // import { useParams, useLocation, useNavigate } from 'react-router-dom';
// // // // import axios from 'axios';
// // // // import api from '../api';

// // // // const UserDetails = () => {
// // // //   const { id } = useParams(); 
// // // //   const location = useLocation();
// // // //   const goTo = useNavigate();
// // // //   const userToken = location.state?.userToken;

// // // //   const [userDetails, setUserDetails] = useState(null);
// // // //   const [problem, setProblem] = useState('');
// // // //   const [loading, setLoading] = useState(false);

// // // //   useEffect(() => {
// // // //     if (!userToken) {
// // // //       goTo('/login');
// // // //       return;
// // // //     }

// // // //     const fetchUserDetails = async () => {
// // // //       setLoading(true);
// // // //       setProblem('');
// // // //       try {
// // // //         const response = await axios.get(api.GET_USER_DETAILS(id), {
// // // //           headers: { Authorization: `Bearer ${userToken}` }
// // // //         });

// // // //         const fetchedUser = response.data?.user || null;
// // // //         if (!fetchedUser) {
// // // //           throw new Error('User data not found in response');
// // // //         }

// // // //         setUserDetails(fetchedUser);
// // // //       } catch (err) {
// // // //         setProblem(err.response?.data?.message || 'Failed to fetch user details.');
// // // //         if (err.response?.status === 401) {
// // // //           goTo('/login');
// // // //         }
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchUserDetails();
// // // //   }, [id, userToken, goTo]);

// // // //   return (
// // // //     <div className="box">
// // // //       <h2>User Details</h2>
// // // //       {loading && <p>Loading user details...</p>}
// // // //       {problem && <p className="error">{problem}</p>}
// // // //       {userDetails ? (
// // // //         <table className="user-details-table">
// // // //           <tbody>
            
// // // //             <tr>
// // // //               <th>Name</th>
// // // //               <td>{userDetails.name}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <th>Email</th>
// // // //               <td>{userDetails.email}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <th>Email Verified</th>
// // // //               <td>{userDetails.isEmailVerified ? 'Yes' : 'No'}</td>
// // // //             </tr>
            
// // // //           </tbody>
// // // //         </table>
// // // //       ) : (
// // // //         !loading && !problem && <p>No user details found.</p>
// // // //       )}
// // // //       <button onClick={() => goTo('/dashboard', { state: { userName: location.state?.userName, userToken } })} className="back-btn">
// // // //         Back to Dashboard
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UserDetails;



// // // // import React, { useState, useEffect } from 'react';
// // // // import { useParams, useLocation, useNavigate } from 'react-router-dom';
// // // // import axios from 'axios';
// // // // import api from '../api';

// // // // const UserDetails = () => {
// // // //   const { id } = useParams();
// // // //   const location = useLocation();
// // // //   const goTo = useNavigate();
// // // //   const userToken = location.state?.userToken;

// // // //   const [userDetails, setUserDetails] = useState(null);
// // // //   const [problem, setProblem] = useState('');
// // // //   const [loading, setLoading] = useState(false);

// // // //   useEffect(() => {
// // // //     if (!userToken) {
// // // //       goTo('/login');
// // // //       return;
// // // //     }

// // // //     const fetchUserDetails = async () => {
// // // //       setLoading(true);
// // // //       setProblem('');
// // // //       try {
// // // //         const response = await axios.get(api.GET_USER_DETAILS(id), {
// // // //           headers: { Authorization: `Bearer ${userToken}` }
// // // //         });

// // // //         const fetchedUser = response.data?.user || null;
// // // //         if (!fetchedUser) {
// // // //           throw new Error('User data not found in response');
// // // //         }

// // // //         setUserDetails(fetchedUser);
// // // //       } catch (err) {
// // // //         setProblem(err.response?.data?.message || 'Failed to fetch user details.');
// // // //         if (err.response?.status === 401) {
// // // //           goTo('/login');
// // // //         }
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchUserDetails();
// // // //   }, [id, userToken, goTo]);

// // // //   const handleEdit = () => {
// // // //     goTo(`/edit-user/${id}`, { state: { userToken, userDetails } });
// // // //   };

// // // //   return (
// // // //     <div className="box">
// // // //       <h2>User Details</h2>
// // // //       {loading && <p>Loading user details...</p>}
// // // //       {problem && <p className="error">{problem}</p>}
// // // //       {userDetails ? (
// // // //         <table className="user-details-table">
// // // //           <tbody>
// // // //             <tr>
// // // //               <th>Name</th>
// // // //               <td>{userDetails.name}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <th>Email</th>
// // // //               <td>{userDetails.email}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <th>Email Verified</th>
// // // //               <td>{userDetails.isEmailVerified ? 'Yes' : 'No'}</td>
// // // //             </tr>
// // // //           </tbody>
// // // //         </table>
// // // //       ) : (
// // // //         !loading && !problem && <p>No user details found.</p>
// // // //       )}
// // // //       <div className="button-group">
// // // //         <button onClick={() => goTo('/dashboard', { state: { userName: location.state?.userName, userToken } })} className="back-btn">
// // // //           Back to Dashboard
// // // //         </button>
// // // //         <button onClick={handleEdit} className="edit-btn">
// // // //           Edit
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UserDetails;

// // // import React, { useState, useEffect } from 'react';
// // // import { useParams, useLocation, useNavigate } from 'react-router-dom';
// // // import axios from 'axios';
// // // import api from '../api';

// // // const UserDetails = () => {
// // //   const { id } = useParams(); 
// // //   const location = useLocation();
// // //   const goTo = useNavigate();
// // //   const userToken = location.state?.userToken; 

// // //   console.log('UserDetails component loaded for ID:', id);
// // //   console.log('User token available:', !!userToken); 

// // //   const [userDetails, setUserDetails] = useState(null);
// // //   const [problem, setProblem] = useState('');
// // //   const [loading, setLoading] = useState(false);

// // //   useEffect(() => {
   
// // //     if (!userToken) {
// // //       console.warn('No user token found. Redirecting to login.');
// // //       goTo('/login');
// // //       return;
// // //     }

// // //     const fetchUserDetails = async () => {
// // //       setLoading(true);
// // //       setProblem('');
// // //       console.log(`Attempting to fetch details for user ID: ${id}`); 

// // //       try {
// // //         const response = await axios.get(api.GET_USER_DETAILS(id), {
// // //           headers: { Authorization: `Bearer ${userToken}` }
// // //         });

// // //         const fetchedUser = response.data?.user || null;

// // //         if (!fetchedUser) {
// // //           console.warn('User data not found in API response.'); 
// // //           throw new Error('User data not found in response');
// // //         }

// // //         console.log('User details received successfully.'); 
      
       

// // //         setUserDetails(fetchedUser);
// // //       } catch (err) {
// // //         console.error('Failed to fetch user details.'); 
// // //         setProblem(err.response?.data?.message || 'Failed to fetch user details.');
// // //         if (err.response?.status === 401) {
// // //           console.warn('Authentication failed. Redirecting to login.');
// // //           goTo('/login');
// // //         }
// // //       } finally {
// // //         setLoading(false);
// // //         console.log('User details fetching process complete.');
// // //       }
// // //     };

// // //     fetchUserDetails();
// // //   }, [id, userToken, goTo]); 

// // //   const handleEdit = () => {
// // //     console.log(`Navigating to edit page for user ID: ${id}`); 
// // //     goTo(`/edit-user/${id}`, { state: { userToken, userDetails } });
// // //   };

// // //   return (
// // //     <div className="box">
// // //       <h2>User Details</h2>
// // //       {loading && <p>Loading user details...</p>}
// // //       {problem && <p className="error">{problem}</p>}
// // //       {userDetails ? (
// // //         <table className="user-details-table">
// // //           <tbody>
// // //             <tr>
// // //               <th>Name</th>
// // //               <td>{userDetails.name}</td>
// // //             </tr>
// // //             <tr>
// // //               <th>Email</th>
// // //               <td>{userDetails.email}</td>
// // //             </tr>
// // //             <tr>
// // //               <th>Email Verified</th>
// // //               <td>{userDetails.isEmailVerified ? 'Yes' : 'No'}</td>
// // //             </tr>
// // //           </tbody>
// // //         </table>
// // //       ) : (
// // //         !loading && !problem && <p>No user details found.</p>
// // //       )}
// // //       <div className="button-group">
// // //         <button onClick={() => goTo('/dashboard', { state: { userName: location.state?.userName, userToken } })} className="back-btn">
// // //           Back to Dashboard
// // //         </button>
// // //         <button onClick={handleEdit} className="edit-btn">
// // //           Edit
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UserDetails;

// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';
// // import api from '../api';

// // const UserDetails = () => {
// //   const { id, token } = useParams();
// //   const goTo = useNavigate();

// //   console.log('UserDetails component loaded for ID:', id);
// //   console.log('User token available:', !!token);

// //   const [userDetails, setUserDetails] = useState(null);
// //   const [problem, setProblem] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     if (!token) {
// //       console.warn('No user token found. Redirecting to login.');
// //       goTo('/login');
// //       return;
// //     }

// //     const fetchUserDetails = async () => {
// //       setLoading(true);
// //       setProblem('');
// //       console.log(`Attempting to fetch details for user ID: ${id}`);

// //       try {
// //         const response = await axios.get(api.GET_USER_DETAILS(id), {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });

// //         const fetchedUser = response.data?.user || null;

// //         if (!fetchedUser) {
// //           console.warn('User data not found in API response.');
// //           throw new Error('User data not found in response');
// //         }

// //         console.log('User details received successfully.');
// //         setUserDetails(fetchedUser);
// //       } catch (err) {
// //         console.error('Failed to fetch user details.');
// //         setProblem(err.response?.data?.message || 'Failed to fetch user details.');
// //         if (err.response?.status === 401) {
// //           console.warn('Authentication failed. Redirecting to login.');
// //           goTo('/login');
// //         }
// //       } finally {
// //         setLoading(false);
// //         console.log('User details fetching process complete.');
// //       }
// //     };

// //     fetchUserDetails();
// //   }, [id, token, goTo]);

// //   const handleEdit = () => {
// //     console.log(`Navigating to edit page for user ID: ${id}`);
// //     goTo(`/edit-user/${id}/${token}`);
// //   };

// //   const handleDelete = async () => {
// //     if (window.confirm("Do you want to delete this user?")) {
// //       try {
// //         const response = await axios.delete(api.DELETE_USER(id), {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });

// //         console.log('User deleted successfully:', response.data);
// //         toast.success("User deleted successfully.");
// //         setTimeout(() => {
// //           goTo(-1);
// //         }, 2000);
// //       } catch (err) {
// //         console.error('Failed to delete user:', err);
// //         setProblem(err.response?.data?.message || 'Failed to delete user.');
// //         toast.error(err.response?.data?.message || 'Failed to delete user.');
// //       }
// //     }
// //   };

// //   return (
// //     <div className="box">
// //       <h2>User Details</h2>
// //       {loading && <p>Loading user details...</p>}
// //       {problem && <p className="error">{problem}</p>}
// //       {userDetails ? (
// //         <table className="user-details-table">
// //           <tbody>
// //             <tr>
// //               <th>Name</th>
// //               <td>{userDetails.name}</td>
// //             </tr>
// //             <tr>
// //               <th>Email</th>
// //               <td>{userDetails.email}</td>
// //             </tr>
// //             <tr>
// //               <th>Email Verified</th>
// //               <td>{userDetails.isEmailVerified ? 'Yes' : 'No'}</td>
// //             </tr>
// //           </tbody>
// //         </table>
// //       ) : (
// //         !loading && !problem && <p>No user details found.</p>
// //       )}
// //       <div className="button-group">
// //         <button onClick={() => goTo(-1)} className="back-btn">
// //           Back to Dashboard
// //         </button>
// //         <button onClick={handleEdit} className="edit-btn">
// //           Edit
// //         </button>
// //         <button onClick={handleDelete} className="delete-btn">
// //           Delete
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserDetails;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import api from '../api';

// const UserDetails = () => {
//   const { id, token } = useParams();
//   const goTo = useNavigate();

//   const [userDetails, setUserDetails] = useState(null);
//   const [problem, setProblem] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       setLoading(true);
//       setProblem('');
//       console.log(`Attempting to fetch details for user ID: ${id}`);

//       try {
//         const response = await axios.get(api.GET_USER_DETAILS(id), {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log('Fetch Response:', response.data);
//         const fetchedUser = response.data?.user || response.data || null;

//         if (!fetchedUser) {
//           console.warn('User data not found in API response.');
//           throw new Error('User data not found in response');
//         }

//         console.log('User details received successfully.');
//         setUserDetails(fetchedUser);
//       } catch (err) {
//         console.error('Fetch error:', err.response || err);
//         setProblem(err.response?.data?.message || 'Failed to fetch user details.');
//         if (err.response?.status === 401) {
//           console.warn('Authentication failed. Redirecting to login.');
//           goTo('/login');
//         }
//       } finally {
//         setLoading(false);
//         console.log('User details fetching process complete.');
//       }
//     };

//     fetchUserDetails();
//   }, [id, token, goTo]);

//   const handleEdit = () => {
//     console.log(`Navigating to edit page for user ID: ${id}`);
//     goTo(`/edit-user/${id}/${token}`);
//   };

//   const handleDelete = async () => {
//     if (window.confirm("Do you want to delete this user?")) {
//       try {
//         console.log(`Attempting to delete user ID: ${id} with token: ${token}`);
//         const response = await axios.delete(api.DELETE_USER(id), {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log('Delete Response:', response.data);
//         toast.success("User deleted successfully.");
//         setTimeout(() => {
//           goTo(-1);
//         }, 2000);
//       } catch (err) {
//         console.error('Delete error:', err.response || err);
//         const errorMsg = err.response?.data?.message || 'Failed to delete user.';
//         setProblem(errorMsg);
//         toast.error(errorMsg);
//       }
//     }
//   };

//   return (
//     <div className="box">
//       <h2>User Details</h2>
//       {loading && <p>Loading user details...</p>}
//       {problem && <p className="error">{problem}</p>}
//       {userDetails ? (
//         <table className="user-details-table">
//           <tbody>
//             <tr>
//               <th>Name</th>
//               <td>{userDetails.name}</td>
//             </tr>
//             <tr>
//               <th>Email</th>
//               <td>{userDetails.email}</td>
//             </tr>
//             <tr>
//               <th>Email Verified</th>
//               <td>{userDetails.isEmailVerified ? 'Yes' : 'No'}</td>
//             </tr>
//           </tbody>
//         </table>
//       ) : (
//         !loading && !problem && <p>No user details found.</p>
//       )}
//       <div className="button-group">
//         <button onClick={() => goTo(-1)} className="back-btn">
//           Back to Dashboard
//         </button>
//         <button onClick={handleEdit} className="edit-btn">
//           Edit
//         </button>
//         <button onClick={handleDelete} className="delete-btn">
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserDetails;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../axiosInstance"; 

const UserDetails = () => {
  const { id, token } = useParams();
  const goTo = useNavigate();

  const [userDetails, setUserDetails] = useState(null);
  const [problem, setProblem] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      setProblem("");
      console.log(`Attempting to fetch details for user ID: ${id}`);

      try {
        const response = await axiosInstance.get(`/user/${id}`);

        console.log("Fetch Response:", response.data);
        const fetchedUser = response.data?.user || response.data || null;

        if (!fetchedUser) {
          console.warn("User data not found in API response.");
          throw new Error("User data not found in response");
        }

        console.log("User details received successfully.");
        setUserDetails(fetchedUser);
      } catch (err) {
        console.error("Fetch error:", err.response || err);
        setProblem(err.response?.data?.message || "Failed to fetch user details.");
      } finally {
        setLoading(false);
        console.log("User details fetching process complete.");
      }
    };

    fetchUserDetails();
  }, [id, token, goTo]);

  const handleEdit = () => {
    console.log(`Navigating to edit page for user ID: ${id}`);
    goTo(`/edit-user/${id}/${token}`);
  };

  const handleDelete = async () => {
    if (window.confirm("Do you want to delete this user?")) {
      try {
        console.log(`Attempting to delete user ID: ${id} with token: ${token}`);
        const response = await axiosInstance.delete(`/user/${id}`);

        console.log("Delete Response:", response.data);
        toast.success("User deleted successfully.");
        setTimeout(() => {
          goTo(-1);
        }, 2000);
      } catch (err) {
        console.error("Delete error:", err.response || err);
        const errorMsg = err.response?.data?.message || "Failed to delete user.";
        setProblem(errorMsg);
        toast.error(errorMsg);
      }
    }
  };

  return (
    <div className="box">
      <h2>User Details</h2>
      {loading && <p>Loading user details...</p>}
      {problem && <p className="error">{problem}</p>}
      {userDetails ? (
        <table className="user-details-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{userDetails.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{userDetails.email}</td>
            </tr>
            <tr>
              <th>Email Verified</th>
              <td>{userDetails.isEmailVerified ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        !loading && !problem && <p>No user details found.</p>
      )}
      <div className="button-group">
        <button onClick={() => goTo(-1)} className="back-btn">
          Back to Dashboard
        </button>
        <button onClick={handleEdit} className="edit-btn">
          Edit
        </button>
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserDetails;