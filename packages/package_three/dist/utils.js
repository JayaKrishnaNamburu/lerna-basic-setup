"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var define_1 = require("codesandbox/lib/api/define");
var code = "import React from 'react';\nimport ReactDOM from 'react-dom';\n\nfunction formatName(user) {\n  return user.firstName + ' ' + user.lastName;\n}\n\nconst user = {\n  firstName: 'Harper',\n  lastName: 'Meck',\n};\n\nconst element = (\n  <h1>\n    Hello, {formatName(user)}!\n  </h1>\n);\n\nReactDOM.render(\n  element,\n  document.getElementById('root')\n);";
var html = '<div id="root"></div>';
var parameters = define_1.getParameters({
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
exports.default = parameters;
//# sourceMappingURL=utils.js.map