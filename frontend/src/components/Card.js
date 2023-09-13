import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardExample() {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>타이틀</Card.Title>
        <Card.Text>텍스트</Card.Text>
        <Button variant="primary">이동</Button>
      </Card.Body>
    </Card>
  );
}

export default CardExample;