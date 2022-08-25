import Link from "next/link";
import { useState } from "react";

function Admin() {
  const [down, setDown] = useState(false);
  return (
    <>
      <header className="max-w-6xl mx-auto mt-6">
        <div className="flex justify-between">
          <p>LOGO</p>
          <button
            className="relative"
            onClick={() => {
              setDown(!down);
            }}
          >
            <img
              className="w-14 h-14"
              src=" https://cdn-icons-png.flaticon.com/512/6997/6997508.png"
              alt=""
            />
            {down && (
              <div
                id="dropdown"
                className=" w-44 bg-white rounded divide-y  shadow  absolute top-14 right-0"
              >
                <ul class="py-1 text-sm text-gray-700 00">
                  <li>
                    <Link href="#">
                      <a className="block py-2 px-4 hover:bg-gray-300  white">
                        Settings
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="block py-2 px-4 hover:bg-gray-300  white">
                        Earnings
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="block py-2 px-4 hover:bg-gray-300  white">
                        Sign out
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
      </header>
      <div className="max-w-6xl mx-auto my-20">
        <p className="text-2xl uppercase">Qoida Buzarlik turlari</p>
        <div className="grid grid-cols-4 gap-5 mt-5">
          <Cards main={"Peshexod"} text={"82"} />
          <Cards main={"Qizil chiroq"} text={"104"} />
          <Cards main={"Kamar"} text={"220"} />
          <Cards main={"Xammasi"} text={"405"} />
        </div>
        <div className="mt-10">
          <div className="max-w-6xl mx-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left  text-gray-500 uppercase border-b  bg-gray-200">
                  <th className="px-4 py-3">Client</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white ">
                <tr className="text-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">Hans Burger</p>
                        <p className="text-xs text-gray-600">10x Developer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">$ 863.45</td>
                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                      Approved
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">6/10/2020</td>
                </tr>

                <tr className="text-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">Jolina Angelie</p>
                        <p className="text-xs text-gray-600">Unemployed</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">$ 369.95</td>
                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full ">
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">6/10/2020</td>
                </tr>

                <tr className="text-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">Sarah Curry</p>
                        <p className="text-xs text-gray-600">Designer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">$ 86.00</td>
                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full">
                      Denied
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">6/10/2020</td>
                </tr>

                <tr className="text-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">Rulia Joberts</p>
                        <p className="text-xs text-gray-600">Actress</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">$ 1276.45</td>
                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full ">
                      Approved
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">6/10/2020</td>
                </tr>

                <tr className="text-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">Wenzel Dashington</p>
                        <p className="text-xs text-gray-600">Actor</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">$ 863.45</td>
                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full ">
                      Expired
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">6/10/2020</td>
                </tr>

                <tr className="text-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">Dave Li</p>
                        <p className="text-xs text-gray-600">Influencer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">$ 863.45</td>
                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full ">
                      Approved
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">6/10/2020</td>
                </tr>

                <tr className="text-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">Maria Ramovic</p>
                        <p className="text-xs text-gray-600">Runner</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">$ 863.45</td>
                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full ">
                      Approved
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">6/10/2020</td>
                </tr>

                <tr className="text-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">Hitney Wouston</p>
                        <p className="text-xs text-gray-600">Singer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">$ 863.45</td>
                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full ">
                      Approved
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">6/10/2020</td>
                </tr>

                <tr className="text-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">Hans Burger</p>
                        <p className="text-xs text-gray-600">10x Developer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">$ 863.45</td>
                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full ">
                      Approved
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">6/10/2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-between py-2 px-4 bg-slate-200 rounded-b-md text-xs">
          <p>SHOWING 21-30 OF 100</p>
          <div className="flex space-x-4  ">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </div>
      </div>
    </>
  );
}

function Cards(props) {
  return (
    <>
      <div className="flex items-center py-3 px-5 border rounded-md space-x-6 shadow-md hover:scale-[1.02] duration-300 cursor-pointer">
        <div className="p-2 bg-blue-500 rounded-full">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
          </svg>
        </div>
        <div>
          <p className="text-sm uppercase">{props.main}</p>
          <p className="text-lg font-semibold">{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default Admin;
