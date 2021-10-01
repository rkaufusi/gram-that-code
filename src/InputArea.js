import React , {useState} from 'react';


const InputArea = (props) => {
    const [firstColor, setFirstColor] = useState("red");
    const [secondColor, setSecondColor] = useState("blue");
    const [text, setText] = useState([]);
    const [font, setFont] = useState(props.value);
    const [temp, setTemp] = useState(false);
    //setFont(userFont)




    const handleChange = event => {
        setText([event.target.value]);
        console.log('handle change font'+font);
        event.preventDefault();
        console.log(text)
    }

    /*<div className={`box ${isWarning === true && "warning"}`} */
    return (
        <div>
            <textarea className={font === 'Monaco' ? 'user-text-area menlo' : 'user-text-area'} value={text} onChange={handleChange}>
            
            </textarea>

        </div>
    )
}
/*  <p className={userFont === 'Menlo' ? 'menlo' : 'times'}>*/ 

export default InputArea
