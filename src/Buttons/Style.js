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

          {open && 
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
         }
        </div>
    )
}

export default Style
