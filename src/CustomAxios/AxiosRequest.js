import { useState, useEffect } from "react";
import axios from "axios";

// axios.defaults.baseURL = "https//localhost:5000";

const AxiosRequest = ({ method, url, headers = null, body = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    await axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  // useEffect(() => {
  //   fetchData();
  // }, [method, url, headers, body]);
  fetchData();
  // custom hook returns value
  return { response, error, loading };
};

export default AxiosRequest;
