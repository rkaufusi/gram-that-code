import React, {useState} from 'react'

const BackgroundDropDown = () => {
    const [color, setColor] = useState([]);

    const fontArray = [
        {name: 'Blue'},
        {name: 'Red'}
    ];

    const selectUserColor = (userColor) => {
        if(color.length < 2){
            setColor([...color, userColor]);
        }
        else {
          let temp = color[1];
          setColor([temp, userColor]);
        } 
      }

    console.log(color);

        return (
            <>
              <ul>
              {fontArray.map((val) => {
                  return (
                      <li>
                        <button onClick={() => selectUserColor(val.name)}>
                          {val.name}
                        </button>
                      </li>
                  )
              })}
              </ul>    
            </>
        )
    };

export default BackgroundDropDown
