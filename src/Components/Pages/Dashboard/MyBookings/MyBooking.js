import React from 'react';

const MyBooking = ({ booking, index, handleDelete }) => {
  const { _id, name, shipCode, terminalName, date, slot, phone, description } =
    booking;
  const handlePayment = () => {};
  return (
    <tr className="text-center">
      <th className="bg-slate-800">{index}</th>
      <td className="bg-slate-800 border-r-2">{name}</td>
      <td className="bg-slate-800 border-r-2">{shipCode}</td>
      <td className="bg-slate-800 border-r-2">{terminalName}</td>
      <td className="bg-slate-800 border-r-2">{date}</td>
      <td className="bg-slate-800 border-r-2">{slot}</td>
      {/* <td className="bg-slate-800 border-r-2">{phone}</td>
      <td className="bg-slate-800 border-r-2">{description}</td> */}
      <td className="bg-slate-800 border-r-2">
        <button
          onClick={() => handlePayment(_id)}
          className="bg-lime-600 px-3 py-1 rounded-md uppercase text-white font-semibold hover:bg-lime-500"
        >
          Payment
        </button>
      </td>
      <td className="bg-slate-800 border-r-2">
        <button
          onClick={() => handleDelete(_id)}
          className="bg-orange-600 px-3 py-1 rounded-md uppercase text-white font-semibold hover:bg-orange-500"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default MyBooking;