import { test } from '@playwright/test'
import { describe, it, expect } from 'vitest'

// Mock the usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

// Mock the useTheme hook
jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}))

// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Header Component', () => {
  beforeEach(() => {
    // Reset the mock functions
    usePathname.mockReset()
    useTheme.mockReset()
    useRouter.mockReset()
  })

  it('renders the header correctly', async ({ page }) => {
    // Mock the usePathname to return '/'
    usePathname.mockReturnValue('/')

    // Render the Header component
    await page.goto('http://localhost:3000/')

    // Check if the header is rendered
    const headerElement = await page.locator('header').first()
    await expect(headerElement).toBeVisible()

    // Check if the avatar is rendered
    const avatarElement = await page.locator('img[alt="Home"]')
    await expect(avatarElement).toBeVisible()

    // Check if the navigation links are rendered
    const aboutLink = await page.locator('a:text-is("About")')
    const articlesLink = await page.locator('a:text-is("Articles")')
    const projectsLink = await page.locator('a:text-is("Projects")')
    const usesLink = await page.locator('a:text-is("Uses")')
    await expect(aboutLink).toBeVisible()
    await expect(articlesLink).toBeVisible()
    await expect(projectsLink).toBeVisible()
    await expect(usesLink).toBeVisible()

    // Check if the theme toggle is rendered
    const themeToggle = await page.locator('button:has-text("Toggle theme")')
    await expect(themeToggle).toBeVisible()
  })

  it('toggles the theme', async ({ page }) => {
    // Mock the useTheme hook to return the initial theme
    useTheme.mockReturnValue({
      resolvedTheme: 'light',
      setTheme: jest.fn(),
    })

    // Render the Header component
    await page.goto('http://localhost:3000/')

    // Find the theme toggle button
    const themeToggle = await page.locator('button:has-text("Toggle theme")')

    // Click the theme toggle button
    await themeToggle.click()

    // Check if the setTheme function was called with the correct argument
    expect(useTheme().setTheme).toHaveBeenCalledWith('dark')
  })

  it('opens and closes the mobile navigation', async ({ page }) => {
    // Mock the usePathname to return '/'
    usePathname.mockReturnValue('/')

    // Render the Header component
    await page.goto('http://localhost:3000/')

    // Find the mobile navigation button
    const mobileNavButton = await page.locator('button:has-text("Menu")')

    // Click the mobile navigation button
    await mobileNavButton.click()

    // Check if the mobile navigation panel is visible
    const mobileNavPanel = await page.locator('div:has-text("Navigation")')
    await expect(mobileNavPanel).toBeVisible()

    // Find the close button in the mobile navigation
    const closeNavButton = await page.locator('button:has-text("Close menu")')

    // Click the close button
    await closeNavButton.click()

    // Check if the mobile navigation panel is no longer visible
    await expect(mobileNavPanel).not.toBeVisible()
  })

  it('handles the active link styling', async ({ page }) => {
    // Mock the usePathname to return '/about'
    usePathname.mockReturnValue('/about')

    // Render the Header component
    await page.goto('http://localhost:3000/about')

    // Check if the about link is active
    const aboutLink = await page.locator('a:text-is("About")')
    await expect(aboutLink).toHaveClass('text-teal-500 dark:text-teal-400')
  })
})
