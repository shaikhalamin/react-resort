import React from 'react';
import Room from '../components/Room';

function RoomsList({rooms}) {

    if(rooms.length ===0){
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms found in yours search parameter</h3>
            </div>
        )
    }

  return (
    <>
    <section className="rooms-list">
        <div className="roomslist-center">
            {rooms.map((room,index)=>{
                return <Room key={index} room={room}/>
            })}
        </div>
    </section>
    </>
  )
}

export default RoomsList
