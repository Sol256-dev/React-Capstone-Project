import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.bgImage})`,
          width: "50em",
          height: "20em",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          color: "black",
        }}
      >
        <div className="overview-description">
          <h4>{props.title}</h4>
          <p>{props.overview}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
