import { render, screen } from '@testing-library/react';
import Card from './Card';

const card = {
  id: 1,
  title: 'Card 1',
  image: 'https://picsum.photos/200/100?grayscale&random=1',
  description: 'This is the description for Card 1.',
};

it('render a list of items', () => {
  render(<Card card={card} />);
  const h1 = screen.getByRole('heading', { level: 1 });

  expect(h1).toHaveTextContent(`Card 1`);
});
