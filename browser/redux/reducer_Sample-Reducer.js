import axios from 'axios';

/* -----------------    CONSTANTS     ------------------ */

const LOGIN = 'LOGIN_CURRENT_USER';


/* ------------   ACTION CREATORS     ------------------ */

const login = user => ({ type: LOGIN, user });

/* ------------       REDUCER     ------------------ */

export default function reducer (user = '', action) {
  switch (action.type) {
    
    case LOGIN: 
      return action.user;

    default: 
      return user;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const signup = credentials => dispatch => {
  axios.post('/signup', credentials)
       .then(res => dispatch(login(res.data)))
       // .then(() => console.log('LOGIN SUCCESSFUL'))
       .catch(err => console.error('Signup unsuccesful', err));
};