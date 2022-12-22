import React, { useState } from "react";

export default function Form(props) {
  const [textInput, setText] = useState("");

  const changeToUp = () => {
    let newtext = textInput.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase", "success");
  };
  const changeToLo = () => {
    let lowerText = textInput.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted to lowercase", "success");
  };
  const changeToCapitalize = () => {
    let newText = textInput
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Text Capitalized", "success");
  };
  const changeFunction = (event) => {
    setText(event.target.value);
  };
  const clearText = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const copyToClipboard = (event) => {
    navigator.clipboard.writeText(textInput);
    props.showAlert("Text topied to clipboard", "success");
  };
  const reverseString = () => {
    let newText = textInput.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text reversed", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = textInput;
    window.speechSynthesis.speak(msg);
  };
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([textInput], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = new Date();
    element.click();
  };

  const removeExtraSpace = () => {
    let newText = textInput.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("All extra space removed", "success");
  };

  return (
    <div className="container-fluid">
      <div className="container py-3">
        <div className="inline flex py-4">
          <span className="h3">{props.title}</span>
        </div>
        <textarea
          className="form-control"
          value={textInput}
          onChange={changeFunction}
          id="formInput"
          rows="6"
        ></textarea>
        <div className="my-2">
          <button className="btn btn-primary me-2" onClick={changeToUp}>
            Uppercase
          </button>
          <button className="btn btn-primary me-2" onClick={changeToLo}>
            Lowercase
          </button>
          <button className="btn btn-primary me-2" onClick={changeToCapitalize}>
            Capital
          </button>
          <button className="btn btn-primary me-2" onClick={reverseString}>
            Reverse
          </button>
          <button className="btn btn-primary me-2" onClick={removeExtraSpace}>
            Remove Extra Space
          </button>
          <button className="btn btn-primary me-2" onClick={copyToClipboard}>
            Copy to Clipboard
          </button>
          <button className="btn btn-primary me-2" onClick={clearText}>
            Clear
          </button>
          <button className="btn btn-primary me-2" onClick={speak}>
            Speak
          </button>
          <button className="btn btn-primary me-2" onClick={downloadTxtFile}>
            Download Text
          </button>
        </div>

        <h2>Text Summary:</h2>
        <p className="lead">
          Word Count: {textInput.trim().split(/\s+/).length}, Letter Count:{""}
          {textInput.length}
        </p>
        <p className="lead">
          {Math.round(textInput.trim().split(/\s+/).length / 225)} Minutes Read
        </p>
        <h4>Preview: </h4>
        <p>{textInput}</p>
      </div>
    </div>
  );
}
