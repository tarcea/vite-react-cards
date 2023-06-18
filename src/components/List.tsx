import { useState } from 'react';
import Card from './Card';
import Filter from './Filter';

const List = ({
  data,
  cardId,
  setCardId,
  removeCard,
}: {
  data: Card[];
  cardId: string;
  setCardId: (value: string) => void;
  removeCard: () => void;
}) => {
  const [dataToDisplay, setDataToDisplay] = useState([]);

  return (
    <>
      <Filter data={data} setDataToDisplay={setDataToDisplay} />
      <div className='grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row gap-4 mx-auto 2xl:w-5/6'>
        {dataToDisplay.map((card: Card) => (
          <Card
            card={card}
            key={card.id}
            cardId={cardId}
            setCardId={setCardId}
            removeCard={removeCard}
          />
        ))}
      </div>
    </>
  );
};

export default List;
