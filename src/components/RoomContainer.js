import React,{useContext} from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

import {RoomContext} from '../context';
import Loading from './Loading';

function RoomContainer() {

  const {sortedRooms,loading,rooms} = useContext(RoomContext);

  if(loading){
    return <Loading />
  }
  
  return (
    <>
        <RoomsFilter rooms={rooms}/>
        <RoomsList rooms={sortedRooms}/>
    </>
  )
}

export default RoomContainer
