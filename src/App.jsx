import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componants/NavBar'
import JobCart from './componants/JobCart'
import { data } from "./componants/data";
import Footer from './componants/Footer'
function App() {

  const [filterjob, setFilter] = useState(data);
  const [check, setCheck] = useState(false);
  useEffect(() => {
      console.log("reload")
  },[filterjob,check])
  return (
    <div className="">
      <NavBar setFilter={setFilter} filterjob={filterjob} check={check} setCheck={setCheck} />
      <JobCart filterjob={filterjob} setFilter={setFilter} />
      <Footer/>
    </div>
  );
}

export default App
