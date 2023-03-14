import React from 'react';
import { createRoot } from 'react-dom/client';
import Welcome from './Welcome';

const rootElement = document.getElementById('root') as Element;

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Welcome />);
} else {
    throw new Error('No root element found');
    //eslint-disable-next-line no-console
    console.error('No root element found');
}
