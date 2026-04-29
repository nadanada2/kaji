import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Chatbot from './Chatbot';

// Mock global fetch
global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) })) as jest.Mock;

test('affiche le bouton flottant', () => {
  render(<Chatbot />);
  const button = screen.getByLabelText(/ouvrir l'assistant/i);
  expect(button).toBeInTheDocument();
});