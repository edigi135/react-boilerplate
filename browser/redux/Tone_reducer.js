import Tone from 'tone';

/* -----------------    CONSTANTS     ------------------ */

const PLAYING = 'PLAYING';
const STOPPED = 'STOPPED';


/* ------------   ACTION CREATORS     ------------------ */

const play = data => ({ type: PLAYING, data });
const stop = data => ({ type: STOPPED, data });

/* ------------       REDUCER     ------------------ */

const initialState = {
  isPlaying: false
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    
    case PLAYING: 
      return action.data;
    case STOPPED: 
      return action.data;

    default: 
      return state;
  }
} 

/* ------------       DISPATCHERS     ------------------ */

const synth = new Tone.AMSynth().toMaster();

export const playNote = () => dispatch => {
  synth.triggerAttack("C4");
  dispatch(play('playing'));
};

export const stopNote = () => dispatch => {
  synth.triggerRelease();
  dispatch(stop('stopped'));
};

