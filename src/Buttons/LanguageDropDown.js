import React, {useState} from 'react'

const LanguageDropDown = () => {
    const [language, setLanguage] = useState();

    const languageArray = [
        {name: 'Javascript'},
        {name: 'Typescript'}
    ];

    console.log(language);

        return (
            <>
              <ul>
              {languageArray.map((val) => {
                  return (
                      <li>
                        <button onClick={() => setLanguage(val.name)}>
                          {val.name}
                        </button>
                      </li>
                  )
              })}
              </ul>    
            </>
        )
    };

export default LanguageDropDown
