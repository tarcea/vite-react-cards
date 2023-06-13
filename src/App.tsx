import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';

const App = () => {
  const [data, setData] = useState<Card[]>([]);
  const [showDetails, setShowDetails] = useState('');
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

  return (
    <div className=''>
      <List
        data={data.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
    </div>
  );
};

export default App;
