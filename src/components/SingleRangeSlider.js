import { Slider } from "@mui/material";
import { useState } from "react";

function SingleRangeSlider({ value }) {

  const [valueOf, setValueOf] = useState(value)

  const change = (e, val) => {
    setValueOf(valueOf)
    console.log('valueueue =>', val)
  }
  return (<>
    <Slider
      size="small"
      defaultValue={value}
      aria-label="Small"
      valueLabelDisplay="auto"
      onChange={change}
      sx={{
        width: '100%',
        padding: '1%',
        height: '.4vw',
        borderRadius: '1px',
        color: '#2A83EC',
        '& .MuiSlider-thumb': {
          borderRadius: '50%',
          padding: '2%',
          color: 'white',
          boxShadow: '0 0px 4px 0 rgba(0, 0, 0, 0.25)'
        },
        '& .MuiSlider-rail': {
          color: 'grey'
        }
      }}
      data-value={valueOf}
    />
  </>)
}

export default SingleRangeSlider