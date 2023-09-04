import React, { useState, useEffect } from "react";
import "./dashboard.css";
import axios from "axios";
import SideBar from "../../components/sidebar/sideBar";

export default function BookedMovies() {
  const [bookedTickets, setBookedTickets] = useState([]);

  useEffect(() => {
    fetchAllBookedTickets();
  }, []);

  const fetchAllBookedTickets = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/bookedtickets/all");
      const bookedTicketsData = response.data;
      setBookedTickets(bookedTicketsData);
    } catch (error) {
      console.error("Error fetching booked tickets:", error);
    }
  };

  return (
    <div className="dash-body">
      <div>
        <SideBar />
      </div>
      <div className="content">
       
        <div className="title-info">
          <p>Booked Tickets</p>
          <i></i>
        </div>

        <table className="dash-table-ticket" id="booked-tickets-table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Movie Name</th>
              <th>Room Name</th>
              <th>Start Time</th>
              <th>Seat Number</th>
             
            </tr>
          </thead>
          <tbody>
            {bookedTickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.userName}</td>
                <td>{ticket.movieName}</td>
                <td>{ticket.roomName}</td>
                <td>{ticket.startTime}</td>
                <td>{ticket.seatIndices}</td>
             
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
