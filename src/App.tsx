import { useEffect, useState } from 'react';
import './App.css';
import CardCounter from './components/CardCounter';
import DeleteModal from './components/DeleteModal';
import Filter from './components/Filter';
import GoUp from './components/GoUp';
import List from './components/List';

const App = () => {
  const [data, setData] = useState<Card[]>([]);
  const [cardId, setCardId] = useState('');
  const [modal, setModal] = useState(false);
  const [deletedCard, setDeletedCard] = useState<Card>();
  const [dataToDisplay, setDataToDisplay] = useState<Card[]>([]);
  const fetchJson = async () => {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJson();
  }, []);

  const removeCard = () => {
    const card = data.find((card) => card.id === cardId);
    setDeletedCard(card);
    setModal(true);
  };
  const reallyRemoveCard = () => {
    const cards = data.filter((card) => card.id !== cardId);
    setData(cards);
  };

  return (
    <>
      <Filter data={data} setDataToDisplay={setDataToDisplay} />
      <div onClick={() => setCardId('')} className='p-8 m-0 w-full h-full'>
        <List
          data={dataToDisplay.sort(
            (a, b) => b.createdAt.seconds - a.createdAt.seconds
          )}
          cardId={cardId}
          setCardId={setCardId}
          removeCard={removeCard}
        />
        <CardCounter counter={dataToDisplay.length} />
        <GoUp />
        {deletedCard && modal && (
          <DeleteModal
            setModal={setModal}
            reallyRemoveCard={reallyRemoveCard}
            card={deletedCard}
          />
        )}
      </div>
    </>
  );
};

export default App;
