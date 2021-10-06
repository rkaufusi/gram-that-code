import { render } from '@testing-library/react';
import React , {useState, useRef, useEffect} from 'react';


const InputArea = (props) => {
    const [firstColor, setFirstColor] = useState("red");
    const [secondColor, setSecondColor] = useState("blue");
    const [text, setText] = useState([]);
    
    const listRef = useRef();

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [change, setChange] = useState(0);

    console.log(listRef.current)
    console.log(width, height);

   console.log('props ' + props.value.replace(/\s/g, '-'))

    const handleChange = event => {
        setText([event.target.value]);
        console.log('handle change font ' + props.value);

    }



/*
  if ('ResizeObserver' in window) {
    const callback = (entries) => {
      console.log('entries ' + entries);
      return entries; 
    };


    const observer = new ResizeObserver(callback);
    
  
    //const target = document.querySelector('text-area');
    const target = document.getElementById('text-area');
    observer.observe(target);
  } */
  let heightVal = 200;
  let heightArr = heightVal + 'px';
  let count = 0;
  console.log('heightVal ' + heightVal, 'heightArr ' + heightArr);
/*
const myStyle = {
  marginTop: '5%',
  width: '400px',
  height: heightArr,
  backgroundColor: '#404f49',
  opacity: '90%'
};*/
const [myHeight, setMyHeight] = useState(200);
const [numberOfLines, setNumberOfLines] = useState(0);
const [nextLine, setNextLine] = useState(6);

/*
let numLines = text.join('').split(/\r\n|\r|\n/).length;
setNumberOfLines(numLines);
console.log('number of lines ' + numberOfLines); */

useEffect(() => {
  let numLines = text.join('').split(/\r\n|\r|\n/).length;
  setNumberOfLines(numLines);
  console.log('number of lines ' + numberOfLines);

  if(numberOfLines === nextLine) {
    console.log('numberOfLines === nextLine' + numberOfLines + ' ' + nextLine);
    setMyHeight(myHeight + 15);
    setNextLine(nextLine + 1);
    
  }
  console.log('next line ' + nextLine)
}, [text]);

  //console.log('numLines ' + text.join('').split(/\r\n|\r|\n/).length);


// className={'background ' + props.value.replace(/\s/g, '-')}

    return (
  
           <textarea id='text-area' style={{height: myHeight + 'px'}} className={'background ' + props.value.replace(/\s/g, '-')} value={text} onChange={handleChange} ref={listRef}>
            
            </textarea>


 
    )
}

export default InputArea
