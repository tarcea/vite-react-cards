const Card = ({ card }: { card: Card }) => {
  const { title, image, description } = card;

  return (
    <div>
      <h1>{title}</h1>
      <img src={image} />
      <p>{description}</p>
    </div>
  );
};

export default Card;
