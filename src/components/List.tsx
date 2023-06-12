import Card from './Card';

const List = ({ data }: { data: Card[] }) => {
  return (
    <div className='container px-5 py-24 mx-auto flex flex-wrap'>
      {data.map((card: Card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default List;
