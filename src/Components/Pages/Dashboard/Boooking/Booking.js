import React from "react";

const Booking = ({ booking, index, handleDelete }) => {
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
        <button
          onClick={() => handleDelete(_id)}
          className="bg-blue-800 px-3 py-1 rounded-md uppercase text-white font-semibold hover:bg-blue-600"
        >
          delivered
        </button>
      </td>
    </tr>
  );
};

export default Booking;
