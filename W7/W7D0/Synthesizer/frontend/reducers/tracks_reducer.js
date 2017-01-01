import { START_RECORDING,
         STOP_RECORDING,
         ADD_NOTES
       } from '../actions/tracks_actions';
import merge from 'lodash/merge';

let currTrackId = 0;

const trackReducer = (state, action) => {
  Object.freeze(state);

  switch(action.type){
    case START_RECORDING:
      return ({
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      });
    case STOP_RECORDING:
      return merge({}, state, {
        roll: [
          ...state.roll,
          { notes: [], timeSlice: action.timeNow - state.timeStart }
        ]
      });
    case ADD_NOTES:
      return merge({}, state, {
        roll: [
          ...state.roll,
          { notes: action.notes, timeSlice: action.timeNow - state.timeStart }
        ]
      });
    default:
      return state;
  }
};

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case START_RECORDING:
      currTrackId++;
      return merge({}, state, {
        [currTrackId]: trackReducer(undefined, action)
      });
    case STOP_RECORDING:
      return merge({}, state, {
        [currTrackId]: trackReducer(state[currTrackId], action)
      });
    case ADD_NOTES:
      return merge({}, state, {
        [currTrackId]: trackReducer(state[currTrackId], action)
      });
    default:
      return state;
  }
};

export default tracksReducer;

// {
//   notes: ['a', 's'],
//   isRecording: false,
//   tracks: {
//     "1": {
//       id: 1,
//       name: 'Track 1',
//       roll:
//       [
//         { notes: [ 'A5' ], timeSlice: 1250191 },
//         { notes: [], timeSlice: 1255000 },
//         { notes: [ 'a', 's' ], timeSlice: 1265180 }
//         { notes: [], timeSlice: 1279511 }
//       ],
//       timeStart: 1470164117527
//     },
//     "2": {
//       id: 2,
//       name: 'Track 2',
//       roll:
//       [
//         { notes: [ 's', 'd', ';' ], timeSlice: 253386 },
//         { notes: [], timeSlice: 265216 }
//       ],
//       timeStart: 1470173676236
//     }
//   }
// }
