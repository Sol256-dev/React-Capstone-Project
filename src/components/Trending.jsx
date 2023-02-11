import Card from "react-bootstrap/Card";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";
import { IconButton } from "@mui/material";

const TrendingMovies = (props) => {
  const [fav, setFav] = useState(false);

  const handleFav = () => {
    fav ? setFav(false) : setFav(true);
  };

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
      <div className="movie-details">
        <div className="video-type">
          {props.media_type === "movie" ? (
            <LocalMoviesOutlinedIcon />
          ) : (
            <LiveTvOutlinedIcon />
          )}
        </div>

        <div>
          {props.score > 6.9 ? (
            <ThumbUpOffAltOutlinedIcon />
          ) : (
            <ThumbDownOutlinedIcon />
          )}
        </div>
        <div>
          <IconButton variant="secondary" onClick={handleFav}>
            {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default TrendingMovies;
