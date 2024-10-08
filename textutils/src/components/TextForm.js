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
    const handleLowClick = () =>{
        // console.log("upper case button clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const countVowel = () =>{
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let count = 0;
        for(let char of text.toLowerCase()){
            if(vowels.includes(char)){
                count++;
            }
        }
        setCount(count);
        // return count;
    }


    const [text, setText] = useState('Dummy text, can be remmoved. Just for reference');
    const [count, setCount] = useState(0);
    // setText("kjngdkgjjdsngds");
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="myBox" className='form-label'>Example text are</label> */}
                    <textarea className='form-control' value={text} id='myBox' rows="8" onChange={handleOnChange}></textarea>
                </div>
                    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
                    <button className='btn btn-primary mx-2' onClick={countVowel}>Vowel counter</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>        
                <p>{text.length} characters, {text.split(" ").length} words.</p>
                <p>{0.008 * text.split(" ").length} time will be required to read {text.split(" ").length} words.</p>
                <p>Total vowels are, {count}</p>
                <hr />
                <h2>preview text</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
