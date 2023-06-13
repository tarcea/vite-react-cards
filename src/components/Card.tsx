import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ButtonDetails from './ButtonDetails';

const Card = ({
  card,
  showDetails,
  setShowDetails,
}: {
  card: Card;
  showDetails: string;
  setShowDetails: (value: string) => void;
}) => {
  const [show, setShow] = useState(false);

  const { title, image, url, id } = card;
  const displayUrl = new URL(url);

  const short = (string: string, length: number) => {
    let str = string;
    if (str.length > length) {
      str = str.substring(0, length) + '...';
    }
    return str;
  };

  const handleDetailsButton = () => {
    setShowDetails(id);
    setShow(!show);
  };
  return (
    <div className='bg-violet-50 flex flex-wrap items-center justify-between rounded-lg h-20 w-full relative hover:shadow-xlg hover:shadow-indigo-800/60 shadow-lg shadow-indigo-500/40 cursor-pointer'>
      <div
        className='w-24  h-full rounded-l-lg bg-center bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${image || '/no-image-png.webp'})` }}
      ></div>

      <div className=''>
        <p className='text-md font-thin text text-left absolute top-3 left-32'>
          {short(displayUrl.host, 20)}
        </p>
        <p className='text-xs text text-left font-bold absolute bottom-5 left-32'>
          {short(title, 20)}
        </p>
      </div>
      <div
        className='flex flex-nowrap items-center justify-center mr-2 lg:cursor-pointer w-8 h-8 hover:rounded-full hover:bg-violet-200'
        title='Details'
      >
        <BsThreeDotsVertical className='' onClick={handleDetailsButton} />
      </div>
      {showDetails === id && show && showDetails && (
        <ButtonDetails cardId={id} cardUrl={url} />
      )}
    </div>
  );
};

export default Card;
