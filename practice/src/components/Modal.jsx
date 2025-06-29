import { useEffect, useReducer } from "react";

function reducer(state , action) {
   
  switch (action.type) {
    case 'hide':
      return {...state , isopen:false}
     
          case 'show':
      return {...state,isopen:true}
      default :
      return state;
    
  }
}
function Modal() {
    let [state, dispatch ]=useReducer(reducer, {isopen:true})



    return(
        <div className="modal">
           
            <div className="msg" style={{display:(state.isopen==false?'none':"flex")}}> Hi , this is model.And I'm visible</div>
      <button disabled={!state.isopen} onClick={()=>{
        dispatch({type:'hide'})
      }}>Hide</button>
       <button disabled={state.isopen} onClick={()=>{
        dispatch({type:'show'})
      }}>show</button>
       </div>
    )
} 


export default Modal;