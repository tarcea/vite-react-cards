import { useEffect, useRef, useState } from 'react';

const Filter = ({
  data,
  setDataToDisplay,
}: {
  data: Card[];
  setDataToDisplay: any;
}) => {
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const [filter, setFilter] = useState<string | undefined>('allCards');

  const privateCards = (data: Card[]) => {
    return data.filter((card) => card.public === true);
  };

  const publicCards = (data: Card[]) => {
    return data.filter((card) => card.public === false);
  };

  const handleSelect = () => {
    setFilter(selectRef.current?.value);
    switch (filter) {
      case 'allCards':
        setDataToDisplay(data);
        break;
      case 'allMyCards':
        setDataToDisplay(data);
        break;
      case 'myPrivateCards':
        setDataToDisplay(privateCards(data));
        break;
      case 'myPublicCards':
        setDataToDisplay(publicCards(data));
        break;
      default:
        setDataToDisplay(data);
        break;
    }
  };

  useEffect(() => {
    setFilter('allCards');
  }, []);

  return (
    <div className='text-center p-10'>
      <select
        name='cards'
        id='cards'
        onChange={handleSelect}
        ref={selectRef}
        className='w-1/2'
      >
        <option value='allCards'>All Cards</option>
        <option value='allMyCards'>All My Cards</option>
        <option value='myPrivateCards'>My Private Cards</option>
        <option value='myPublicCards'>My Public Cards</option>
      </select>
    </div>
  );
};

export default Filter;
