import Link from "next/link";
import { useState } from "react";

function FoulsTable() {
  const [value, setValue] = useState(0);
  const [table, setTable] = useState([
    [
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
    ],
    [
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
    ],
    [
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
    ],
    [
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "1",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
    ],
    [
      {
        id: 0,
        name: "2",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "2",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "2",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "2",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
    ],
    [
      {
        id: 0,
        name: "3",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "3",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "3",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
      {
        id: 0,
        name: "3",
        number: "01 A 007 AA",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pelak_shakhsi-UZ.png/350px-Pelak_shakhsi-UZ.png",
        date: "6/10/2020",
      },
    ],
  ]);

  return (
    <div className="my-10">
      <div className="text-sm font-semibold">
        <div className="grid grid-cols-5 place-items-center uppercase px-4 py-3 border-x rounded-t-md bg-slate-300">
          <p>№</p>
          <p>avtomobil raqami</p>
          <p>rasm</p>
          <p>qoida buzilgan sana</p>
          <p>#</p>
        </div>
        {table[value]?.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-5 place-items-center border-x border-t px-4 py-3"
          >
            <p>{i + 1 + value * 4}</p>
            <p>{row.number}</p>
            <div>
              <img className="h-6" src={row.imageURL} alt="plate" />
            </div>
            <p>{row.date}</p>
            <Link href={`/admin/fouls/details/${row.id}/`}>
              <a className="uppercase font-semibold text-indigo-500">
                batafsil
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between px-4 py-3 bg-slate-300 rounded-b-md text-sm">
        <p>
          SHOWING {value * 4 + 1}-{value * 4 + 4} OF {table.length * 4}
        </p>
        <div className="flex space-x-1">
          {table.map((el, i) => {
            if (i + 3 < value || value + 2 < i) {
              return;
            }
            return (
              <button
                className={`rounded-full px-[10px] py-1 ${
                  value === i && "bg-indigo-500 text-white"
                }`}
                key={i}
                onClick={() => {
                  setValue(i);
                }}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FoulsTable;
