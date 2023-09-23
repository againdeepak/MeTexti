// import React, { useState } from 'react'
export default function About(props) {
    // const [btnText, setBtnText] = useState("Dark")
    // const changeBtn = () => {
    //     if (btnText === 'Dark') {
    //         setBtnText("Light");
    //         setstyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //     }
    //     else {
    //         setBtnText("Dark")
    //         setstyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //     }
    // }
    // const [bg, setbg] = useState('Yellow')
    // const bgImage = () => {
    //     if (bg === 'Yellow') {
    //         setbg('White')
    //         setstyle({
    //             color: 'black',
    //             backgroundColor: 'yellow'
    //         })
    //     }
    //     else {
    //         setbg('Yellow')
    //         setstyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //     }
    // }
    // const [style, setstyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    return (

        <div className='container my-3' style={{ backgroundColor: props.mode === 'dark' ? '#4848a8' : 'white', color: props.mode === 'dark' ? 'white' : 'blue' }}>
            {/* <button className='btn btn-primary my-3' onClick={changeBtn}>{btnText}</button>
            <button className='btn btn-primary my-3 mx-3' onClick={bgImage}>{bg}</button> */}
            <div>
                <div class="jumbotron ">
                    <h1 class="display-4">MeTexti</h1>
                    <p class="lead">This is a TextUtiles Application made by ReactJs.</p>
                    <hr class="my-4" />
                    <p>Creating a text manipulation project where you can perform various operations on text, such as counting words, calculating reading time, converting case, removing extra spaces, copying text, and more, can be a valuable exercise for improving your programming skills. Below, I'll outline the steps to create such a project in Python. You can adapt and expand upon these steps as needed.</p>
                    <p>1. <b>User Interface (Optional):</b> You can create a graphical user interface (GUI) using a library like Tkinter or a web-based interface using Flask or Django for a more user-friendly experience. Alternatively, you can create a command-line interface (CLI) for simplicity.</p>
                    <p><b>2. Input Text:</b>
                        Provide a way for users to input text, either by typing it directly or by pasting it from a file.</p>
                    <p>  <b>3. Word Count:</b>

                        Implement a function to count the number of words in the input text. You can split the text into words using whitespace as a delimiter.</p>
                    <p>  <b> 4. Reading Time Calculation:</b>
                        Calculate the estimated time it takes to read the paragraph based on a predefined reading speed. You can assume an average reading speed (e.g., 200-250 words per minute) and use the word count to estimate reading time.</p>

                    <p><b>5. Text Manipulation Functions:</b></p>
                    <ul>
                        <li>Convert text to lowercase or uppercase.</li>
                        <li>Remove extra spaces or perform text cleanup.</li>
                        <li>Copy the text to the clipboard.</li>
                        <li>Show the word count, reading time, and manipulated text in the user interface or command-line output.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
