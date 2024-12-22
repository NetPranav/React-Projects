import React, { useState } from "react";

function App() {
  const [text, setText] = useState(""); 

  const handleChange = (event) => {
    setText(event.target.value);  
  };

  const wordCount = text.split(" ").filter(word => word.length > 0).length;
  const charCount = text.length;

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const getTextColor = () => {
    if (wordCount > 50) return "green";
    if (wordCount > 20) return "orange";
    return "red";
  };

  const generateWordCloud = () => {
    const words = text.split(" ").filter(word => word.length > 0);
    const wordFrequency = {};
    words.forEach((word) => {
      wordFrequency[word] = wordFrequency[word] ? wordFrequency[word] + 1 : 1;
    });
    const sortedWords = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);
    return sortedWords.slice(0, 5).map(([word, count]) => (
      <span key={word} className="badge bg-primary mx-1">{word}</span>
    ));
  };

  const progressPercentage = (charCount / 80) * 100;

  return (
    <div className="container mt-5">

      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          value={text}  
          onChange={handleChange}  
        />
        <label>Comments</label>
      </div>

      <button className="btn btn-primary" onClick={handleUppercase}>
        Convert to Uppercase
      </button>
      <button className="btn btn-secondary ml-2" onClick={handleLowercase}>
        Convert to Lowercase
      </button>

      <div className="container my-3">
        <h2>Summary</h2>
        <p>Total words: {wordCount}</p>
        <p>Total characters: {charCount}</p>
      </div>

      <div className="my-3">
        <h3>Preview</h3>
        <p style={{ color: getTextColor() }}>
          {text ? text : "No text entered yet."}
        </p>
      </div>

      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progressPercentage}%` }}
          aria-valuenow={progressPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <div className="my-3">
        <h4>Word Cloud (most common words)</h4>
        <div>{generateWordCloud()}</div>
      </div>

      <div className="card mt-5">
        <div className="card-header">
          Final Preview
        </div>
        <div className="card-body">
          <p>{text ? text : "No text entered yet."}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
