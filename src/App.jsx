import { useEffect, useState } from 'react'
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
import LoadMoreData from './Components/Load-more-data'
import GithubProfileFinder from './Components/Git-hub-profile-finder'
function App() {

  const [scroll, setscroll] = useState(0);
  function handleScroll() {
    console.log(document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howmuchscrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const
      height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setscroll((howmuchscrolled / height) * 100)

console.log(setscroll)
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => { window.removeEventListener('scroll', () => { }) }

  }, [])
  return (
    <>
    <div className='coverscrollbar'>
    <div className='progresstracking' style={{width : `${scroll}%`}}>
    </div>
    </div>
      <ToDolist />
      <Colorpicker />
      <Arrayofobjects />
      <Counter />

      <UpdaterObject />
      <OnChange />


      <Accordian />

      <Qrcodegenerator />
      <StartRating />
      <LoadMoreData />
      <GithubProfileFinder/>
    </>
  )
}

export default App
