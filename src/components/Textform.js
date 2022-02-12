import React, { useState } from "react"; //usestate is react hook

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleCapClick = () => {
    let newText = "";
    let arr = text.split(" ");
    arr.forEach((element) => {
      let capWord = element.charAt(0).toUpperCase() + element.slice(1) + " "; //capitalized first letter then added rest of the letters by using slice method.
      newText += capWord; //added all words in string "newText"
    });
    setText(newText.trim());
    props.showAlert("Capitalized all words", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text"; //wrong way to change the state
  // setText("new text"); //correct way to change the state

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(19 27 47 / 0%)",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"} m-2`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"} m-2`}
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"} m-2`}
          onClick={handleCapClick}
        >
          Capitalize all words
        </button>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"} m-2`}
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"} m-2`}
          onClick={handleExtraSpaces}
        >
          Remove Extra spaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your text summary</h1>
        <p className={`text-${props.mode === "light" ? "success" : "light"}`}>
          <b> {text.length === 0 ? 0 : text.trim().split(" ").length} </b> words
          and{" "}
          <b>
            {text.length
              ? text.match(/[a-zA-Z0-9!@#$%^&()*\\_`~.,+/\"'}\-{[=/]/g).length
              : text.length}
          </b>{" "}
          characters
        </p>
        <p className={`text-${props.mode === "light" ? "success" : "light"}`}>
          <b>{0.008 * text.split(" ").length} </b>Minutes read
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox above to preview it here."}
        </p>
      </div>
    </>
  );
}
