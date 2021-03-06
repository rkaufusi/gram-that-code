import React, {useState, useEffect} from 'react';
import SelectedOption from './SelectedOption.js';
import InputArea from './InputArea';

const Navbar = () => {
    //const [font, setFont] = useState('');
    const [language, setLanguage] = useState('');
    const [color, setColor] = useState('');
    const [download, setDownload] = useState(false);
    

    const changeColor = (event) => {
      setColor(event.target.value);
    }
/*
    const changeFont = (event) => {
      setFont(event.target.value);
    }*/

    const changeLanguage = (event) => {
      setLanguage(event.target.value);
    }

    const changeDownload = () => {
      setDownload(true);
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        setDownload(false);
      }, 2500);
      return () => clearTimeout(timer);
    }, [download]);

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
              {/* might add change font funtionality later
              <li className='nav'>
                <select onChange={changeFont}>
                  <option>Font</option>
                  <option>Monaco</option>
                  <option>Menlo</option>
                  <option>Arial</option>
                  <option>Lucida Console</option>
                </select>
              </li>
              */}
              <li className='nav'>
                <select onChange={changeLanguage}>
                  <option>Language</option>
                  <option>Javascript</option>
                  <option>Java</option>
                  <option>Typescript</option>
                  <option>Python</option>
                  <option>CSS</option>
                  <option>GO</option>
                  <option>C</option>
                  <option>C##</option>
                  <option>C++</option>
                </select>
              </li>
              <li className='nav'>
                <select onChange={changeDownload} value={'here'}>
                  <SelectedOption value={download}/>
                </select>
              </li>
            </ul>
          </nav>
        
            <InputArea colors={color} downloadUsed={download} language={language}/>   
          
        </div>
    )
}

export default Navbar
