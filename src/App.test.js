// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CyberRelay title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CyberRelay/i);
    expect(titleElement).toBeInTheDocument();
});
