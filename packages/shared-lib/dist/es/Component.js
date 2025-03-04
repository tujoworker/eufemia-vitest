import { jsx } from 'react/jsx-runtime';
import React from 'react'
import { Button as EufemiaButton } from '@dnb/eufemia'
import { account } from '@dnb/eufemia/icons'

const Button = (props) => {
  return jsx(EufemiaButton, { text: "Click me", icon: account, ...props });
}

export { Button };
