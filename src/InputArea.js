import { render } from '@testing-library/react';
import React , {useState, useRef, useEffect, useCallback} from 'react';


const InputArea = ({values, colors}) => {
  const [text, setText] = useState([]);
  const [myHeight, setMyHeight] = useState(200);
  const [numberOfLines, setNumberOfLines] = useState(0);
  const [nextLine, setNextLine] = useState(6);
  const [backgroundheight, setBackgroundheight] = useState(300);

  //console.log('props ' + props.value.replace(/\s/g, '-'))

  const handleChange = event => {
    setText([event.target.value]);
    //console.log('handle change font ' + props.value);
  }

  useEffect(() => {
    let numLines = text.join('').split(/\r\n|\r|\n/).length;
    setNumberOfLines(numLines);
    console.log('number of lines ' + numberOfLines);

  if(numberOfLines === nextLine) {
    console.log('numberOfLines === nextLine' + numberOfLines + ' ' + nextLine);
    setMyHeight(myHeight + 15);
    setBackgroundheight(backgroundheight + 15);
    setNextLine(nextLine + 1);
    
  }
  console.log('next line ' + nextLine)
  }, [text]);

  //console.log('numLines ' + text.join('').split(/\r\n|\r|\n/).length);

    return (
        <>
          <button >Download</button>
            <div id='download'  style={{height: backgroundheight + 'px', transition: 'height .3s'}} className={`text-container ${colors.toLowerCase()}`}>  
  
            <textarea     
            id='text-area' 
            style={{height: myHeight + 'px', transition: 'height .2s'}} 
            className={'background ' + values.replace(/\s/g, '-')}  
            value={text} onChange={handleChange} 
         
            spellcheck='false'>

            </textarea>
            </div>
         
        </>

 
    )
}



export default InputArea
