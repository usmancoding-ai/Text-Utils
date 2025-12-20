import { useState } from 'react';

export default function TextForm(props) {
    const handleClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to uppercase", "success")

    }

    const handloClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to lowercase", "success")
    }

    const handloClearText = () => {
        setText("");
        props.showalert("Text cleared", "success")
    }

    const handleSpace = () => {
        let newText = text.split(/\s+/).join(" ");
        setText(newText);
        props.showalert("Extra spaces removed", "success")
    };

    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
        props.showalert("Copy to clipboard", "success")
    }

    const handleOnchange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2 className='my-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea onChange={handleOnchange} className="form-control" id="mybox" value={text} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }} rows="8"></textarea>
                    <button className="btn btn-primary mt-3 me-3" onClick={handleClick}> Convert to uppercase</button>
                    <button className="btn btn-primary mt-3 me-3" onClick={handloClick}> Convert to lowercase</button>
                    <button className="btn btn-primary  mt-3 me-3" onClick={handloClearText}> Clear Text</button>
                    <button className="btn btn-primary  mt-3 me-3" onClick={handleCopy}> Copy Text</button>
                    <button className="btn btn-primary  mt-3 me-3" onClick={handleSpace}> Remove Extra Spaces</button>
                </div>
                <div>
                    <h5>
                        {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.replace(/\s/g, "").length} characters

                    </h5>
                    <h5>{0.008 * text.split(" ").length} Minuts and read</h5>
                    <h3>Preview</h3>
                    <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
                </div>
            </div>
        </>
    )
}
