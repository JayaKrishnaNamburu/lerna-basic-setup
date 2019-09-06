import { getParameters } from "codesandbox/lib/api/define";

const code = `import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Meck',
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);`;
const html = '<div id="root"></div>';

const parameters = getParameters({
  files: {
    "index.js": {
      content: code,
      isBinary: false
    },
    "index.html": {
      content: html,
      isBinary: false
    }
  }
});

export default parameters;
