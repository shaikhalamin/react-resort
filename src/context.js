import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext()

class RoomProvider extends Component {

state = {
  rooms:[],
  sortedRooms:[],
  featuredRooms:[],
  loading:true,
  type:'all',
  capacity:1,
  price:0,
  minPrice:0,
  maxPrice:0,
  minSize:0,
  maxSize:0,
  breakfast:false,
  pets:false
}

formatData = (items)=>{
  let tempItems = items.map((item,index)=>{
    let id = item.sys.id;
    let images = item.fields.images.map(image=> image.fields.file.url);
    let room = {...item.fields,images,id}
    return room;
  });
  return tempItems;
}

componentDidMount(){
  let rooms = this.formatData(items);
  let featuredRooms = rooms.filter(room => room.featured === true);
  let maxPrice = Math.max(...rooms.map(room => room.price));
  let maxSize = Math.max(...rooms.map(room => room.size));

  this.setState({
    rooms:rooms,
    sortedRooms:rooms,
    featuredRooms:featuredRooms,
    loading:false,
    price:maxPrice,
    maxPrice,
    maxSize
  });
}

handleChange = (event)=>{
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = event.target.name;

  this.setState({
    [name]:value
  },this.filterRooms);
  
}

filterRooms = ()=>{

  let {rooms,type,capacity,price,minSize,maxSize,breakfast,pets} = this.state;
  let tempRoom = [...rooms];

  capacity = parseInt(capacity)
  price = parseInt(price)
  minSize = parseInt(minSize)
  maxSize = parseInt(maxSize)

  //filter by type
  if(type !== 'all'){
    tempRoom = tempRoom.filter(room => room.type === type);
  }
  //filter by capacity
  if(capacity !== 1){
    tempRoom = tempRoom.filter(room => room.capacity === capacity);
  }
  
  //filter by price
  if(price !==0){
    tempRoom = tempRoom.filter(room => room.price <= price);
  }

  //filter by room size
  tempRoom = tempRoom.filter(room => room.size >= minSize && room.size <= maxSize);

  if(breakfast){
    tempRoom = tempRoom.filter(room => room.breakfast === true)
  }

  if(pets){
    tempRoom = tempRoom.filter(room => room.pets === true)
  }

  this.setState({
    sortedRooms:tempRoom
  })
  
}

getRoom = (slug)=>{
  let tempRooms = [...this.state.rooms];
  const room = tempRooms.find(room => room.slug === slug);
  return room;
}

  render() {
    return (
      <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }

