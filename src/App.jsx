import { useEffect, useRef, useState } from "react";
import ToDolist from "./Components/ToDoList";
import Colorpicker from "./Components/Colorpicker";
import Arrayofobjects from "./Components/Arrayofobjects";
import Counter from "./Components/HookuseState";
import Accordian from "./Components/Accordian";
import Qrcodegenerator from "./Components/Qrcodegenerator";
import StartRating from "./Components/Star-ratings/Star-rating";
import LoadMoreData from "./Components/Load-more-data";
import GithubProfileFinder from "./Components/Git-hub-profile-finder";

export default function App() {
  const [scroll, setScroll] = useState(0);

  // Refs for each section
  const toDoListRef = useRef();
  const colorPickerRef = useRef();
  const arrayOfObjectsRef = useRef();
  const counterRef = useRef();
  const accordianRef = useRef();
  const qrCodeRef = useRef();
  const startRatingRef = useRef();
  const loadMoreDataRef = useRef(); // Added for Load More Data section
  const githubProfileRef = useRef();

  // Scroll Progress Tracker
  function handleScroll() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScroll((howMuchScrolled / height) * 100);
  }

  // Scroll to Specific Section
  function scrollToSection(ref) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Sidebar */}
      <div className="sidebar">
        <button
          className="btn-todolist"
          onClick={() => scrollToSection(toDoListRef)}
        >
          To-Do List
        </button>
        <button
          className="btn-colorpicker"
          onClick={() => scrollToSection(colorPickerRef)}
        >
          Color Picker
        </button>
        <button
          className="btn-arrayofobjects"
          onClick={() => scrollToSection(arrayOfObjectsRef)}
        >
          Array of Objects
        </button>
        <button
          className="btn-counter"
          onClick={() => scrollToSection(counterRef)}
        >
          Counter
        </button>
        <button
          className="btn-accordian"
          onClick={() => scrollToSection(accordianRef)}
        >
          Accordian
        </button>
        <button
          className="btn-qrcode"
          onClick={() => scrollToSection(qrCodeRef)}
        >
          QR Code
        </button>
        <button
          className="btn-star-rating"
          onClick={() => scrollToSection(startRatingRef)}
        >
          Star Rating
        </button>
        <button
          className="btn-load-more-data"
          onClick={() => scrollToSection(loadMoreDataRef)}
        >
          Load More Data
        </button>
        <button
          className="btn-github-profile"
          onClick={() => scrollToSection(githubProfileRef)}
        >
          GitHub Finder
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <div className="coverscrollbar">
        <div className="progresstracking" style={{ width: `${scroll}%` }}></div>
      </div>

      {/* Sections */}
      <div ref={toDoListRef} className="section-todolist">
        <ToDolist />
      </div>
      <div ref={colorPickerRef} className="section-colorpicker">
        <Colorpicker />
      </div>
      <div ref={arrayOfObjectsRef} className="section-arrayofobjects">
        <Arrayofobjects />
      </div>
      <div ref={counterRef} className="section-counter">
        <Counter />
      </div>
      <div ref={accordianRef} className="section-accordian">
        <Accordian />
      </div>
      <div ref={qrCodeRef} className="section-qrcode">
        <Qrcodegenerator />
      </div>
      <div ref={startRatingRef} className="section-star-rating">
        <StartRating />
      </div>
      <div ref={loadMoreDataRef} className="section-load-more-data">
        <LoadMoreData />
      </div>
      <div ref={githubProfileRef} className="section-github-profile">
        <GithubProfileFinder />
      </div>
    </>
  );
}
