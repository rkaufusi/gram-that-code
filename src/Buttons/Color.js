import React, {useState} from 'react'
import ColorArray from '../ColorArray.js';
//import Dropdown from 'react-dropdown';
//import { Dropdown } from 'semantic-ui-react'

const Color = () => {
  const [firstColor, setFirstColor] = useState();
  const [secondColor, setSecondColor] = useState();

 //console.log(ColorArray[0]);

  const searchColors = () => {
    ColorArray.map((val) => {
      console.log(val);
    })
  }
  searchColors();

    return (
      <div className='line'>
      <button className=' dropdown-content'>
        Color
      </button>
    </div>
    )
}

export default Color

/*<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>*/ 
