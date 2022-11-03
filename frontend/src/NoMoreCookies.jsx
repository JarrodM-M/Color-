import Cookies from "js-cookie";

export function NoMoreCookies() {
  const handleClick = () => {
    Cookies.remove("connect.sid");
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleClick}>No More Cookies</button>
    </div>
  );
}
