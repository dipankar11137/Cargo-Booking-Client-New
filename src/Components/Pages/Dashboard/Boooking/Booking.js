import React from "react";

const Booking = ({ booking, index, handleDelete, handleAccept }) => {
  const { _id, name, shipCode, terminalName, date, slot, phone, description } =
    booking;

  return (
    <tr className="text-center">
      <th className="bg-slate-800">{index}</th>
      <td className="bg-slate-800 border-r-2">{name}</td>
      <td className="bg-slate-800 border-r-2">{shipCode}</td>
      <td className="bg-slate-800 border-r-2">{terminalName}</td>
      <td className="bg-slate-800 border-r-2">{date}</td>
      <td className="bg-slate-800 border-r-2">{slot}</td>
      <td className="bg-slate-800 border-r-2">{phone}</td>
      <td className="bg-slate-800 border-r-2">{description}</td>
      <td className="bg-slate-800 border-r-2">
        {booking?.payment ? (
          <>
            {booking?.accept ? (
              <h1 className="text-2xl text-green-300 font-bold">Accept</h1>
            ) : (
              <button
                onClick={() => handleAccept(_id)}
                className="bg-lime-600 px-3 py-1 rounded-md uppercase text-white font-semibold hover:bg-lime-700"
              >
                Accept
              </button>
            )}
          </>
        ) : (
          // <button
          //   onClick={() => handleAccept(_id)}
          //   className="bg-lime-600 px-3 py-1 rounded-md uppercase text-white font-semibold hover:bg-lime-700"
          // >
          //   Accept
          // </button>
          <h1 className="text-xl font-semibold">Unpaid</h1>
        )}
      </td>
      <td className="bg-slate-800 border-r-2">
        {booking?.payment ? (
          <button
            onClick={() => handleDelete(_id)}
            className="bg-orange-600 px-3 py-1 rounded-md uppercase text-white font-semibold hover:bg-orange-700"
            disabled
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => handleDelete(_id)}
            className="bg-orange-600 px-3 py-1 rounded-md uppercase text-white font-semibold hover:bg-orange-700 "
          >
            Remove
          </button>
        )}
      </td>
    </tr>
  );
};

export default Booking;
