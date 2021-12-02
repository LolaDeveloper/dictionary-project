import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <FontAwesomeIcon icon="fa-solid fa-ear-listen" />
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          {" "}
          Listen
        </a>

        <span className="text"> /{props.phonetic.text}/</span>
      </div>
    );
  } else {
    return (
      <div className="Phonetic">
        <span className="text"> /{props.phonetic.text}/</span>
      </div>
    );
  }
}
