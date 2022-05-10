import From from "./Components/From";
import To from "./Components/To";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [outPut, setOutput] = useState("");
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("en");

  const changeHandler = (e) => {
    setFrom(e.target.value);
  };
  const toChangeHandler = (e) => setTo(e.target.value);
  useEffect(() => {
    const getLanguages = async () => {
      try {
        const res = await fetch("https://libretranslate.com/languages");
        if (!res.ok) {
          throw new Error("error in response");
        }
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getLanguages();
  }, []);

  const buttonClickHandler = () => {
    const params = new URLSearchParams();
    params.append("q", input);
    params.append("source", from);
    params.append("target", to);
    // params.append("api-key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");

    axios
      .post(`https://libretranslate.de/translate`, params, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        setOutput(res.data.translatedText);
      });
  };

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="divContainer">
      {/* <div className="divCont"> */}
      <h1 style={{ color: "white" }}>Translate To Your Favourite Languages </h1>
      <div className="divToFrom">
        <From languages={data} onChangeNow={changeHandler} from={from} />
      </div>
      <textarea
        rows={9}
        cols={50}
        onChange={inputChangeHandler}
        value={input}
      />
      <To languages={data} to={to} onChangeNow={toChangeHandler} />
      <textarea rows={9} cols={50} value={outPut} readOnly />
      <button className="btn" onClick={buttonClickHandler}>
        Translate
      </button>
      {/* </div> */}
    </div>
  );
}

export default App;
