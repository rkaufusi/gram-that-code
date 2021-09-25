import React, {useState} from 'react'

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
              {fontArray.map((val) => {
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


