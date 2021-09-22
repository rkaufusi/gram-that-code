import React, {useState} from 'react'
import ColorArray from '../ColorArray.js';
//import Dropdown from 'react-dropdown';
//import { Dropdown } from 'semantic-ui-react'

const Color = () => {
  let value = 0;
  const [firstColor, setFirstColor] = useState();
  const [secondColor, setSecondColor] = useState();
  const [userColor, setUserColor] = useState([]);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(value);
 

  const onClick = () => {
    setOpen(!open);    
  }

  const selectUserColor = (color) => {
    
    if(userColor.length < 2){
      setUserColor([...userColor , color]);
    }
    else {
      let temp = userColor[1];
      setUserColor([temp, color]);
    }
    
  }

    return (
      <div>
      <div className='line'>
      <button className='dropdown-content' onClick={onClick}>
        Color
      </button>
      </div>

      {open && 
        <div>
          <button className='dropdown dropdown-content' onClick={() => selectUserColor('Red')}>
            Red
           </button>
          <button className='dropdown dropdown-content' onClick={() => selectUserColor('Blue')}>
             Blue
          </button>

        </div>      
     }
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
