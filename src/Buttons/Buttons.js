import React, {useState, useEffect, useRef} from 'react'
import Font from './Font.js'
import Language from './Language.js'
import Download from './Download.js'
import Style from './Style.js'
import Color from './Color.js'
import {AiFillCaretDown} from 'react-icons/ai'
//import { Dropdown } from 'semantic-ui-react'


const Buttons = () => {
    return (
      <Navbar>
        <NavItem icon={<AiFillCaretDown>Font</AiFillCaretDown>}/>
      </Navbar>
    )
}

const Navbar = (props) => {
  return (
    <nav>
      <ul>{props.children}</ul>
    </nav>
  )
}

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <a href='#' onClick={()=> setOpen(!open)}>
      {props.icon}
      </a>
    </li>
  )
}

const DropdownMenu = () => {
  const [menu, setMenu] = useState('main');
  const [height, setHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(()=> {
    setHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])
  
  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setHeight(height);
  }

  const DropdownItem = (props) => {
    return (
      <a href="#" onClick={() => props.goToMenu && setMenu(props.goToMenu)}>
      <span >{props.leftIcon}</span>
      {props.children}
      <span>{props.rightIcon}</span>
    </a>
    )
  }

}

export default Buttons

/*
        <div >
          <Font /> 
          <Language />
          <Download />
          <Style />
          <Color />
        </div>
*/