import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const TrendingMovies = (props) => {
  return (
    <>
      <Card
        style={{
          width: "11rem",
          fontSize: ".8rem",
          height: "20.6em",
        }}
      >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
        />
        <Card.Body></Card.Body>
      </Card>
      <div className="moviedetails"></div>
    </>
  );
};

export default TrendingMovies;
