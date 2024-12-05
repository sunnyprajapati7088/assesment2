import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const sampleProps = {
     name: "Explorin Academy",
     count: 4,
     images: [
       {
         url: "https://th.bing.com/th/id/OIP.1pvWgC0y_SoEdtovoTEckgHaHa?w=185&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7",
         ready: true,
         error: false,
       },

       { url: "image3.jpg", ready: true, error: false },
       {
         url: "https://th.bing.com/th/id/OIP.5L3doQJIZR-zDn9vBDkdfwHaFj?rs=1&pid=ImgDetMain",
         ready: true,
         error: false,
       },
     ],
   };

  return (
   <div>
   
    hello</div>
  )
}

export default App
