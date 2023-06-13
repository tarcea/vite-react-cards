import { BsThreeDotsVertical } from 'react-icons/bs';

const Card = ({ card }: { card: Card }) => {
  const { title, image, description, url } = card;
  const displayUrl = new URL(url);
  const short = (string: string, length: number) => {
    let str = string;
    if (str.length > length) {
      str = str.substring(0, length) + '...';
    }
    return str;
  };
  return (
    <div className='bg-violet-50 flex flex-wrap items-center justify-between rounded-lg h-20'>
      <div
        className='w-24  h-full rounded-l-lg bg-center bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${image || '/no-image-png.webp'})` }}
      ></div>

      <div>
        <p className='text-xs font-thin text text-left '>{displayUrl.host}</p>
        <p className='text-sm text text-left font-bold '>{short(title, 15)}</p>
      </div>
      <div
        className='flex flex-nowrap items-center justify-center mr-2 lg:cursor-pointer w-8 h-8 hover:rounded-full hover:bg-violet-200'
        title='Details'
      >
        <BsThreeDotsVertical
          className=''
          onClick={() => console.log(description)}
        />
      </div>
    </div>
  );
};

export default Card;
