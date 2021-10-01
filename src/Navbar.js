import React, {useState} from 'react'
import BackgroundDropDown from './Buttons/BackgroundDropDown';
import FontDropDown from './Buttons/FontDropDown';
import LanguageDropDown from './Buttons/LanguageDropDown';
import InputArea from './InputArea';

const Navbar = () => {
    const [dropdown, setDropDown] = useState(false);
    const [fontDropDown, setFontDropDown] = useState(false);
    const [languageDropDown, setLanguageDropDown] = useState(false);
    const [downloadDropDown, setDownloadDropDown] = useState(false);
    const [font, setFont] = useState('');
    const [language, setLanguage] = useState('');

    const onMouseEnter = (name) => {
        if(name === 'background') setDropDown(true);
        if(name === 'font') setFontDropDown(true);
        if(name === 'language') setLanguageDropDown(true);
        if(name === 'download') setDownloadDropDown(true);
    }

    const changeFont = (event) => {
      setFont(event.target.value);
    }

    const changeLanguage = (event) => {
      setLanguage(event.target.value);
    }

    const onMouseLeave = () => {
        setDropDown(false);
        setFontDropDown(false);
        setLanguageDropDown(false);
        setDownloadDropDown(false);
    }

    return (
        <div>
          <nav>
          <li onMouseEnter={() => onMouseEnter('background')} onMouseLeave={() => onMouseLeave()}>
            <button>
              Background
            </button>
            {dropdown && <BackgroundDropDown/>}
          </li>
          <select onChange={changeFont}>
          <option>Font</option>
            <option>Monaco</option>
            <option>Menlo</option>
            <option>Consolas</option>
            <option>Droid Sans Mono</option>
          </select>
          <select onChange={changeLanguage}>
            <option>Language</option>
            <option>Javascript</option>
            <option>Java</option>
            <option>Typescript</option>
            <option>Python</option>
          </select>
     
          <li onMouseEnter={() => onMouseEnter('download')} onMouseLeave={() => onMouseLeave()}>
            <button>
              Download
            </button>
            {downloadDropDown && /*dropdown needed?*/ console.log('download')}
          </li>

          </nav>
          <div className='color'>
            <InputArea value='Monaco'/>   
          </div>
        </div>
    )
}

export default Navbar
