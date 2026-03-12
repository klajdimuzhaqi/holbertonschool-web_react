import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {

    test('renders h1 with text School Dashboard', () => {
        render(<App />);
        const heading = screen.getByRole('heading', {
            name: /school dashboard/i
        });
        expect(heading).toBeInTheDocument();
    });

    test('renders correct text in app-body and app-footer paragraphs', () => {
        render(<App />);

        const bodyText = screen.getByText(/login to access the full dashboard/i);
        const footerText = screen.getByText(/copyright .* - holberton school/i);

        expect(bodyText).toBeInTheDocument();
        expect(footerText).toBeInTheDocument();
    });

    test('renders the logo image', () => {
        render(<App />);

        const logoImage = screen.getByAltText(/holberton logo/i);
        expect(logoImage).toBeInTheDocument();
    });

});