import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "userlogin":
      return {
        ...state,
        modelVisible: true,
        sidebarVisible: true,
        user: action.user,
      };

    case "logout":
      return {
        ...state,
        user: null,
        modelVisible: false,
        sidebarVisible: false,
      };
    default:
      return state;
  }
}
function ReducerComposition() {
  let [state, dispatch] = useReducer(reducer, {
    modelVisible: false,
    sidebarVisible: false,
    user: null,
  });

  function handleLogin(e) {
    e.preventDefault();
    let form = e.target;
    let data = {
      username: form.elements["username"].value,
      password: form.elements["password"].value,
    };

    dispatch({ type: "userlogin", user: data });
    console.log(data);
  }

  function handleLogout(e) {
    e.preventDefault();
    dispatch({ type: "logout" });
  }

return (
    <>
        <style>
            {`
                .rc-btn {
                    padding: 8px 16px;
                    background: #1976d2;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    margin-bottom: 16px;
                    cursor: pointer;
                    font-size: 16px;
                    transition: background 0.2s;
                }
                .rc-btn:hover {
                    background: #1565c0;
                }
                .rc-modal {
                    background: #fff;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 24px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    margin-bottom: 16px;
                    max-width: 400px;
                }
                .rc-sidebar {
                    background: #f5f5f5;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    margin-bottom: 16px;
                    max-width: 250px;
                    color:black
                }
                .rc-form {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    max-width: 300px;
                    background: #fafafa;
                    border: 1px solid #eee;
                    border-radius: 8px;
                    padding: 20px;
                    color:black
                }
                .rc-input {
                    padding: 8px;
                    border: 1px solid #bbb;
                    border-radius: 4px;
                    font-size: 15px;
                }
                    .rc-modal{
                    color:black }
            `}
        </style>
        <button
            className="rc-btn"
            style={{ display: state.user == null ? "none" : "inline-block" }}
            onClick={handleLogout}
        >
            LogOut
        </button>

        <div
            className="rc-modal"
            style={{ display: state.modelVisible === false ? "none" : "block" }}
        >
            this is model
        </div>

        <div
            className="rc-sidebar"
            style={{ display: state.sidebarVisible === false ? "none" : "block" }}
        >
            this is sideBar
        </div>

        <form
            className="rc-form"
            style={{ display: state.sidebarVisible === !true ? "block" : "none" }}
            action="submit"
            onSubmit={handleLogin}
        >
            <input className="rc-input" type="text" name="username" placeholder="username" />
            <input className="rc-input" type="password" name="password" placeholder="enter password" />
            <button className="rc-btn" type="submit">submit</button>
        </form>
    </>
);
}

export default ReducerComposition;
