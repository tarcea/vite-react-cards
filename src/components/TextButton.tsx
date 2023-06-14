const TextButton = ({ text }: { text: string }) => {
  return (
    <div className='text-sm text-center cursor-pointer'>
      <p>{text}</p>
    </div>
  );
};

export default TextButton;
