import { render, screen } from '@testing-library/react';
import Hero from '../src/app/components/sections/Hero';

describe('Hero', () => {
  it('has WhatsApp link with rel attribute', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /Fale pelo WhatsApp/i });
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
