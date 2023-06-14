import Card from './Card';

const List = ({
  data,
  cardId,
  setCardId,
}: {
  data: Card[];
  cardId: string;
  setCardId: (value: string) => void;
}) => {
  return (
    <div className='grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row gap-4 mx-auto 3xl:w-3/4'>
      {data.map((card: Card) => (
        <Card card={card} key={card.id} cardId={cardId} setCardId={setCardId} />
      ))}
    </div>
  );
};

export default List;
