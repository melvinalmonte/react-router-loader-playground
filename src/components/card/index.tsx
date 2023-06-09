import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  description: string;
  id: number;
};

const Card = ({ title, description, id }: CardProps) => {
  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/todos/${id}`}>Learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
