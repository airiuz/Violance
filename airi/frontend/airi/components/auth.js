import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const router = useRouter();
  let [authTokens, setAuthTokens] = useState(null);
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);
  let [err, setErr] = useState("");
  useEffect(() => {
    setUser(
      localStorage.getItem("authTokens")
        ? jwtDecode(localStorage.getItem("authTokens"))
        : null
    );
    setAuthTokens(
      localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens"))
        : null
    );
    if (!localStorage.getItem("authTokens")) {
      router.push(`/login/?next=${router.asPath}`);
    }
  }, []);

  useEffect(() => {
    let fourMinutes = 1000 * 60 * 4;

    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    router.push(`/login/?next=${router.asPath}`);
  };
  let loginUser = async (e) => {
    e.preventDefault();
    console.log("submit");
    let response = await fetch("/auth/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      router.push("/admin/");
    } else {
      setErr(response.status);
    }
  };

  let updateToken = async () => {
    let response = await fetch("auth/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });

    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };
  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
    error: err,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
