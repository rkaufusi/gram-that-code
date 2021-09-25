import React, {useState} from 'react'
import BackgroundDropDown from './Buttons/BackgroundDropDown';
import FontDropDown from './Buttons/FontDropDown';
import LanguageDropDown from './Buttons/LanguageDropDown';

const Navbar = () => {
    //const [click, setClick] = useState(false);
    const [dropdown, setDropDown] = useState(false);
    const [fontDropDown, setFontDropDown] = useState(false);
    const [languageDropDown, setLanguageDropDown] = useState(false);
    const [downloadDropDown, setDownloadDropDown] = useState(false);

    const onMouseEnter = (name) => {
        if(name === 'background') setDropDown(true);
        if(name === 'font') setFontDropDown(true);
        if(name === 'language') setLanguageDropDown(true);
        if(name === 'download') setDownloadDropDown(true);
    }

    const onMouseLeave = () => {
        setDropDown(false);
        setFontDropDown(false);
        setLanguageDropDown(false);
        setDownloadDropDown(false);
    }
    console.log(dropdown)

    return (
        <div>
          <nav>
          <li onMouseEnter={() => onMouseEnter('background')} onMouseLeave={() => onMouseLeave()}>
            <button>
              Background
            </button>
            {dropdown && <BackgroundDropDown/>}
          </li>
          <li onMouseEnter={() => onMouseEnter('font')} onMouseLeave={() => onMouseLeave()}>
            <button>
              Font
            </button>
            {fontDropDown && <FontDropDown/>}
          </li>
          <li onMouseEnter={() => onMouseEnter('language')} onMouseLeave={() => onMouseLeave()}>
            <button>
              Language
          </button>
            {languageDropDown && <LanguageDropDown/>}
          </li>
          <li onMouseEnter={() => onMouseEnter('download')} onMouseLeave={() => onMouseLeave()}>
            <button>
              Download
            </button>
            {downloadDropDown && /*dropdown needed?*/ console.log('download')}
          </li>

          </nav>   
        </div>
    )
}

export default Navbar
