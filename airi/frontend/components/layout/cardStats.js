import Link from "next/link";
import { Router, useRouter } from "next/router";
import { belt, crosswalk, general, light } from "../../components/utils/icon";

function CardStats() {
  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      <Cards
        url={"/admin/fouls/all/"}
        main={"Xammasi"}
        text={"405"}
        icon={general}
        iconClassName={
          "w-10 h-10 bg-green-500 fill-white items-center py-3 px-2 rounded-full"
        }
      />
      <Cards
        url={"/admin/fouls/crosswalk/"}
        main={"Peshexod"}
        text={"82"}
        icon={crosswalk}
        iconClassName={
          "w-10 h-10 bg-black fill-white items-center py-3 px-2 rounded-full"
        }
      />
      <Cards
        url={"/admin/fouls/light/"}
        main={"Qizil chiroq"}
        text={"104"}
        icon={light}
        iconClassName={
          "w-10 h-10 bg-red-500 fill-white items-center py-3 px-2 rounded-full"
        }
      />
      <Cards
        url={"/admin/fouls/belt/"}
        main={"Kamar"}
        text={"220"}
        icon={belt}
        iconClassName={
          "w-10 h-10 bg-gray-500 fill-white items-center py-3 px-2 rounded-full"
        }
      />
    </div>
  );
}

export default CardStats;

function Cards(props) {
  const { asPath } = useRouter();
  return (
    <Link href={props.url}>
      <a
        className={`flex items-center py-3 px-5 border-2 border-b-4 rounded-md space-x-6 shadow-lg hover:scale-[1.02] duration-300 cursor-pointer ${
          asPath === props.url ? "border-b-indigo-500" : "border-b-white"
        }`}
      >
        <div className={props.iconClassName}>{props.icon}</div>
        <div>
          <p className="text-sm uppercase">{props.main}</p>
          <p className="text-lg font-semibold">{props.text}</p>
        </div>
      </a>
    </Link>
  );
}
