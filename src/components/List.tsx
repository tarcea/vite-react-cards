import Card from './Card';

const List = ({ data }: { data: Card[] }) => {
  return (
    <div>
      {data.map((card: Card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default List;
