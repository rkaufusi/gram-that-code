import React from 'react'

const SelectedOption = ({value}) => {
        if(!value) {
          return (                
            <React.Fragment> 
              <option selected='selected'>Download</option>
              <option>PNG</option>
            </React.Fragment>
            )
          } else {
            return (
              <React.Fragment>
                <option selected='selected'>PNG</option>
                <option>Download</option>
              </React.Fragment>
            )
          }
          
    return (
        <SelectedOption />
    )
}

export default SelectedOption
