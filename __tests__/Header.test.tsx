import { render, screen } from '@testing-library/react';
import Header from '../src/app/components/Header';

describe('Header', () => {
  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getAllByText('Sobre Nós')).toHaveLength(2);
  });
});
