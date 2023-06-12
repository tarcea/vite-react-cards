import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';

const App = () => {
  const [data, setData] = useState<Card[]>([]);
  const fetchJson = async () => {
    try {
      const response = await fetch('../cards.json');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJson();
  }, []);

  console.log(data);
  return <List data={data} />;
};

export default App;
