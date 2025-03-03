import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@dnb/eufemia'
import { account } from '@dnb/eufemia/icons'

describe('Button Component', () => {
  it('renders with text content', () => {
    render(<Button text="Click me" />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button text="Click me" on_click={handleClick} />)

    const button = screen.getByText('Click me')
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders with variant', () => {
    render(<Button text="Secondary Button" variant="secondary" />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('dnb-button--secondary')
  })

  it('renders with icon', () => {
    render(<Button text="Button with Icon" icon="add" />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    // The icon is rendered as an SVG element
    expect(document.querySelector('.dnb-icon')).toBeInTheDocument()
  })

  it('renders with secondary icon', () => {
    render(<Button text="Button with Icon" icon={account} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    // The icon is rendered as an SVG element
    expect(document.querySelector('.dnb-icon')).toHaveAttribute(
      'data-testid',
      'account icon',
    )
  })
})
