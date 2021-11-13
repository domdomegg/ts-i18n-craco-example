import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// We can mock our translations if we wanted to
// import t from './i18n/browser'

test('renders edit translations text', () => {
  // We can mock our translations if we wanted to
  // t.editAndSave = jest.fn().mockReturnValue('Edit the translations and save to reload!')

  render(<App />);
  const editTranslationsMessage = screen.getByText(/edit the translations/i);
  expect(editTranslationsMessage).toBeInTheDocument();
});
