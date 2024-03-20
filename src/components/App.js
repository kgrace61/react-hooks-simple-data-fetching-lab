import React, { useState, useEffect } from 'react'

const App = () => {
    const [image, setImage] = useState(null)
    const [isLoaded, setIsLoaded] = useState(true)
   
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then (res => res.json())
        .then(data => {
            setImage(data.message)
            setIsLoaded(false)

        })
    }, [])

     if (isLoaded) {
        return <p>Loading...</p>
     }

  return (
    <div>
        <img src={image} alt="A Random Dog" />
    </div>
  )
}

export default App