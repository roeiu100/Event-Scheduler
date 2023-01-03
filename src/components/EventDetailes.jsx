import { useState } from "react";
export default function EventDetailes(){
    const [eventList,setEventList]=useState("")

    return{
        eventList,setEventList
    }
}