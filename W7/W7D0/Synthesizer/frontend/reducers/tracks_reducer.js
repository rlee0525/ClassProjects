import { START_RECORDING,
         STOP_RECORDING,
         ADD_NOTES
       } from '../actions/tracks_actions';
import merge from 'lodash/merge';

let currTrackId = 0;

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case START_RECORDING:
      currTrackId++;
      return merge({}, state, {
        [currTrackId]: {
          id: currTrackId,
          name: `Track ${currTrackId}`,
          roll: [],
          timeStart: action.timeStart
        }
      });
    case STOP_RECORDING:
      return merge({}, state, {
        roll: [
          ...state.roll,
          { notes: [], timeSlice: action.timeNow - state[currTrackId].timeStart }
        ]
      });
    case ADD_NOTES:
      return merge({}, state, {
        roll: [
          { notes: action.notes,  timeSlice: action.timeNow - state[currTrackId].timeStart }
        ]
      });
    default:
      return state;
  }
};

export default tracksReducer;


//
// tracks: {
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
