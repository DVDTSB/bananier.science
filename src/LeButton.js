import { useState } from 'react';
function LeButton({color})
{
    const [count, setCount] = useState(0);
    const [text, setText] = useState("l' button de " + color);
    if(color === undefined)
        color = "black"
    const texts = [
        "i have been clicked ew", 
        "i have been clicked again like bruh", 
        "please stop clicking me", 
        "if you dont stop, i swear to god, i will eat your children", 
        "GOD DAMN YOU HAVE NO CHILL",
        "stop pls"
    ];
    return(
        <button 
        onClick={() => {
            setCount(count+1);
            if (count===texts.length)
            {
                window.open("about:blank", "_self");
                window.close();
            }
            setText(texts[count])
        }}
        style={{backgroundColor: color}}
        className="btn"
        >
        {text}
        </button>
    )
}
export default LeButton;
