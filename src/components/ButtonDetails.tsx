const ButtonDetails = ({ cardUrl }: { cardUrl: string }) => {
  return (
    <div className='absolute top-14 right-1 z-40 w-20 h-20 bg-white flex flex-wrap justify-center content-around rounded drop-shadow-xl opacity-75'>
      <a href={cardUrl} target='_blank' className='text-sm hover:bg-gray-100'>
        visit Url
      </a>
      <p className='text-sm cursor-pointer hover:bg-gray-100'>remove</p>
    </div>
  );
};

export default ButtonDetails;
