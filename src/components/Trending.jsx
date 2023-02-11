import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const TrendingMovies = (props) => {
  return (
    <>
      <Card className="movie-card" style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="https://www.google.com" /> */}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.overview}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default TrendingMovies;
