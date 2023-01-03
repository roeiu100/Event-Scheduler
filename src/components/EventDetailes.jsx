import { useState } from "react";
import { useParams } from "react-router-dom";
export default function EventDetailes(){
    const [eventList,setEventList]=useState("")
    const params=useParams()

    return{
        eventList,setEventList
    }
}