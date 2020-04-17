We are going to create a math app that will also keep track of the users info
Steps
1) Create your react app
2) Go inside of it and run `npm install redux react-redux`
3) Inside of the src/ folder create
    * reducers/index.js
    * reducers/mathReducers.js
    * actions/index.js
    * actions/mathOperations.js
4) Create your math operations actions inside of src/actions/mathOperations.js
```javascript
export const ADD_NUMBER = "ADD_NUMBER";

export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    number
  }
}

// Now make the rest of the Action Types and Action Creators for the rest of the operations
// subtract, multiply, and divide actions are left
```
5) Let's test out if it worked or not! Test out your Action Types by logging them
into the console (import inside or App.js) as well as your Action Creators
```javascript
// FILE STRUCTURE: src/App.js
import {
  ADD_NUMBER,
  addNumber,
} from './actions/mathOperations.js';

class App extends React.component {
  componentDidMount() {
    console.log(ADD_NUMBER);
    console.log(addNumber(12));
  }
}
```

6) Now let's create our reducers for the math operations specifically. I'll start of by giving you the first operations reducer and then you'll do the rest.
```javascript
// FILE STRUCTURE: src/reducers/mathReducers.js
// we start of by importing the Action Types since we'll need them to identify the action going to be taken.
import { ADD_NUMBER } from '../actions/index.js';

// Then we have to create an initial state just in case our application doesn't have a state.
const initState = 0;

// We are going to export this reducer in order to eventually combine it with others.
export default function mathReducers(state = initState/* this equates state to initState if there is nothing the "state"*/, action) {
  switch(action.type) {
    case ADD_NUMBER:
      return state + 1
    // Now make the different switch cases for subtract, multiply, and divide
    // You'll have to import the different variables in order to do this.
    default:
      return state
  }
}
```

7) Now inside of src/reducers/index.js import the reducer for all the math operations that we just created. Also import combine reducers from redux. Then inside of combine reducers pass in an object that takes in the reducer.
```javascript
// FILE STRUCTURE: src/reducers/index.js

import { combineReducers } from 'redux';
import mathReducers from './mathReducers.js';

// this will be the "root reducer"
// The reducer that has all of the reducers for the entire application
// combined into 1
export default combineReducers({
  mathReducers,
});

```
8) Now inside of src/index.js
    * import the Provider component from react-redux
    * import createStore from redux
    * import your rootReducer from the src/reducers/index.js file
    * create your store inside of index.js file and set it to a const
    * Wrap the entire App component with the Provider component and pass in the store as a prop to the provider component
```javascript
// FILE STRUCTURE: src/index.js
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
```

<details>
<summary>Now that we have all of our boilerplate code set up. Let us learn about the connect()() function in react-redux</summary>
<br>

The connect function will allow us to pass the information from our store as props to our components.
It will also pass in our action dispatchers as props to our components
```javascript
import React from 'react';

function Lists(props) {
  return (
    <div>
      <h3>Hello I am a component and my name is props.name</h3>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
```
</details>
