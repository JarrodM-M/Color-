import { useRequest } from "./api";
import {rollNumber} from './Dice'

export function Color() {
  const data = useRequest("/");

  console.log({ data });

  if (!data) return <p>loading...</p>;

  const {
    color: { r, g, b },
  } = data;

  return (
    <div
      style={{
        width: 256,
        height: 256,
        backgroundColor: `rgb(${r},${g},${b})`,
      }}
    />
  );
}
