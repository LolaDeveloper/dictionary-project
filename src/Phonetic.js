import React from "react";
import Results from "./Results";
import ReactAudioPlayer from "react-audio-player";

import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <ReactAudioPlayer src={props.phonetic.audio} Volume={0.2} controls />

        <p className="text mb-0"> /{props.phonetic.text}/</p>
      </div>
    );
  } else {
    return (
      <div className="Phonetic">
        <p className="text mb-0"> /{props.phonetic.text}/</p>
      </div>
    );
  }
}
