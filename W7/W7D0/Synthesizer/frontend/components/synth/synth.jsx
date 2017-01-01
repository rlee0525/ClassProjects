import React from 'react';
import { TONES, NOTE_NAMES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(key => new Note(TONES[key]));
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);

    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);

    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes() {
    NOTE_NAMES.forEach((note, idx) => {
      if (this.props.notes.indexOf(note) !== -1) {
        this.notes[idx].start();
      } else {
        this.notes[idx].stop();
      }
    });
  }

  pressed(note) {
    let pressed = this.props.notes.includes(note);
    return pressed;
  }

  render() {
    this.playNotes();
    return (
      <div>
        <h1 className="synth-title">Redux Synthesizer</h1>
        <div className="note-key-list">
          { NOTE_NAMES.map((note, idx) => (
            <NoteKey key={idx} note={note} pressed={this.pressed(note)} />
          ))}
        </div>
      </div>
    );
  }
}

export default Synth;
