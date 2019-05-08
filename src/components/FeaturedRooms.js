import React, { Component } from 'react';
import {RoomContext} from '../context';
import Title from './Title'
import Room from './Room';
import Loading from './Loading';


export default class FeaturedRooms extends Component {

static contextType = RoomContext;

  render() {
    let {featuredRooms : rooms,loading} = this.context;
      
    return (
      <section className="featured-rooms">
        <Title title="featured rooms"/>
        <div className="featured-rooms-center">
        { loading ? <Loading /> : rooms.map((room)=> <Room key={room.id} room={room} />) }
        </div>
      </section>
    )
  }
}
