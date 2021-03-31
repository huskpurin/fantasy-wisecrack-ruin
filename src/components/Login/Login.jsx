import { Suspense, useState } from "react";
import useAsync from "../../hooks/useAsync";
import * as UserService from "../../services/userService";
import LoginModel from "../LoginModel/LoginModel";

export default function Login() {
  const [isLoading, login, Component] = useAsync(UserService.login);
  const [token, setToken] = useState();

  const handleButtonClick = async () => {
    const res = await login();
    setToken(res.token);
  };

  return (
    <Suspense fallback={<LoginModel />}>
      <div>
        <input placeholder="account" />
        <br />
        <input placeholder="password" />
        <br />
        {isLoading ? (
          <button disabled>loading</button>
        ) : (
          <button onClick={handleButtonClick}>submit</button>
        )}
        {token && <p>{token}</p>}
        <Component />
      </div>
    </Suspense>
  );
}
