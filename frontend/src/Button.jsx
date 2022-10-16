import { useEffect } from "react";
import { useState } from "react";
import { request, useRequest } from "./api";

export function Button() {
  const [rollAmount, setRollAmount] = useState();

  const rollAmountFromRequest = useRequest("/roll-amount");

  useEffect(() => {
    if (rollAmount === undefined && rollAmountFromRequest !== undefined) {
      setRollAmount(rollAmountFromRequest.rollAmount);
    }
  }, [rollAmountFromRequest]);

  const handleClick = () => {
    request("/roll", "POST").then(({ amount }) => setRollAmount(amount));
  };

  if (rollAmount === undefined) return null;

  return (
    <div>
      <button disabled={rollAmount !== null} onClick={handleClick}>
        Roll Me
      </button>
      <p>Roll Amount: {rollAmount}</p>
    </div>
  );
}
