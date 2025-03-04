const jsxRuntime = require('react/jsx-runtime'),
  React = require('react'),
  eufemia = require('@dnb/eufemia'),
  icons = require('@dnb/eufemia/icons');

const Button = (props) => {
  return jsxRuntime(eufemia.Button, { text: "Click me", icon: account, ...props });
}

module.exports = { Button };
