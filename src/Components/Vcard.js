import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function BasicExample(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body className="body">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Link to={props.path}>
          <Button variant="success" className="Btn">
            Go somewhere
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
