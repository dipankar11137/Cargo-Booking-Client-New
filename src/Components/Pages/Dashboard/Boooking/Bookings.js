import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Booking from './Booking';

const Bookings = () => {
  const [bookings, setBooking] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/bookings')
      .then(res => res.json())
      .then(data => setBooking(data));
  }, [bookings]);

  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/bookings/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = bookings.filter(booking => booking._id !== id);
          setBooking(remaining);
          toast.success('Successfully Delivered ');
        });
    }
  };

  const handleAccept = id => {
    const updateAccept = { accept: true };
    fetch(`http://localhost:5000/bookingAccept/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateAccept),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Accept Done ');
      });
  };
  return (
    <div className="px-1">
      <h1 className="text-3xl font-semibold text-center py-5 pr-20">
        Manage All Booking
      </h1>
      <div className="overflow-x-auto">
        <table className="table  w-full text-white">
          <thead>
            <tr className="text-3xl bg-slate-900 text-center">
              <th className="bg-slate-700 text-xl"></th>
              <th className="bg-slate-700 text-xl">Ship Name</th>
              <th className="bg-slate-700 text-xl">Ship Code</th>
              <th className="bg-slate-700 text-xl">Terminal</th>
              <th className="bg-slate-700 text-xl">Date</th>
              <th className="bg-slate-700 text-xl">Slot</th>
              <th className="bg-slate-700 text-xl">Phone</th>
              <th className="bg-slate-700 text-xl">Description</th>
              <th className="bg-slate-700 text-xl">Status</th>
              <th className="bg-slate-700 text-xl">Delivery</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <Booking
                key={booking._id}
                booking={booking}
                index={index + 1}
                handleDelete={handleDelete}
                handleAccept={handleAccept}
              ></Booking>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
