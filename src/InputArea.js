import React , {useState, useEffect} from 'react';


const InputArea = (props) => {
    const [firstColor, setFirstColor] = useState("red");
    const [secondColor, setSecondColor] = useState("blue");
    const [text, setText] = useState([]);
    const [font, setFont] = useState(props.value);
    const [temp, setTemp] = useState(false);
    //setFont(userFont)

   const userFont = () => {
       if(font === 'Menlo'){
           return 'Menlo';
       } else if (font === 'Monaco'){
           return 'Monaco'
       }
   }

   console.log('props ' + props.value)

    const handleChange = event => {
        setText([event.target.value]);
        console.log('handle change font ' + font);
        //event.preventDefault();
        console.log(text);
    }

    /*<div className={`box ${isWarning === true && "warning"}`} 
    {font === 'Monaco' ? `user-text-area ${font}` : 'user-text-area'}
    */
    return (
        <div>
            <textarea className={props.value} value={text} onChange={handleChange}>
            
            </textarea>

        </div>
    )
}
/*  <p className={userFont === 'Menlo' ? 'menlo' : 'times'}>*/ 

export default InputArea
