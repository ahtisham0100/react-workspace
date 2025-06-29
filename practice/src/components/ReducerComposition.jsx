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
