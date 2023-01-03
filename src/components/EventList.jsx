import { useContext,React } from "react";
import { EventListContext } from "../App";
import { NavLink } from 'react-router-dom';
import "../App.css"

export default function EventList(){
    const {eventList,setEventList}=useContext(EventListContext) 
    function dodelete(index) {
      setEventList(eventList.filter((a, listIndex) => index !== listIndex));
    }
    let list=[];
if(eventList){
     list = eventList.map((events, index) => (
        <tr key={index} className="task">
        <td>  {events.eventName}</td>
        <td>  {events.location}</td>
        <td>  {events.time}</td>
        <td> {events.description}</td>
        <td>
          <button onClick={()=>dodelete(index)} >Delete</button>
        <button> <NavLink  to={`/EventDetailes/${events.eventName}`} state={{id:index}}>Detailes</NavLink>
</button>  
</td> 
        </tr>
          ));
     }
    return(
        <div className="App">
          <h1>Your events</h1>
    {  eventList&&  <table> 
            <tbody>
              <tr>
                <th>Event name</th>
                <th>location</th>
                <th>time</th>
                <th>description</th>
                <th>actions</th>
              </tr>
              {list}
    </tbody>
</table>}
        </div>
    )
}
