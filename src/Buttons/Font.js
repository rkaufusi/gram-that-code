import React, {useState} from 'react'

const Font = () => {
    const fontChoices = ['Monaco'];
    const [font, setFont] = useState('Monaco');
    const [open, setOpen] = useState(false);

    const onClick = () => {
        setOpen(!open);    
    }
//
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

    console.log(open);

    return (
        // these buttons and functionality will be put into other componenets
        <div>
          <p>{font}</p>
          <button className=' dropdown-content' onClick={onClick}>
            Font
          </button>
          <button className=' dropdown-content' >
            Download
          </button>
          <button className=' dropdown-content' >
            Style
          </button>
          <button className=' dropdown-content' >
            Color
          </button>
          {open && fontChoices.map((val, i) => {
            return ( 
               <div>
                 <button key={i} className='dropdown dropdown-content' onClick={() => setFont('Monaco')}>
                   Monaco
                  </button>
                 <button key={i} className='dropdown dropdown-content' onClick={() => setFont('Menlo')}>
                    Menlo
                 </button>
                 <button key={i} className='dropdown dropdown-content' onClick={() => setFont('Consolas')}>
                    Consolas
                 </button>
                 <button key={i} className='dropdown dropdown-content' onClick={() => setFont('Droid Sans Mono')}>
                   Droid Sans Mono
                 </button>
               </div>
                
            )
            })} 


   
        </div>
    )
}

export default Font

/*      
          {open && fontChoices.map((val, i) => {
            return ( 
               <div>
                 <button key={i} className='dropdown dropdown-content' onClick={() => setFont('Monaco')}>
                   Monaco
                  </button>
                 <button key={i} className='dropdown dropdown-content' onClick={() => setFont('Menlo')}>
                    Menlo
                 </button>
                 <button key={i} className='dropdown dropdown-content' onClick={() => setFont('Consolas')}>
                    Consolas
                 </button>
                 <button key={i} className='dropdown dropdown-content' onClick={() => setFont('Droid Sans Mono')}>
                   Droid Sans Mono
                 </button>
               </div>
                
            )
            })} 

*/
