import React, { useState } from 'react'
export default function Textform(props) {
    const changeUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed into uppercase","success");
    }
    const changeLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed into lowercase","success");
    }
    const clearText = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Cleared text","success");

        
    }
    const removeExtraSpaces = () => {
        // Use a regular expression to replace consecutive spaces with a single space
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Extra spaces removed","success");


    }
    const copyText = () => {
        let newText = document.getElementById('exampleFormControlTextarea1')
        newText.select()
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied","success");

    }
    // const copyText=()=>{
    //     const textArea = document.createElement("textarea");
    //     textArea.value = text;
    // }
    const handleOnchange = (event) => {
        setText(event.target.value)
        // color=red;
    }
    const [text, setText] = useState("");
    // setText("Kaise hai app");
    return (
        <div className='container my-2' >
            <div className={`form-group cotainer  `} style={{color:props.mode==='dark'?'white':'black'}}>
                <h1 >{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'#4848a8':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="10" >
                    </textarea>           
                <button disabled={text.length===0} className={`btn  btn-${props.btnclr} my-3 mx-1`} onClick={changeUpper} >UpperCase</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnclr} my-3 mx-1`} onClick={changeLower} >LowerCase</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnclr} my-3 mx-1`} onClick={clearText} >ClearText</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnclr} my-3 mx-1`} onClick={removeExtraSpaces} >SpaceRemove</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnclr} my-3 mx-1`} onClick={copyText} >CopyText</button>
            </div>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h2  ><bold>Preview</bold></h2>
                <p>Words {text.split(" ").filter((element)=>{return element.length!==0}).length} and Characters {text.length}</p>
                <p>{0.008* text.split("").filter((element)=>{return element.length!==0}).length} minutes</p>
                <p>{text.length>0?text:"Please write something for preview..."}</p>
            </div>

        </div>
    )
}