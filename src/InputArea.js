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
  console.log('heightVal ' + heightVal, 'heightArr ' + heightArr);

const myStyle = {
  marginTop: '5%',
  width: '400px',
  height: heightArr,
  backgroundColor: '#404f49',
  opacity: '90%'
};

console.log('myStyle.height ' + myStyle.height)



let numLinesVal = 8;
let numLines = text.join('').split(/\r\n|\r|\n/).length;

if(numLines >= numLinesVal) {
  console.log('numlines > 8');
  let oldHeight = parseInt(myStyle.height.slice(0, -2));
  let newHeight = oldHeight + 15;
  //heightVal = newheight;
  myStyle.height = newHeight + 'px';
  numLinesVal++;
}
  console.log('numLines ' + text.join('').split(/\r\n|\r|\n/).length);


// className={'background ' + props.value.replace(/\s/g, '-')}

    return (
           <textarea id='text-area' style={myStyle} className={'background ' + props.value.replace(/\s/g, '-')} value={text} onChange={handleChange} ref={listRef}>
            
            </textarea>


 
    )
}

export default InputArea
