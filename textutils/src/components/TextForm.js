import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("upper case button clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleOnChange = (event) =>{
        console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text here');
    // setText("kjngdkgjjdsngds");
    return (
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="myBox" className='form-label'>Example text are</label> */}
                    <textarea className='form-control' value={text} id='myBox' rows="8" onChange={handleOnChange}></textarea>
                </div>
                    <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
            </div>
    )
}
