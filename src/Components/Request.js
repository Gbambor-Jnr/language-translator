import { useEffect, useState } from "react";

const Request = () => {
  const [data, setData] = useState([]);
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
};

export default Request;
