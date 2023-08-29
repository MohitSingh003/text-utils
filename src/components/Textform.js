import React, {useState} from 'react'



export default function Textform(props) {
    
    const handleUpClick = () =>{
        console.log("Uppercase was clicked");
        let upperCase = text.toUpperCase();
        setText(upperCase); 
    }

    const handleOnchange = (event)=>{
        console.log("on change called");
        setText(event.target.value);
    }

    const handleRemSpaces = ()=>{
        let textWithoutSpaces = text.replace(' ','');
        setText(textWithoutSpaces);
    }

    const handleLowClick = ()=>{
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
    }

    
    const [text, setText] = useState('');
  return (
    <div>
      <div className="mb-3">
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.lableText}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text}  onChange={handleOnchange}></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary me-2" onClick={handleRemSpaces}>Remove Spaces</button>
        <button className="btn btn-primary me-2" onClick={handleLowClick}>Convert to Lowercase</button>

    
    </div>
  )
}
