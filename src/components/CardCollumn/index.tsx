import "./styles.scss";

interface CardCollumnProps {
  title: string;
}

export const CardCollumn = (props: CardCollumnProps) => {
  return (
    <div className="container-card">
      <h1>{props.title}</h1>
      <ul>
        <li>Rocketseat</li>
        <p>2019-Atualmente</p>
        <p>Community Experience</p>
      </ul>
      <ul>
        <li>Rocketseat</li>
        <p>2019-Atualmente</p>
        <p>Community Experience</p>
      </ul>
      <ul>
        <li>Rocketseat</li>
        <p>2019-Atualmente</p>
        <p>Community Experience</p>
      </ul>
      <ul>
        <li>Rocketseat</li>
        <p>2019-Atualmente</p>
        <p>Community Experience</p>
      </ul>
    </div>
  );
};
