import { authCookieKey } from "@/library/constants";
import { getCookie, setCookie } from "cookies-next";

const useAPI = () => {
  const login = async (input: { email: string; password: string }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    setCookie(authCookieKey, data.accessToken);
    return data;
  };

  const signup = async (input: {
    email: string;
    password: string;
    fullName: string;
  }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    setCookie(authCookieKey, data.accessToken);
    return data;
  };
  const testToken = async () => {
    const accessToken = getCookie(authCookieKey);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    return data;
  };



  return {
    login,
    signup,
    testToken,
  };
};
export default useAPI;
