import React, {useState} from 'react'
import Language from './Language';

const Font = () => {
    const fontChoices = ['Monaco'];
    const [font, setFont] = useState('Monaco');
    const [open, setOpen] = useState(false);

    const onClick = () => {
        setOpen(!open);    
    }

    const fontChange = (val) => {
        setFont('Consolas');
        console.log(val)

    }

    const onItemClickHandler = (event) => {
        console.log("test");
        console.log(event.target);
    }

    const dropDown = () => {
        
    }
    function DropDownPortion() {
      return (
        <div>
        <button className='dropdown dropdown-content' onClick={() => setFont('Monaco')}>
          Monaco
         </button>
        <button className='dropdown dropdown-content' onClick={() => setFont('Menlo')}>
           Menlo
        </button>
        <button className='dropdown dropdown-content' onClick={() => setFont('Consolas')}>
           Consolas
        </button>
        <button className='dropdown dropdown-content' onClick={() => setFont('Droid Sans Mono')}>
          Droid Sans Mono
        </button>
      </div>  
      )
    }

    return (
      <div>
        <div className='line'>
          <p>{font}</p>

          <button className='dropdown-content' onClick={onClick}>
            Font
          </button>
          </div>
          {open && <DropDownPortion/>}
     
        </div>
    )
}

export default Font
