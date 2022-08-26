import axios from "axios";
import { useEffect, useState } from "react";

export default function CustomFetch({ url, method = "get", params, data }) {
  const [state, setState] = useState({
    isLoading: true,
    notFound: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    axios[method](url, { data, params })
      .then((response) => {
        setState({ isLoading: false, notFound: false, data: response.data });
      })
      .catch(function (error) {
        setState({
          isLoading: false,
          notFound: error.response && error.response.status === 404,
          data: null,
          error,
        });
      });
  }, [url, method, params, data]);

  return state;
}
