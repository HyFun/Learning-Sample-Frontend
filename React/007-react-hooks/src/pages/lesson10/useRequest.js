import axios from "axios";
import { useEffect, useState } from "react";

function useRequest() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (loading) {
      getData();
    }
  }, [loading]);

  // 请求数据
  const getData = () => {
    axios
      .get("https://movie.querydata.org/api?id=33410979")
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return {
    loading,
    setLoading,
    data,
  };
}

export default useRequest;
