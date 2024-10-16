import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import defaultimage from "../assets/news.jpg";

function Body({ author, title, url, src, content }) {
  return (
    <div className="container ">
      <div className="new bg-danger">
        <Card className="Newcard" style={{ width: "18rem" }}>
          <Card.Img
            className="cardImg"
            variant="top"
            src={src ? src : defaultimage}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{author}</ListGroup.Item>
            <ListGroup.Item>{content}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">{url}</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Body;
