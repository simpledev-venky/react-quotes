import React, { useEffect, useRef, useState } from 'react'

const Quotes = () => {
 const [quoteImg,setQuoteImg] = useState("")
 const [quote,setQuote] = useState("")

const URL = 'https://pixabay.com/api/?key=28139740-af03134a6ae696ac3dda6668f&q=nature+mountains&per_page=100&image_type=photo&pretty=true'

const getQuoteImg = async(u)=>{
    const res = await fetch(u)
    const data = await res.json()
    console.log(data.hits)
    setQuoteImg(data.hits)
 }

 const getQuote = async()=>{
const res = await fetch("https://type.fit/api/quotes")
    const data = await res.json()
    setQuote(data)
 }

useEffect(()=>{
getQuoteImg(URL)
getQuote()
},[])

const genRandomNum = (n)=>{
//gen ran num between 0 to 100
const num = Math.floor(Math.random()*n)
return num
}

const container =  useRef()
// console.log(qimg.current);

const changeSrc = ()=>{
    if(container.current){
container.current.style.backgroundImage = 
`url(${quoteImg[genRandomNum(100)].webformatURL})`
container.current.innerHTML = quote[genRandomNum(1500)].text
    }
}



  return (
    <>
    <header>Wandel Quotes</header>
    {
    quoteImg && quote &&
        (<div className='img-container' ref={container}>
          {quote[0].text}
          </div>)
    }
    
<button  type="button" onClick={changeSrc}>Get Quote</button>
    </>
    )
    }
  


export default Quotes