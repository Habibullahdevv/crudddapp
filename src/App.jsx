import { useState } from 'react'
import ToDolist from './Components/ToDoList'
import Colorpicker from './Components/Colorpicker'
import Arrayofobjects from './Components/Arrayofobjects'
import HookuseState from './Components/Arrayofobjects'
import Counter from './Components/HookuseState'
import UpdaterObject from './Components/UpdateObjects'
import OnChange from './Components/Onchange'
import Student from './Components/Props'
import Accordian from './Components/Accordian'
import Qrcodegenerator from './Components/Qrcodegenerator'
import StartRating from './Components/Star-ratings/Star-rating'
function App() {

  return (
    <>
<ToDolist/>
<Colorpicker/>
 <Arrayofobjects/>
 <Counter/>

    <UpdaterObject/>
    <OnChange/>
    
    
    <Accordian/>

    <Qrcodegenerator/>
    <StartRating/>
    </>
  )
}

export default App
