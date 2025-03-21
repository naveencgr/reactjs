import React, { useEffect } from "react";
import { useState } from "react";

function Slides({ slides }) {

  console.log(slides)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [resetDisabled, setResetDisabled] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(null)


  useEffect(() => {
    setCurrentSlide(slides[selectedIndex])
    
    if(selectedIndex === 0) {
        setPrevDisabled(true)
        setResetDisabled(true)
    } else {
        setPrevDisabled(false)
        setResetDisabled(false)
    }

    if(selectedIndex === slides.length - 1) {
        setNextDisabled(true)
    } else {
        setNextDisabled(false)
    }


  } , [selectedIndex])

  const updatedSelectedIndex = (increment) => {
    if (increment) {
      setSelectedIndex((selectedIndex) => {
        var index =
          selectedIndex + 1 >= slides.length - 1
            ? slides.length - 1
            : selectedIndex + 1;
        return index;
      });
    } else {
      setSelectedIndex((selectedIndex) => {
        var index = selectedIndex - 1 <= 0 ? 0 : selectedIndex - 1;
        return index;
      });
    }
  };

  const reset_counter = () => {
    setSelectedIndex(0)
    setResetDisabled(true)
    setPrevDisabled(true)
    setNextDisabled(false)
  };
  
  return (
    <>
      <div id="navigation" className="text-center">
        <button
          disabled={resetDisabled}
          data-testid="button-restart"
          className="small outlined"
          onClick={() => reset_counter()}
        >
          Restart
        </button>
        <button
          disabled={prevDisabled}
          data-testid="button-prev"
          className="small"
          onClick={() => updatedSelectedIndex(false)}
        >
          Prev
        </button>
        <button
          disabled={nextDisabled}
          data-testid="button-next"
          className="small"
          onClick={() => updatedSelectedIndex(true)}
        >
          Next
        </button>
      </div>
      {
        currentSlide != null && 
        <div id="slide" className="card text-center">
          <h1 data-testid="title">{currentSlide.title}</h1>
          <p data-testid="text">{currentSlide.text}</p>
        </div>
        
      }
    </>
  );
}

export default Slides;
