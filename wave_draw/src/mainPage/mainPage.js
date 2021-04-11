import { useState, useRef, useEffect } from "react";
import React from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect, Line } from "react-konva";

let sineArray = [];

export const MainPage = () => {
  const rectRef = useRef();
  const [blink, setBlink] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [freq, setFreq] = useState(.1);
  const [gain, setGain] = useState(500);

  const freqDown = () => {
    setFreq(freq - .1)
  }

  const freqUp = () => {
    setFreq(freq + .1)
  }

  const gainDown = () => {
    setGain(gain - 10)
  }

  const gainUp = () => {
    setGain(gain + 10)
  }

  const refresh = () => {
    sineArray = []
    setHeight(0)
    setWidth(0)
  }

  useEffect(() => {

    if (!blink) {
      refresh()
      return;
    }

    var anim = new Konva.Animation(frame => {
      setHeight((((Math.sin(frame.time / 100) + 1) / 2) * 100))
    }, rectRef.current.getLayer());

    anim.start();
    return () => {
      anim.stop();
    };
  }, [blink]);

  useEffect(() => {
    if (width <= 1200){
    setWidth(width => width+freq)
    sineArray.push(width)
    sineArray.push(height)
    console.log(sineArray)
    } else {refresh()}
  }, [height])

  return (
    <>
    <div>
      <input
        type="checkbox"
        checked={blink}
        onChange={e => {
          setBlink(e.target.checked);
        }}
      />{" "}
  <div>Frequency: {freq}</div>
  <div>Gain: {gain}</div>
  <button onClick={freqUp}>Freq. Up</button>
  <button onClick={freqDown}>Freq. Down</button>
  <button onClick={gainUp}>Gain Up</button>
  <button onClick={gainDown}>Gain. Down</button>
      Blinking?
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
        <Line
          x={20}
          y={50}
          points={sineArray}
          tension={0}
          stroke="black"
          ref={rectRef}
        />
        </Layer>
      </Stage>
    </div>
    <div>
    </div>
    </>
  );
};

render(<MainPage />, document.getElementById("root"));
