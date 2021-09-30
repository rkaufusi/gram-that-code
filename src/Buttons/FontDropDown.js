import React, {useState} from 'react'

const FontDropDown = () => {
    const [font, setFont] = useState();


    console.log(font);

    return (
      <>
              <select>
                <option>Monaco</option>
                <option>Menlo</option>
                <option>Consolas</option>
                <option>Droid Sans Mono</option>
              </select>
      </>
  )
};




export default FontDropDown


