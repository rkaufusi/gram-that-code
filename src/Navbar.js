import React, {useState} from 'react'

const Navbar = () => {
    //const [click, setClick] = useState(false);
    const [dropdown, setDropDown] = useState(false);
    const [fontDropDown, setFontDropDown] = useState(false);
    const [languageDropDown, setLanguageDropDown] = useState(false);
    const [downloadDropDown, setDownloadDropDown] = useState(false);

    const onMouseEnter = (name) => {
        /*if(name === 'background') setDropDown(true);*/
        if(name === 'font') setFontDropDown(true);
        if(name === 'language') setLanguageDropDown(true);
        if(name === 'download') setDownloadDropDown(true);
    }

    const onMouseLeave = () => {
 
        console.log('false');
    }

    return (
        <div>
          <nav>
          <li onMouseEnter={() => onMouseEnter('background')} onMouseLeave={onMouseLeave}>
            <button>
              Background
            </button>
            {dropdown && /*<ColorDropdown/>*/ console.log("BackgroundDropDown")}
          </li>
          <li onMouseEnter={() => onMouseEnter('font')} onMouseLeave={onMouseLeave}>
            <button>
              Font
            </button>
            {fontDropDown && /*<ColorDropdown/>*/ console.log("FontDropDown")}
          </li>
          <li onMouseEnter={() => onMouseEnter('language')} onMouseLeave={onMouseLeave}>
            <button>
              Language
          </button>
            {languageDropDown && /*<ColorDropdown/>*/ console.log("LanguageDropDown")}
          </li>
          <li onMouseEnter={() => onMouseEnter('download')} onMouseLeave={onMouseLeave}>
            <button>
              Download
            </button>
            {downloadDropDown && /*<ColorDropdown/>*/ console.log("DownloadDropDown")}
          </li>

          </nav>   
        </div>
    )
}

export default Navbar
