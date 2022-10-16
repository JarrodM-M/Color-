import { useEffect } from "react";
import { useState } from "react";

const BASE_URL = "/api";

export const request = async (path, method = "GET") => {
  const resp = await fetch(`${BASE_URL}${path}`, {
    method,
    credentials: "include",
  });
  return await resp.json();
};

export function useRequest(path, method = "GET") {
  const [data, setData] = useState();

  useEffect(() => {
    request(path, method).then((data) => setData(data));
  }, [path]);

  return data;
}
