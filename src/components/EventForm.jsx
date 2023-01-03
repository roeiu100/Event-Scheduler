import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import "./EventForm.css";
import { EventListContext } from "../App";

function EventForm() {

  const { eventList, setEventList} = useContext(EventListContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setEventList([...eventList, data]);
  };
  return (
    <form className=" form-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <div className="signUp-form">
        <div>
          <div className="column">
            <h1 className="title">Event Scheduler </h1>
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

         

            <input type="submit" className="button-sign" value="Add event" />
          </div>
        </div>
      </div>
    </form>
  );
}
export default EventForm;
