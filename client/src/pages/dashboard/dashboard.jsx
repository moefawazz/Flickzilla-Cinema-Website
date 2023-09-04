import React, { useState, useEffect } from "react";
import axios from "axios";
import Icons from '../../components/icons/icons'
import "./dashboard.css"
import SideBar from "../../components/sidebar/sideBar"

export default function Dashboard() {
    const [moviesData, setMoviesData] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const [bookedTickets, setBookedTickets] = useState([]);

    useEffect(() => {
      fetchAllBookedTickets();
    }, []);

    const fetchAllBookedTickets = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/bookedtickets/all");
        const bookedTicketsData = response.data;
        console.log("ticket data",bookedTicketsData)
        setBookedTickets(bookedTicketsData);
      } catch (error) {
        console.error("Error fetching booked tickets:", error);
      }
    };
  

    useEffect(() => {
        const fetchMoviesData = async () => {
          try {
            const response = await axios.get("http://localhost:5000/movies/all");
            if (response.status === 200) {
              setMoviesData(response.data);
            }
          } catch (error) {
            console.error("Error fetching movies data:", error);
          }
        };
    
        fetchMoviesData();
      }, []);

      useEffect(() => {
        const fetchUsersData = async () => {
          try {
            const response = await axios.get(
                `http://localhost:5000/users`,
                {
                  headers: {
                    token: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
        
            if (response.status === 200) {
                setUsersData(response.data);
            }
          } catch (error) {
            console.error("Error fetching users data:", error);
          }
        };
    
        fetchUsersData();
      }, []);
  return (
    <>
    <div className='dash-body'>
    <div><SideBar/></div>
    <div className="content">
        <div className="title-info">
            <p>Dashbord</p>
            <i><Icons.ChartBar/></i>
        </div>

        <div className="data-info">
    <div className="box">
        <i><Icons.Users/></i>
        <div className="data">
            <p>users</p>
            <span>{new Set(bookedTickets.map(ticket => ticket.userId)).size}</span>
        </div>
    </div>
    <div className="box">
        <i><Icons.Film/></i>
        <div className="data">
            <p>Movies</p>
            <span>{new Set(bookedTickets.map(ticket => ticket.movieId)).size}</span>
        </div>
    </div>
    <div className="box">
        <i><Icons.TicketAlt/></i>
        <div className="data">
            <p>Tickets</p>
            <span>{bookedTickets.length}</span>
        </div>
    </div>
            <div className="box">
                <i><Icons.DollarSign/></i>
                <div className="data">
                    <p>revenue</p>
                    <span>
                {bookedTickets.reduce((totalRevenue, ticket) => {
                    const seatIndex = ticket.seatIndices[0];
                    const revenueToAdd = seatIndex >= 1 && seatIndex <= 24 ? 15 : 10;
                    return totalRevenue + revenueToAdd;
                }, 0)}
                $
            </span>
                </div>
            </div>
        </div>
        <div className="title-info">
            <p>Bookings</p>
            <i><Icons.ChartBar/></i>
        </div>
        <table className="dash-table" id="booked-tickets-table">
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
    </>
  )
}
