import React, { useState } from 'react'


export default function Form(props) {
    const handleupclick = () => {
        // console.log("uppercase was clicked" + text)
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase", "Success");
    }

    const handledownclick = () => {
        let newtext = text.toLocaleLowerCase();
        setText(newtext)
        props.showAlert("converted to lowercase", "Success");
    }

    const handleclearclick = () => {
        let newtext = " ";
        setText(newtext)
        props.showAlert("Text cleared", "Success");
    }

    const handlecopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied", "Success");
    }

    const handleExtraspaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces are removed", "Success");
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }


    const [text, setText] = useState(' ');
    return (
        <>

            <div className="container" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control"value={text} onChange={handleOnChange}
                        style={{
                            backgroundColor: props.Mode === 'dark' ? 'grey' : 'white',
                            color: props.Mode === 'dark' ? 'white' : 'black',
                        }}   id="myBox" rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleupclick}> Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handledownclick}>Convert to lowercase  </button>
                <button className="btn btn-primary mx-1" onClick={handleclearclick}> Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraspaces}> Remove Extra Spaces</button>

                <div
                    className="container my-3"style={{
                        color: props.Mode === 'dark' ? 'white' : 'black', // Text summary color change
                    }}
                >
                    <h2>Your text summary</h2>
                    <p>
                        {text.trim() ? text.trim().split(/\s+/).length : 0} words and {text.length} characters
                    </p>
                </div>
            </div>


        </>
    )

}

