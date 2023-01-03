import { useContext,React } from "react";
import { EventListContext } from "../App";
import "../App.css"
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
function EventData(){
    const {eventList}=useContext(EventListContext) 
    const location=useLocation()
    let list=[];

     list = 
        <tr className="task">
        <td>  {eventList[location.state.id].eventName}</td>
        <td>  {eventList[location.state.id].location}</td>
        <td>  {eventList[location.state.id].time}</td>
        <td> {eventList[location.state.id].description}</td> 
        </tr>
          ;
          const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm(
          {defaultValues:{
            eventName:eventList[location.state.id].eventName,
            location:eventList[location.state.id].location,
            time:eventList[location.state.id].time,
            description:eventList[location.state.id].description
          }}
          );
          const onSubmit = (data) => {          
          eventList[location.state.id]=data
          };
          return (
            <div className="App">

            <form  onSubmit={handleSubmit(onSubmit)}>
              <div className="signUp-form">
                <div>
                  <div className="column">
                    <h1 className="title">Event edit </h1>
                    <input
                      placeholder="Event name"
                      {...register("eventName", { required: true })}
                    />
                    {errors.eventName && <span>event name is required</span>}
        
                    <input
                      placeholder="location"
                      type="text"
                      {...register("location", { required: true })}
                    />
                    {errors.location && <span>location is required</span>}
        
                    <input
                      placeholder="time"
                      type="date"
                      {...register("time", { required: true })}
                    />
                    {errors.time && <span>time is required</span>}
        
                    <input
                      placeholder="description"
                      type="text"
                      {...register("description", { required: true })}
                    />
                    {errors.description && <span>description is required</span>}   
                    <input type="submit" className="button-sign" value="Edit event" />
                  </div>
                </div>
              </div>
            </form>
          <h1>Detailes of the event</h1>
  <table> 
            <tbody>
            <tr>
                <th>Event name</th>
                <th>location</th>
                <th>time</th>
                <th>description</th>
              </tr>
              {list}
    </tbody>
</table>

        </div>
    )
}
export default EventData