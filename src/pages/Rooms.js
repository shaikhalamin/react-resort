import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomContainer from '../components/RoomContainer';


function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
          <Banner title="Our rooms" subtitle="">
              <Link to="/" className="btn-primary">Return Home</Link>
          </Banner>
      </Hero>
      <section className="rooms">
        <RoomContainer />
      </section>
    </>
  )
}

export default Rooms
