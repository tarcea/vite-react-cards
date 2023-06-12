import { render, screen } from '@testing-library/react';
import List from './List';

const data = [
  {
    id: 1,
    title: 'Card 1',
    image: 'https://picsum.photos/200/100?grayscale&random=1',
    description: 'This is the description for Card 1.',
  },
  {
    id: 2,
    title: 'Card 2',
    image: 'https://picsum.photos/200/100?random=2',
    description: 'This is the description for Card 2.',
  },
];

it('render a list of items', () => {
  render(<List data={data} />);
  const h1s = screen.getAllByRole('heading', { level: 1 });

  expect(h1s.length).toBe(2);
});
