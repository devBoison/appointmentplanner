import React from "react";
import Tile from './tile/Tile'

export const TileList = ({
  contacts,
  appointments,
  isAppointment 
}) => {
  return (
    <div>
     if (isAppointment) {
    return (
      <ul>
        {appointments.map((appointment, i) => {
          return <li key={`${appointment.title}_${i}`} style={{listStyleType: 'circle'}}><Tile appointment={appointment} isAppointment={true} /></li>
        })}
      </ul>
    );
  }
  else {
    return (
      <ul>
        {contacts.map((contact, i) => {
          return <li key={`${contact.name}_${i}`} style={{listStyleType: 'circle'}}><Tile contact={contact} isAppointment={false} /></li>
        })}
      </ul>
    );
  }
    </div>
  );
};
