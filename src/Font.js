import React, {useState} from 'react'

const Font = () => {
    const fontChoices = ['Monaco', 'Menlo', 'Consolas', 'Droid Sans Mono', 'Incosolata'];
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

    console.log(open);

    return (
        <div>
          <p>{font}</p>
          <button className='dropdown dropdown-content' onClick={onClick}>
            Font
          </button>
          <ul>
          {open && fontChoices.map((val, i) => {
          return ( 
              <li className='dropdown dropdown-content' >
              <button key={i} className='dropdown dropdown-content' onClick={onItemClickHandler}>
              {val}
              </button>
              </li>
          )
          })}
          </ul>
        </div>
    )
}

export default Font
