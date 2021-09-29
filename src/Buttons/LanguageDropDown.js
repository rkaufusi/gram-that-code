import React, {useState} from 'react'

const LanguageDropDown = () => {

  /*                      <li>
<button onClick={() => setLanguage(val.name)}>
  {val.name}
</button>
</li> */
    const [language, setLanguage] = useState();

    const languageArray = [
        {name: 'Javascript'},
        {name: 'Typescript'}
    ];

    console.log(language);

        return (
            <>
                    <select>
                      <option>Javascript</option>
                      <option>Java</option>
                      <option>Typescript</option>
                      <option>Python</option>
                    </select>
            </>
        )
    };

export default LanguageDropDown


