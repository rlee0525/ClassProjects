import { KEY_PRESSED, KEY_RELEASED } from '../actions/notes_actions';
import { NOTE_NAMES } from '../util/tones';

const notesReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  const validKey = NOTE_NAMES.includes(action.key);
  const idx = oldState.indexOf(action.key);

  switch(action.type) {
    case KEY_PRESSED:
      if (validKey && idx === -1) {
        return [
          ...oldState,
          action.key
        ];
      }
      return oldState;
    case KEY_RELEASED:
      if (idx !== -1) {
        return [
          ...oldState.slice(0, idx),
          ...oldState.slice(idx + 1)
        ];
      }
      return oldState;
    default:
      return oldState;
  }
};

export default notesReducer;
