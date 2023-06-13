import { BsThreeDotsVertical } from 'react-icons/bs';

const Card = ({ card }: { card: Card }) => {
  const { title, image, description } = card;
  const short = (string: string, length: number) => {
    let str = string;
    if (str.length > length) {
      str = str.substring(0, length) + '...';
    }
    return str;
  };
  return (
    <div className='bg-gray-100 flex flex-wrap items-center justify-between rounded-lg h-20'>
      <img src={image} className='w-1/3 h-full rounded-l-lg' />
      <div>
        <p className='text-sm text text-left font-bold '>{short(title, 20)}</p>
        <p className='text-sm text text-left '>www.google.com</p>
      </div>
      <div className='mr-2 lg:cursor-pointer'>
        <BsThreeDotsVertical onClick={() => console.log(description)} />
      </div>
    </div>
  );
};

export default Card;
