import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";

const UpcomingMovies = (props) => {
  return (
    <div>
      <Card className="movie-card" style={{ width: "11rem", fontSize: ".8rem", height: "20.6em" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
        />
        {/* <Card.Body></Card.Body> */}
      </Card>
      <div className="movie-details">
        <div className="video-type">
           {props.title}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovies;
