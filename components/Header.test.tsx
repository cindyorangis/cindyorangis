import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { describe, it, expect } from 'vitest'
import { Header } from '@/components/Header'

// Mock the usePathname hook
mock('next/navigation', () => ({
  usePathname: mock.fn(),
}))

// Mock the useTheme hook
mock('next-themes', () => ({
  useTheme: mock.fn(),
}))

// Mock the useRouter hook
mock('next/router', () => ({
  useRouter: mock.fn(),
}))

describe('Header Component', () => {
  beforeEach(() => {
    // Reset the mock functions
    usePathname.mockReset()
    useTheme.mockReset()
    useRouter.mockReset()
  })

  it('renders the header correctly', () => {
    // Mock the usePathname to return '/'
    usePathname.mockReturnValue('/')

    // Render the Header component
    render(<Header />)

    // Check if the header is rendered
    const headerElement = screen.getByRole('heading')
    expect(headerElement).toBeInTheDocument()

    // Check if the avatar is rendered
    const avatarElement = screen.getByAltText('Home')
    expect(avatarElement).toBeInTheDocument()

    // Check if the navigation links are rendered
    const aboutLink = screen.getByText('About')
    const articlesLink = screen.getByText('Articles')
    const projectsLink = screen.getByText('Projects')
    const usesLink = screen.getByText('Uses')
    expect(aboutLink).toBeInTheDocument()
    expect(articlesLink).toBeInTheDocument()
    expect(projectsLink).toBeInTheDocument()
    expect(usesLink).toBeInTheDocument()

    // Check if the theme toggle is rendered
    const themeToggle = screen.getByRole('button', { name: /toggle theme/i })
    expect(themeToggle).toBeInTheDocument()
  })

  it('toggles the theme', () => {
    // Mock the useTheme hook to return the initial theme
    useTheme.mockReturnValue({
      resolvedTheme: 'light',
      setTheme: mock.fn(),
    })

    // Render the Header component
    render(<Header />)

    // Find the theme toggle button
    const themeToggle = screen.getByRole('button', { name: /toggle theme/i })

    // Click the theme toggle button
    fireEvent.click(themeToggle)

    // Check if the setTheme function was called with the correct argument
    expect(useTheme().setTheme).toHaveBeenCalledWith('dark')
  })

  it('opens and closes the mobile navigation', () => {
    // Mock the usePathname to return '/'
    usePathname.mockReturnValue('/')

    // Render the Header component
    render(<Header />)

    // Find the mobile navigation button
    const mobileNavButton = screen.getByRole('button', { name: /menu/i })

    // Click the mobile navigation button
    fireEvent.click(mobileNavButton)

    // Check if the mobile navigation panel is visible
    const mobileNavPanel = screen.getByRole('dialog')
    expect(mobileNavPanel).toBeInTheDocument()

    // Find the close button in the mobile navigation
    const closeNavButton = screen.getByRole('button', { name: /close menu/i })

    // Click the close button
    fireEvent.click(closeNavButton)

    // Check if the mobile navigation panel is no longer visible
    expect(mobileNavPanel).not.toBeInTheDocument()
  })

  it('handles the active link styling', () => {
    // Mock the usePathname to return '/about'
    usePathname.mockReturnValue('/about')

    // Render the Header component
    render(<Header />)

    // Check if the about link is active
    const aboutLink = screen.getByText('About')
    expect(aboutLink).toHaveClass('text-teal-500 dark:text-teal-400')
  })
})
