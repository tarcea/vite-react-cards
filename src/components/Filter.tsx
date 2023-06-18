import { useEffect, useRef, useState } from 'react';

const Filter = ({
  data,
  setDataToDisplay,
}: {
  data: Card[];
  setDataToDisplay: any;
}) => {
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const [filter, setFilter] = useState<string | undefined>();

  const handleSelect = (e: any) => {
    e.preventDefault();
    setFilter(selectRef.current?.value);
  };
  useEffect(() => {
    const publicCards = data.filter((card) => card.public === false);
    setFilter('allCards');
    setDataToDisplay(publicCards);
  }, [data, setDataToDisplay]);
  console.log(filter);
  return (
    <div>
      <select name='cards' id='cards' onChange={handleSelect} ref={selectRef}>
        <option value='allCards'>All Cards</option>
        <option value='allMyCards'>All My Cards</option>
        <option value='myPrivateCards'>My Private Cards</option>
        <option value='myPublicCards'>My Public Cards</option>
      </select>
    </div>
  );
};

export default Filter;
