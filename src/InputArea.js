import React , {useState} from 'react';

const InputArea = () => {
    const [firstColor, setFirstColor] = useState("red");
    const [secondColor, setSecondColor] = useState("blue");

    return (
        <div className='work-area'>
            <p>{firstColor + "  " + secondColor}</p>
        </div>
    )
}

export default InputArea
