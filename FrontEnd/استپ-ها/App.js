import { useEffect, useReducer } from "react";
import "./App.css";


const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNextBtn = () => {
    const pageChildrenDiv = document.querySelectorAll(".pages div");
    const pageChildrenSpan = document.querySelectorAll(".pages span");

    if (state.count < 3) {
      if (pageChildrenDiv[state.count + 1]) {
        pageChildrenDiv[state.count + 1].style.borderColor = "rgb(70, 92, 216)";
      }
      pageChildrenSpan[state.count].style.backgroundColor = "rgb(70, 92, 216)";
      dispatch({ type: "increment" });
    }
  };

  const handlePrevBtn = () => {
    const pageChildrenDiv = document.querySelectorAll(".pages div");
    const pageChildrenSpan = document.querySelectorAll(".pages span");

    if (state.count > 0) {
      if (pageChildrenSpan[state.count - 1]) {
        pageChildrenSpan[state.count - 1].style.backgroundColor = "gray";
      }
      pageChildrenDiv[state.count].style.borderColor = "gray";
      dispatch({ type: "decrement" });
    }
  };

  useEffect(() => {
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");

    if (state.count === 0) {
      prevBtn.style.backgroundColor = "gray";
    } else {
      prevBtn.style.backgroundColor = "rgb(70, 92, 216)";
    }

    if (state.count === 3) {
      nextBtn.style.backgroundColor = "gray";
    } else {
      nextBtn.style.backgroundColor = "rgb(70, 92, 216)";
    }
  }, [state.count]);

  return (
    <div className="container">
      <div className="pages">
        <div style={{ borderColor: "rgb(70, 92, 216)" }}>1</div>
        <span></span>
        <div>2</div>
        <span></span>
        <div>3</div>
        <span></span>
        <div>4</div>
      </div>
      <div className="btns">
        <button disabled={state.count === 0} onClick={handlePrevBtn} data-testid="prevBtn" className="prevBtn">
          Prev
        </button>
        <button disabled={state.count === 3} onClick={handleNextBtn} data-testid="nextBtn" className="nextBtn">
          Next
        </button>
      </div>
    </div >
  );
}

export default App;
