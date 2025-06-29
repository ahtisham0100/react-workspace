// Problem 4: Form Input Manager
// Task: Create a reducer to manage form state: { name: '', email: '' }

import { useEffect, useReducer } from "react";

// Actions:
// updateField, payload: { field, value }

// Bonus:
// Add a reset action.

// Common Mistake:
// Using state[field] = value directly — must use immutable update.
function reducer(state, action) {
  switch (action.type) {
    case "submitForm":
      return { ...state, formdata: action.payload };

    default:
      return state;
  }
}
function FormsHandling() {
  let [state, dispatch] = useReducer(reducer, {
    formdata: {},
  });

  function handleForm(e) {
    e.preventDefault();
    const form = e.target;
    const values = {
      fname: form.elements["firstname"].value,
      lname: form.elements['lastname'].value,
      phone: form.elements["phone"].value,
    };

    console.log(values)
    dispatch({ type: "submitForm", payload: values });
  }


  useEffect(()=>{
console.log("STATE IS :",state.formdata)
  },[state])
  return (
    <>
      <form onSubmit={handleForm}>
        <input type="text" name="firstname" placeholder="Enter First Name" />

        <input type="text" name="lastname" placeholder="enter last name" />

        <input type="tel" placeholder="Enter Contact Number" name="phone" />

        <button type="submit">submit</button>
      </form> 

      <div className="data">
        submitted data
      <span>{state.fname}</span>
      </div>
    </>
  );
}

export default FormsHandling;
