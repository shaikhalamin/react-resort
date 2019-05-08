import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Room({room}) {
  const {name,slug,price,images} = room;
  return (
    <article className="room">
        <div className="img-container">
            <img src={images[0]} alt={name}/>
            <div className="price-top">
                <h6>${price}</h6>
                <p>per night</p>
            </div>
            <Link className='btn-primary room-link' to={`/rooms/${slug}`}>Featured</Link>
        </div>
        <p className="room-info">{name}</p>
    </article>
  )
}

Room.propTypes = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired
    })
} 

export default Room
