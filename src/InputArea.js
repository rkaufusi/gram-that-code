import React , {useState,useEffect} from 'react';


const InputArea = (props) => {
    const [firstColor, setFirstColor] = useState("red");
    const [secondColor, setSecondColor] = useState("blue");
    const [text, setText] = useState([]);

   console.log('props ' + props.value.replace(/\s/g, '-'))

    const handleChange = event => {
        setText([event.target.value]);
        console.log('handle change font ' + props.value);

    }
    const dragged = () => {
        console.log(dragged);
    }

    return (
      
            <textarea className={'background ' + props.value.replace(/\s/g, '-')} value={text} onChange={handleChange} onDrag={dragged}>
            
            </textarea>

 
    )
}

export default InputArea
