import React from 'react'
import { Button as EufemiaButton } from '@dnb/eufemia'
import { ButtonProps } from '@dnb/eufemia/components/Button'
import { IconProps } from '@dnb/eufemia/components/Icon'
import { account } from '@dnb/eufemia/icons'

type ComponentProps = {
  text?: React.ReactNode
  icon?: IconProps
} & ButtonProps

export function Button(props: ComponentProps) {
  return <EufemiaButton text="Click me" icon={account} {...props} />
}
