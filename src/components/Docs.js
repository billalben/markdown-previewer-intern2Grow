import React from "react";

const Docs = ({ markdownGuide }) => {
  return (
    <div className="docs-tab-container">
      <h2>Markdown Guide</h2>
      {markdownGuide &&
        markdownGuide.basic_syntax.map((item, index) => (
          <div key={index} className="syntax-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {item.examples.map((example, exampleIndex) => (
              <div key={exampleIndex} className="example">
                <p>{example.markdown}</p>
                <div dangerouslySetInnerHTML={{ __html: example.html }} />
              </div>
            ))}
            {item.additional_examples &&
              item.additional_examples.map(
                (additionalExample, additionalExampleIndex) => (
                  <div
                    key={additionalExampleIndex}
                    className="additional-example"
                  >
                    <h4>{additionalExample.name}</h4>
                    <p>{additionalExample.description}</p>
                    <p>{additionalExample.markdown}</p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: additionalExample.html,
                      }}
                    />
                  </div>
                )
              )}
          </div>
        ))}
    </div>
  );
};

export default Docs;
