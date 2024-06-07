import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";
import Docs from "./components/Docs";
import useLocalStorage from "./hooks/useLocalStorage";
import data from "./data/docsData.json";
import markdownInitial from "./data/markdown";

const App = () => {
  const [code, setCode] = useLocalStorage("markdown", markdownInitial);
  const [compiled, setCompiled] = useState(marked.parse(code));
  const [view, setView] = useState("markdown"); // 'markdown', 'preview', 'docs'

  const markdownGuide = data;

  const handleChange = (e) => {
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };

  return (
    <>
      <h1 className="title">MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button
            className={`btn ${view === "markdown" ? "active" : ""}`}
            onClick={() => setView("markdown")}
          >
            MarkDown
          </button>
          <button
            className={`btn ${view === "preview" ? "active" : ""}`}
            onClick={() => setView("preview")}
          >
            Preview
          </button>
          <button
            className={`btn ${view === "docs" ? "active" : ""}`}
            onClick={() => setView("docs")}
          >
            Docs
          </button>
        </div>
        {view === "markdown" && (
          <div className="markdown-tab-container">
            <textarea onChange={handleChange} value={code} />
          </div>
        )}
        {view === "preview" && (
          <div className="preview-tab-container">
            <div dangerouslySetInnerHTML={{ __html: compiled }} />
          </div>
        )}
        {view === "docs" && <Docs markdownGuide={markdownGuide} />}
      </div>
    </>
  );
};

export default App;
