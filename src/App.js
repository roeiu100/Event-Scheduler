import './App.css';
import { React } from "react";
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import EventDetailes from './components/EventDetailes';
import EventData from './components/EventData';
export const EventListContext=createContext()

function App() {

  const{eventList,setEventList}=EventDetailes()
  const contextValue={eventList,setEventList}
  return (
    <EventListContext.Provider value={contextValue} >

    <div className='nav'>
      <NavLink className='navlink' to="/">Event schoudler </NavLink>
      <NavLink className='navlink' to="/EventList">Event List </NavLink>
      </div>
      <Routes>
        <Route path='/' element={<EventForm/>}></Route>
        <Route path='/EventList' element={<EventList/>}></Route>
        <Route path='/EventDetailes/:events' element={<EventData/>}></Route>
      </Routes>
    
  
    </EventListContext.Provider>

  );
}

export default App;
