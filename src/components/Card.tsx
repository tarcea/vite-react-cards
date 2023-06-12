const Card = ({ card }: { card: Card }) => {
  const { title, image, description } = card;

  return (
    <div className='bg-gray-100 px-8 pt-16 pb-16 relative'>
      <div className='h-full p-4 lg:w-1/3'>
        <h1 className='title-font sm:text-2xl text-xl  mb-3'>{title}</h1>
        <img src={image} />
        <p className='mb-3'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
