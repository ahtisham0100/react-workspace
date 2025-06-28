import { useEffect, useReducer } from "react";

// ✅ Move reducer outside component
function reducer(state, action) {
  switch (action.type) {
    case 'start':
      return { ...state, status: 'started' };
    case 'stop':
      return { ...state, status: 'stopped' };
    case 'reset':
      return { count: 0, status: 'stopped' };
    case 'tick':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    status: 'stopped'
  });

  useEffect(() => {
    let intervalId;

    if (state.status === 'started') {
      intervalId = setInterval(() => {
        dispatch({ type: 'tick' });
      }, 1000);
    }

    return () => clearInterval(intervalId); // ✅ Clean up to avoid multiple timers
  }, [state.status]);

  return (
    <>
      <div>
        <div className="count">
          {state.count}
          <div className="status">{state.status}</div>
        </div>
      </div>

      <button onClick={() => dispatch({ type: 'start' })} disabled={state.status === 'started'}>
        Start
      </button>
      <button onClick={() => dispatch({ type: 'stop' })} disabled={state.status !== 'started'}>
        Stop
      </button>
      <button onClick={() => dispatch({ type: 'reset' })} disabled={state.count === 0}>
        Reset
      </button>
    </>
  );
}

export default Counter;
