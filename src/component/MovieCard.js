import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieCard = ({ per, handleDlete }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={per.image} />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{per.MovieName}</Card.Title>
        <Card.Text style={{ color: "black" }}>{per.Description}</Card.Text>
        <ReactStars
          name="star" /* name of the radio input, it is required */
          value={
            per.rating
          } /* number of selected icon (`0` - none, `1` - first) */
          editing={false}
        />
        ,
        <Link to={`/trailer/${per.id}`}>
          {" "}
          <Button variant="warning">Warning</Button>{" "}
          {/* <Button variant="outline-secondary">Secondary</Button> */}
        </Link>
        <Button variant="primary">delete</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
