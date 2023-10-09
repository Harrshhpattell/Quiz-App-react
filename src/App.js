import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import { useReducer } from "react";

function App() {
  const initialState = {
    questions: [],

    status: "Loading...",
  };

  function reducer(state, action) {}

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error"));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;

// npm i json-server
