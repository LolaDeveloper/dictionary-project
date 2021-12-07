import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech}</h3>
      <p className="text mb-0"> {props.text}</p>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition"> {definition.definition}</div>

            <div className="example">
              {" "}
              <Example example={definition.example} />
            </div>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
