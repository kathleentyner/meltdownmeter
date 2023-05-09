import ReactSlider from "react-slider";
import {useState} from "react"
import "./Slider.css"

const Slider = ({value, setValue}) => {


    return (
      <ReactSlider
        className="horizontal-slider "
        markClassName="example-mark"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue = {0}
        value = {value}
        onChange={setValue}
        min={0}
        max={10}
        valueLabelDisplay="on"
        marks
        renderMark={(props) => {
            if (props.key < value) {
              props.className = "example-mark example-mark-completed";
            } else if (props.key === value) {
              props.className = "example-mark example-mark-active";
            }
            return <span {...props} />;
          }}
      />
    );
  };
  export default Slider;