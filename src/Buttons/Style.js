import React , {useState} from 'react'

const Style = () => {
    const [open, setOpen] = useState(false);
    const [font, setFont] = useState('Monaco');
    const onClick = () => {
        setOpen(!open);
    }
    
    return (
        <div className='line'>
          <button className=' dropdown-content' onClick={onClick}>
            Style
          </button>
        </div>
    )
}

export default Style
