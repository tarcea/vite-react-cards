import Card from './Card';

const List = ({ data }: { data: Card[] }) => {
  return (
    <div className='grid sm:grid-cols-4 grid-cols-1 grid-flow-row gap-4 mx-auto'>
      {data.map((card: Card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default List;
