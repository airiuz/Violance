import axios from "axios";
import { useRouter } from "next/router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext();

export const useUser = () => {
  const authContext = useContext(AuthContext);
  return authContext.user;
};

export const useSetUser = () => {
  const authContext = useContext(AuthContext);
  return authContext.setUser;
};

export const useLoggedInOrRiderect = () => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.replace(`/login/?next=${router.asPath}`);
    }
  }, [user]);

  return user !== null;
};

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({ user: undefined });

  const setUser = useCallback((user) => {
    setState({ user });
  }, []);

  const value = useMemo(() => ({ ...state, setUser }), [state]);

  useEffect(() => {
    axios
      .get("/api/auth/session/")
      .then(function (response) {
        setState({ user: response.data });
      })
      .catch(function () {
        setState({ user: null });
      });
  }, []);

  if (state.user === undefined) {
    return null;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
