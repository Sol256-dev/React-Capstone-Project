import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReviewsIcon from '@mui/icons-material/Reviews';
import { useContext, useState } from "react";
import { IconButton } from "@mui/material";
import MyVerticallyCenteredModal from "./Overview";

const TrendingMovies = (props) => {
  const [fav, setFav] = useState(false);
  //   const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const handleFav = () => {
    fav ? setFav(false) : setFav(true);
  };

  return (
    <div>
      <Card
        className="movie-card"
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
            <LocalMoviesOutlinedIcon style={{ color: "#C0F933" }} />
          ) : (
            <LiveTvOutlinedIcon style={{ color: "#C0F933" }} />
          )}
        </div>

        <div>
          {props.score > 6.9 ? (
            <ThumbUpOffAltOutlinedIcon style={{ color: "#C0F933" }} />
          ) : (
            <ThumbDownOutlinedIcon style={{ color: "red" }} />
          )}
          <IconButton variant="secondary" onClick={handleFav}>
            {fav ? (
              <FavoriteIcon style={{ color: "#C0F933" }} />
            ) : (
              <FavoriteBorderIcon style={{ color: "#C0F933" }} />
            )}
          </IconButton>
          <IconButton variant="secondary" onClick={() => setModalShow(true)}>
            <ReviewsIcon style={{ color: "#C0F933" }}/>
          </IconButton>
          
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            bgImage={props.backdrop_path}
            title={props.title}
            overview={props.overview}
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingMovies;
