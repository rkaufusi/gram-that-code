import React, {useState, useEffect} from 'react'
import BackgroundDropDown from './Buttons/BackgroundDropDown';
import FontDropDown from './Buttons/FontDropDown';
import LanguageDropDown from './Buttons/LanguageDropDown';
import InputArea from './InputArea';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [fontDropDown, setFontDropDown] = useState(false);
    const [languageDropDown, setLanguageDropDown] = useState(false);
    const [downloadDropDown, setDownloadDropDown] = useState(false);
    const [font, setFont] = useState('');
    const [language, setLanguage] = useState('');
    const [color, setColor] = useState('');
    const [download, setDownload] = useState('');

    const changeColor = (event) => {
      setColor(event.target.value);
    }

    const changeFont = (event) => {
      setFont(event.target.value);
    }

    const changeLanguage = (event) => {
      setLanguage(event.target.value);
    }

    const changeDownload = (event) => {
      setDownload(event.target.value);
    }




    return (
        <div>
          <nav>
            <ul>
              <li className='nav'>
                <select onChange={changeColor}>
                  <option>Color</option>
                  <option>Red-Blue</option>
                  <option>Green-Yellow</option>
                  <option>Orange-Purple</option>
                  <option>Blue-Green</option>
                </select>
              </li>
              <li className='nav'>
                <select onChange={changeFont}>
                  <option>Font</option>
                  <option>Monaco</option>
                  <option>Menlo</option>
                  <option>Arial</option>
                  <option>Lucida Console</option>
                </select>
              </li>
              <li className='nav'>
                <select onChange={changeLanguage}>
                  <option>Language</option>
                  <option>Javascript</option>
                  <option>Java</option>
                  <option>Typescript</option>
                  <option>Python</option>
                </select>
              </li>
              <li className='nav'>
                <select onChange={changeDownload}>
                  <option>Download</option>
                  <option>JPEG</option>
                  <option>Other way</option>
                </select>
              </li>
            </ul>
          </nav>
          <div className={`text-container ${color.toLowerCase()}`}>
            <InputArea value={font}/>   
          </div>
        </div>
    )
}

export default Navbar
