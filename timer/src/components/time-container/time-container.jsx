import TimeUnit from "../timeunits/time-units";

import "./time-container.css";

const TimeContainer = ({ miliSeconds }) => {
  return (
    <div className="time-container">
      <TimeUnit unit="Hours">
        {Math.floor(miliSeconds / 100 / 60 / 60)}
      </TimeUnit>
      <span>:</span>
      <TimeUnit unit="Minutes">
        {Math.floor((miliSeconds / 100 / 60) % 60)}
      </TimeUnit>
      <span>:</span>
      <TimeUnit unit="Seconds">{Math.floor((miliSeconds / 100) % 60)}</TimeUnit>
      <span>.</span>
      <TimeUnit unit="Mili-Seconds">{miliSeconds % 100}</TimeUnit>
    </div>
  );
};

export default TimeContainer;
