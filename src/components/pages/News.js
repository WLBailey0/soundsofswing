import React from "react";

export default function() {
    const [isClicked, setIsClicked] = React.useState(false)

    function handleEvent(){
        isClicked ? setIsClicked(false) : setIsClicked(true)
    }

    function partial(){
        return (
            <p>We are delighted to let everyone know that after far too long a time with our website being off 
            line, WE ARE BACK! If you are here and the website seems incomplete, that’s because 
            we are still putting all the content together, writing the copy, taking the... </p>
        )
    };

    function full() {
        return (
            <p>

            We are delighted to let everyone know that after far too long a time with our website being off line, WE ARE BACK!
            
            If you are here and the website seems incomplete, that’s because we are still putting all the content together, writing the copy, 
            taking the pictures or converting old paper-based photos to digital so we can get them online, designing the graphics, putting 
            together the response forms and the calendar and all the other components that go into bringing you a great website …
            
            So please bear with us while we work on getting our brand new, sparkling and shiny new website back up online.
            
            As always, if you need to get in touch to comment or ask us any questions, just see our CONTACT US page. We will be delighted to hear from you 
            (unless you’re a marketer trying to sell us something we don’t need or want!).
            </p>
        )
    }

    return (
        <div>
            <img src="https://www.soundsofswing.com/wp-content/uploads/2018/07/Sax-Purple-pxhere.jpg"
            alt="Sounds of Swing - Back Online" width="1080" height="675" />

            <h2 onClick={() => handleEvent()}>Sounds of Swing - Back Online!</h2>
            {isClicked ? full() : partial()}
        </div>
    )
}