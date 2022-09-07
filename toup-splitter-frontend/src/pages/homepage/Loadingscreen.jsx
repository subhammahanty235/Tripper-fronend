import React, { useState } from 'react'
import { useEffect } from 'react'
import Loading from '../../media/H0bB.gif'
import './loadingscreen.css'
function Loadingscreen() {
    const[quote , setQuote] = useState("")
    const generate = async()=>{
        let data = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
        data = await data.json();
        data = data.quotes
        let random = Math.floor(Math.random() * data.length)

       let cquote = data[random]
       setQuote(cquote.quote)
        

    } 
    useEffect(()=>{
        generate()
    },[])
  return (
    <div className="loadingscreen">
          <img src={Loading} alt="" srcset="" />
         <h5 className='headertextload'>{quote}</h5>
    </div>
   
  )
}

export default Loadingscreen