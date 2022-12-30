import "./styles.scss";

interface PropsCard {
  text: string;
}

export const Card = (props: PropsCard) => {
  return (
    <div className="card-container">
      <p>{props.text}</p>
    </div>
  );
};
