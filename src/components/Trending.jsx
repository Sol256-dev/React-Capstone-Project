import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useContext, useState } from "react";
import { IconButton } from "@mui/material";

const TrendingMovies = (props) => {
  const [fav, setFav] = useState(false);
  const [show, setShow] = useState(false);

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
          <IconButton variant="secondary" onClick={handleFav}>
            {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Button
            variant="primary"
            style={{
              fontSize: ".7em",
              padding: ".3em",
              backgroundColor: "teal",
            }}
            onClick={() => setShow(true)}
          >
            Overview
          </Button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TrendingMovies;
