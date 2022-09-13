import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useLoggedInOrRiderect, useSetUser } from "../components/utils/auth";
import CustomFetch from "../components/utils/customFetch";
import {
  lock,
  passwordInvisible,
  passwordVisible,
  user,
} from "../components/utils/icon";

function Login() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const setUser = useSetUser();
  const submit = useCallback((e) => {
    e.preventDefault();
    // const { isLoading, notFound, error, data } = CustomFetch({
    //   url: "/api/auth/login/",
    //   method: "post",
    //   data: {
    //     username: e.target.username.value,
    //     password: e.target.password.value,
    //   },
    // });
    // if (isLoading) {
    //   return "Loading";
    // }
    // if (notFound) {
    //   return "Not Found";
    // }
    // if (error) {
    //   return "ERROR";
    // }

    axios
      .post("/api/auth/login/", {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((res) => {
        setUser(res.data);
        router.push("/");
      });
  }, []);
  return (
    <div className="h-screen max-w-7xl mx-auto">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full gap-2 ">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 bg-red-500">
            <img src="/pcar.jpg" className="w-full" alt="Sample image" />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12  md:mb-0">
            <form
              className="flex flex-col items-center space-y-8"
              onSubmit={submit}
            >
              <p className="uppercase text-3xl tracking-widest fontfamily">
                admin login
              </p>

              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center px-3 border-r-[1.5px] fill-gray-400 border-gray-400 my-2">
                    <div className="w-[18px] h-[20px]">{user}</div>
                  </div>
                  <input
                    className="rounded py-2.5 border-2 pl-14 pr-4 outline-none focus:bg-slate-200 w-[300px]"
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center px-3 border-r-[1.5px] fill-gray-400 border-gray-400 my-2">
                    <div className="w-[18px] h-[20px]">{lock}</div>
                  </div>
                  <input
                    className="rounded py-2.5 border-2 pl-14 pr-11 outline-none focus:bg-slate-200 w-[300px]"
                    type={visible ? "text" : "password"}
                    placeholder="Password"
                    required
                    name="password"
                    autoComplete="on"
                  />
                  <div className="absolute inset-y-0 flex items-center right-3">
                    <div
                      className="cursor-pointer select-none"
                      onClick={() => {
                        setVisible(!visible);
                      }}
                    >
                      {visible ? (
                        <div className="h-6 w-6 text-gray-400">
                          {passwordVisible}
                        </div>
                      ) : (
                        <div className="h-6 w-6 text-gray-400">
                          {passwordInvisible}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* {error && (
                  <span className="text-red-600">
                    {error === 400
                      ? "Incorrect username or password"
                      : "Bad network connection"}
                  </span>
                )} */}
              </div>

              <div>
                <input
                  className="hover:bg-[#1b6ada] bg-[#1a5bb6] text-white w-60 transition-all duration-300 rounded text-lg py-2.5 inline-block cursor-pointer"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
