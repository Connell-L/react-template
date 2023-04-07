import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelloWorld } from './HelloWorld';

const renderHelloWorld = () => render(<HelloWorld />);

describe('Welcome', () => {
    it('renders the welcome message', () => {
        renderHelloWorld();
        expect(screen.getByText('Hello World!')).toBeInTheDocument();
    });
});
