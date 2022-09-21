import { useEffect } from "react";
import { useState } from "react";

const BASE_URL = "http://localhost:4000";

export function useRequest(path) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}${path}`).then(async (resp) => {
      const json = await resp.json();
      setData(json);
    });
  }, [path]);

  return data;
}
