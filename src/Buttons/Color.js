import React from 'react'
//import Dropdown from 'react-dropdown';
import { Dropdown } from 'semantic-ui-react'

const Color = () => {
  const DropdownExampleSearchSelection = () => (
    <Dropdown
      placeholder='Select Country'
      fluid
      search
      selection
      options={countryOptions}
    />
  )
    return (
        <div >
        <Dropdown
        placeholder='Select Country'
        fluid
        search
        selection
        options={countryOptions}
      />
        </div> 
    )
}

export default Color

/*<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>*/ 
