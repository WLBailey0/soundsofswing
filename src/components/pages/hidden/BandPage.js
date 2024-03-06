import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { auth } from "../../../config/fbconfig";
import { useNavigate } from "react-router-dom";

export default function BandPage(){
    const navigate = useNavigate();

    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                const uid = user.uid
            } else {
                navigate('/')
            }
        })
    })

    return (
        <div>
            <h1>Band Secret Page</h1>
        </div>
    )
}