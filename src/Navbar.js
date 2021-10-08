import React, {useState, useEffect} from 'react'

import InputArea from './InputArea';

const Navbar = () => {
    const [font, setFont] = useState('');
    const [language, setLanguage] = useState('');
    const [color, setColor] = useState('');
    const [download, setDownload] = useState(false);
    const [downloadString, setDownloadString] = useState('Download');

    const changeColor = (event) => {
      setColor(event.target.value);
    }

    const changeFont = (event) => {
      setFont(event.target.value);
    }

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

    const SelectedOption = () => {
      if(!download) {
        return (                
          <> 
            <option selected='selected'>Download</option>
            <option>PNG</option>
          </>
          )
        } else {
          return (
            <>
            <option selected='selected'>PNG</option>
            <option>Download</option>
            </>
          )

        }
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
                <select onChange={changeDownload} value={'here'}>
                  <SelectedOption/>
                </select>
              </li>
            </ul>
          </nav>
        
            <InputArea values={font} colors={color} downloadUsed={download}/>   
          
        </div>
    )
}

export default Navbar
