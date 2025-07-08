import { useParams } from "react-router-dom";

function User() {
    let {username} = useParams();
    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {username}</p>
        </div>
    );
}

export default User;
