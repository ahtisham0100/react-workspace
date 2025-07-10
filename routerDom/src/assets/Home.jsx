import { Navigate } from "react-router-dom";
import axiosInstance from "./apis/axios";
import ErrorBoundary from "./ErrorBoundary";
function Home({children}) {
 let logged = true; // Simulating a logged-in user, replace with actual authentication logic
const users = axiosInstance.get("/users")
  .then(response => {
    console.log(response.data);
    })
  .catch(error => {
    console.error("There was an error fetching the users!", error);
  });
    console.log(users);
    return <ErrorBoundary> {logged ?  children: <Navigate to="/login" replace={true} /> }</ErrorBoundary>;
  };

export default Home;