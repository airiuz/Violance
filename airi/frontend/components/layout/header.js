import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useSetUser, useUser } from "../utils/auth";

function Header() {
  const [down, setDown] = useState(false);
  const user = useUser();
  const setUser = useSetUser();
  const router = useRouter();

  const logout = useCallback(() => {
    axios
      .post("/api/auth/logout/", {
        username: user.username,
      })
      .then((res) => {
        setUser(null);
        router.replace(router.query.next ?? "/");
      })
      .catch((err) => {});
  });
  return (
    <header className="max-w-6xl mx-auto mt-6">
      <div className="flex justify-between">
        <p>LOGO</p>
        {down && (
          <div
            className="fixed inset-0 z-[90]"
            onClick={() => {
              setDown(false);
            }}
          ></div>
        )}
        <div className="relative z-[100]">
          <span
            className="w-14 h-14 uppercase flex items-center justify-center rounded-full text-white bg-purple-500 cursor-pointer"
            onClick={() => {
              setDown(!down);
            }}
          >{`${
            user?.first_name && user?.last_name
              ? user.first_name[0].concat(user.last_name[0])
              : "ng"
          }`}</span>
          {down && (
            <div className="w-44 bg-white rounded divide-y shadow absolute top-16 right-0">
              <ul className="py-1 text-sm text-gray-700 00">
                <li>
                  <Link href="#">
                    <a className="block py-2 px-4 hover:bg-gray-300 white">
                      Settings
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="block py-2 px-4 hover:bg-gray-300 white">
                      Earnings
                    </a>
                  </Link>
                </li>
                <li
                  className="block py-2 px-4 text-red-500 hover:bg-gray-300 white cursor-pointer"
                  onClick={logout}
                >
                  Sign out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
