import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import expect from "expect"; // Import your App component

describe('App Component', () => {
    // Test if the app renders without crashing
    test('renders App without crashing', () => {
        render(<App />); // No need for MemoryRouter here, App already contains a Router

        // Assert that the Home link is rendered
        expect(screen.getByText(/home/i)).toBeInTheDocument();
    });

    // Test navigation links
    test('renders navigation links correctly', () => {
        render(<App />);

        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/education & certificates/i)).toBeInTheDocument();
        expect(screen.getByText(/experience/i)).toBeInTheDocument();
        expect(screen.getByText(/projects/i)).toBeInTheDocument();
    });

    // Test theme toggle button functionality
    // test('toggles theme between dark and light', () => {
    //     render(<App />);
    //
    //     const themeToggleButton = screen.getByRole('button', { name: /moon/i }); // Assuming the moon icon represents dark theme
    //
    //     // Initially, the button should show the moon icon (indicating dark theme is enabled)
    //     expect(themeToggleButton).toBeInTheDocument();
    //     expect(screen.getByRole('button', { name: /moon/i })).toBeInTheDocument();
    //
    //     // Simulate a click to toggle the theme
    //     fireEvent.click(themeToggleButton);
    //
    //     // Now the button should show the sun icon (indicating light theme is enabled)
    //     expect(screen.getByRole('button', { name: /sun/i })).toBeInTheDocument();
    //
    //     // Toggle back to dark theme by clicking the button again
    //     fireEvent.click(screen.getByRole('button', { name: /sun/i }));
    //
    //     // The button should display the moon icon again
    //     expect(screen.getByRole('button', { name: /moon/i })).toBeInTheDocument();
    // });


    // // Test navigation toggle functionality (mobile)
    // test('opens and closes mobile navigation menu', () => {
    //     render(<App />);
    //
    //     // Check that the navigation is hidden initially
    //     const openMenuButton = screen.getByRole('button');
    //     expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
    //
    //     // Simulate opening the mobile menu
    //     fireEvent.click(openMenuButton);
    //     expect(screen.getByText(/home/i)).toBeVisible(); // Nav link should be visible when menu is open
    //
    //     // Simulate closing the mobile menu
    //     fireEvent.click(openMenuButton); // Toggle the same button to close
    //     expect(screen.getByText(/home/i)).not.toBeVisible(); // Nav link should be hidden when menu is closed
    // });
});

describe('Footer Component', () => {
    // test('renders Footer with correct content and styles', () => {
    //     render(<App />); // Rendering App includes Footer
    //
    //     // Check if footer text contains Isuru Ranaweera
    //     expect(screen.getByText(/isuru ranaweera/i)).toBeInTheDocument();
    //
    //     // Check if current year is rendered correctly
    //     const currentYear = new Date().getFullYear();
    //     expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
    //
    //     // Ensure footer has initial dark theme class
    //     let footer = screen.getByRole('contentinfo');
    //     expect(footer).toHaveClass('bg-gray-800'); // Assuming dark theme initially
    //
    //     // Toggle theme to light and check for class change
    //     const themeToggleButton = screen.getByRole('button', { name: /moon/i });
    //     fireEvent.click(themeToggleButton);
    //
    //     // Re-check footer class for light theme
    //     footer = screen.getByRole('contentinfo');
    //     expect(footer).toHaveClass('bg-gray-200');
    // });
});
