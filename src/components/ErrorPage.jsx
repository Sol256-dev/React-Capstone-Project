import { useRouteError } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const ErrorPage = () => {
  const error = useRouteError();
    console.log(error);
  return (
    <>
      <Alert variant="danger">
        <Alert.Heading>{error.data}</Alert.Heading>
        <p>
          Error status: <h4>{error.status}</h4>
        </p>
        <hr />
        <p className="mb-0">
          {error.statusText}
        </p>
      </Alert>
    </>
  );
};

export default ErrorPage;
