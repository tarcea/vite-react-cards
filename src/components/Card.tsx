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
    <div className='bg-gray-100'>
      <h1 className='text-xl text-left'>{title}</h1>
      <img src={image} className='w-1/2 m-auto' />
      <p className='mb-3 text-left'>{short(description, 100)}</p>
      <div className='flex content-around'></div>
    </div>
  );
};

export default Card;
