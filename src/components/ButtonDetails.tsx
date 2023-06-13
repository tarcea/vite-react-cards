const ButtonDetails = ({
  cardId,
  cardUrl,
}: {
  cardId: string;
  cardUrl: string;
}) => {
  return (
    <div className='absolute top-14 right-1 w-20 h-20 bg-white  z-40 flex flex-wrap justify-center content-around rounded drop-shadow-md'>
      <a href={cardUrl} target='_blank' className='text-sm hover:bg-gray-100'>
        visit Url
      </a>
      <p className='text-sm cursor-pointer hover:bg-gray-100'>remove</p>
    </div>
  );
};

export default ButtonDetails;
