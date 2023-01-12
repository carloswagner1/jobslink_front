import { Card } from "react-bootstrap";
import recentVacancies from "data/recentVacancies.json";

export default function RecentVacancies() {  
  return (
    <Card className="h-100">
      <Card.Header>Minhas Vagas Recentes</Card.Header>
      <Card.Body >
        {recentVacancies.map((vacancy) => (
          <>
            <Card.Title key={vacancy.id}>{vacancy.position}</Card.Title>
            <Card.Text>
              {vacancy.locality}
              <div className="clearfix"></div>
              {vacancy.modality}
              <div className="clearfix"></div>
              Status: <span>{vacancy.status}</span>
            </Card.Text>
          </>
        ))}
        <a href="myvacancies" className="btn btn-primary">
          Ver mais
        </a>
      </Card.Body>
    </Card>
  );
}
