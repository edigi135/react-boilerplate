
/* -----------------    CONSTANTS     ------------------ */

const PLAYING = 'PLAYING';
const STOPPED = 'STOPPED';


/* ------------   ACTION CREATORS     ------------------ */

const play = data => ({ type: PLAYING, data });
const stop = data => ({ type: STOPPED, data });

/* ------------       REDUCER     ------------------ */

export default function reducer (initialState = {}, action) {
  switch (action.type) {
    
    case PLAYING: 
      return action.data;
    case STOPPED: 
      return action.data;

    default: 
      return initialState;
  }
} 

/* ------------       DISPATCHERS     ------------------ */
import Tone from 'tone';

export const playNote = (data) => dispatch => {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("C4", "8n");
  data = 'playing';
  dispatch(play(data));
};

export const stopNote = (data, synth) => dispatch => {
  synth.triggerRelease("8n");
  data = 'stopped';
  dispatch(stop(data));
};

