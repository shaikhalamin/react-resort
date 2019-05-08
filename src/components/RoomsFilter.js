import React,{useContext} from 'react';
import {RoomContext} from '../context';
import Title from './Title';

const getUnique = (items,value)=>{
  return [...new Set(items.map(item => item[value]))];
}

function RoomsFilter({rooms}) {

    const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
    } = useContext(RoomContext);

    let types = getUnique(rooms,'type');
    types = ['all',...types];
    
    let people =  getUnique(rooms,'capacity');

  return (
    <>
    <section className="filter-container">
        <Title title='search rooms'/>
        <form className="filter-form">

            {/*search by type */}
            <div className="form-group">
              <label htmlFor="type">room type</label>
              <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                {types.map((type,i)=>{
                  return <option key={i} value={type}>{type}</option>
                })}
              </select>
            </div>
            {/* search by capcity */}
            <div className="form-group">
              <label htmlFor="capacity">Guest</label>
              <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                {people.map((person,i)=>{
                  return <option key={i} value={person}>{person}</option>
                })}
              </select>
            </div>

            {/* search by price */}
            <div className="form-group">
              <label htmlFor="price">room price ${price}</label>
              <input className="form-control" value={price} type="range" name="price" id="price" min={minPrice} max={maxPrice} onChange={handleChange}/>
            </div>

            {/* search by size */}
            <div className="form-group">
              <label htmlFor="size">room size</label>
              <div className="size-inputs">
                <input type="number" name="minSize" id="size" value={minSize} className="size-input" onChange={handleChange}/>
                <input type="number" name="maxSize" id="size" value={maxSize} className="size-input" onChange={handleChange}/>
              </div>
            </div>

           {/* search by extras */}
           <div className="form-group">
                <div className="single-extra">
                  <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                  <label htmlFor="breakfast">breakfastk</label>
                </div>

                <div className="single-extra">
                  <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                  <label htmlFor="pets">pets</label>
                </div>
           </div>     
            

        </form>
    </section>
      
    </>
  )
}

export default RoomsFilter
