import React from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic mt-0 mb-0">
        <ReactAudioPlayer src={props.phonetic.audio} Volume={0.2} controls />
      </div>
    );
  } else {
    return (
      <div className="Phonetic">
        <p className="text mb-0">
          {" "}
          Alternative Pronunciation : /{props.phonetic.text}/
        </p>
      </div>
    );
  }
}
