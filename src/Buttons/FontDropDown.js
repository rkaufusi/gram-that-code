import React, {useState} from 'react'
import fonts from '../fonts.js'

const FontDropDown = () => {
    const [font, setFont] = useState();

    const fontArray = [
        {name: 'Times New Roman'},
        {name: 'Arial'}
    ];

    console.log(font);

        return (
            <>
              <ul>
              {fonts.map((val) => {
                  return (
                      <li>
                        <button onClick={() => setFont(val.name)}>
                          {val.name}
                        </button>
                      </li>
                  )
              })}
              </ul>    
            </>
        )
    };



export default FontDropDown


