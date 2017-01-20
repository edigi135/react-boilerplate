'use strict';

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

// Set up synth and pattern
const synth = new Tone.Synth().toMaster();
const pattern = new Tone.Pattern(function(time, note) {
  // synth.triggerAttackRelease(note, 0.25);
}, ["C2", "D4", "E5", "A6"]);

// export to container
export const playArp = () => dispatch => {
  console.log('Pattern:', pattern);
  pattern();
  dispatch(play('Arpeggio Playing'));
};

export const stopArp = () => dispatch => {
  pattern();
  dispatch(stop('Arpeggio Stopped'));
};
