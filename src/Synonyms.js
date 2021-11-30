import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <em> Synonyms : </em>
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index}>
                {" "}
                <em> {synonym} </em>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
