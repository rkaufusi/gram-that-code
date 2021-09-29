import React , {useState} from 'react';

const InputArea = () => {
    const [firstColor, setFirstColor] = useState("red");
    const [secondColor, setSecondColor] = useState("blue");
    const [text, setText] = useState([]);

    console.log(text);
    const handleChange = event => {
        setText([event.target.value]);
    }

    return (
        <div>
            <textarea value={text} onChange={handleChange}>
            
            </textarea>
        </div>
    )
}

export default InputArea
