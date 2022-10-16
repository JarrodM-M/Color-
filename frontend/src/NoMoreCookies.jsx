import Cookies from "js-cookie";

window.Cookies = Cookies;

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
