import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { connect } from "react-redux";
import { setHandWashing, setDishwasher, setClothesWashing,  setShower, setBath, setToilet, setGarden, setTotal } from "../redux/actions";


function WaterForm({ setHandWashing, setDishwasher, setClothesWashing,  setShower, setBath, setToilet, setGarden, setTotal }) {
  const [foyer, setFoyer] = useState(0);
  const [vaisselleMain, setVaisselleMain] = useState(0);
  const [laveVaisselle, setLaveVaisselle] = useState(0);
  const [laveLinge, setLaveLinge] = useState(0);
  const [douches, setDouches] = useState(0);
  const [bains, setBains] = useState(0);
  const [toilettes, setToilettes] = useState(0);
  const [jardin, setJardin] = useState(0);
  const [absences, setAbsences] = useState(0);
  const [formSubmited, setFormSubmited] = useState(false)
  const [error, setError] = useState("")

  const handleFormValidation = () =>{
    if(foyer === 0){

      setError("Rentrez le nombre de personnes composant le foyer ")

    }else{

      setFormSubmited(true)
      const avrgShower = 70;
      const avrgBath = 125;
      const avrgFlush = 8;
      const avrgHandWashing = 18;
      const avrgDishwasher = 20;
      const avrgClothesWashing = 60;
      const avrgGarder = 10;
  
      const weeklyWaterUsage = (douches * avrgShower) +
                           (bains * avrgBath) +
                           (toilettes * avrgFlush * 7) +
                           (vaisselleMain * avrgHandWashing) +
                           (laveVaisselle * avrgDishwasher) +
                           (laveLinge * avrgClothesWashing) +
                           (jardin * avrgGarder);
      
  
      const annualWaterUsage = weeklyWaterUsage * 52;
  
      const dailyWaterUsage = annualWaterUsage / 365;
  
      const absencesWaterUsage = absences * dailyWaterUsage
  
      const adjustedAnnualWaterUsage = Math.round(annualWaterUsage * foyer - absencesWaterUsage);
      console.log("adjustedAnnualWaterUsage :", adjustedAnnualWaterUsage)
  
      setTotal(adjustedAnnualWaterUsage)
      setHandWashing((vaisselleMain * avrgHandWashing)*52)
      setDishwasher((laveVaisselle * avrgDishwasher)*52)
      setClothesWashing((laveLinge * avrgClothesWashing)*52)
      setShower((douches * avrgShower)*52)
      setBath((bains * avrgBath)*52)
      setToilet((toilettes * avrgFlush * 7)*52)
      setGarden((jardin * avrgGarder)*52)
    }





  }

  const handleRevenir = () => {
    setFormSubmited(false)
    setTotal(0)

  }

  return (
    <Container className="container_style">
      { formSubmited ? 
      
      <Button onClick={handleRevenir} className="revenir_style">Revenir au formulaire</Button>
       : 
      <Row>
        <Col xs={12} md={6} className="col_style">
          <Card>
            <Card.Header>
              <h5 className="card_header_style">Foyer *</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Nombre de personnes composant le foyer :</Form.Label>
                <Form.Control 
                  type="number"
                  value={foyer}
                  onChange={(event)=>setFoyer(event.target.value)}>
                </Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>        
        <Col xs={12} md={6} className="col_style">
          <Card>
            <Card.Header>
              <h5 className="card_header_style">Vaisselle à la main</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Nombre de lavages de la vaisselle à la main par semaine :</Form.Label>
                <Form.Control 
                  type="number"
                  value={vaisselleMain}
                  onChange={(event)=>setVaisselleMain(event.target.value)}>
                </Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>        
        <Col xs={12} md={6} className="col_style">
          <Card>
            <Card.Header>
              <h5 className="card_header_style">Lave-vaisselle</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Nombre de cycles de lave-vaisselle par semaine :</Form.Label>
                <Form.Control 
                  type="number"
                  value={laveVaisselle}
                  onChange={(event)=>setLaveVaisselle(event.target.value)}>
                </Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>        
        <Col xs={12} md={6} className="col_style">
          <Card>
            <Card.Header>
              <h5 className="card_header_style">Lave-linge</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Nombre de cycles de lave-linge par semaine :</Form.Label>
                <Form.Control 
                  type="number"
                  value={laveLinge}
                  onChange={(event)=>setLaveLinge(event.target.value)}>
                </Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>        
        <Col xs={12} md={6} className="col_style">
          <Card>
            <Card.Header>
              <h5 className="card_header_style">Douches</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Nombre de douches par semaine par membre du foyer :</Form.Label>
                <Form.Control 
                  type="number"
                  value={douches}
                  onChange={(event)=>setDouches(event.target.value)}>
                </Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>        
        <Col xs={12} md={6} className="col_style">
          <Card>
            <Card.Header>
              <h5 className="card_header_style">Bains</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Nombre de bains par semaine et par personne :</Form.Label>
                <Form.Control 
                  type="number"
                  value={bains}
                  onChange={(event)=>setBains(event.target.value)}>
                </Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>        
        <Col xs={12} md={6} className="col_style">
          <Card>
            <Card.Header>
              <h5 className="card_header_style">Toilettes</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Nombre d'usages de la chasse d'eau par jour et par personne :</Form.Label>
                <Form.Control 
                  type="number"
                  value={toilettes}
                  onChange={(event)=>setToilettes(event.target.value)}>
                </Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>        
        <Col xs={12} md={6} className="col_style">
          <Card>
            <Card.Header>
              <h5 className="card_header_style">Jardin</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Surface arrosée en m2 :</Form.Label>
                <Form.Control 
                  type="number"
                  value={jardin}
                  onChange={(event)=>setJardin(event.target.value)}
                  ></Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>        
        <Col xs={12} md={6} className="col_style">
          <Card>
            <Card.Header>
              <h5 className="card_header_style">Absence</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Nombre de jours d'absence du domicile par an :</Form.Label>
                <Form.Control 
                  type="number"
                  value={absences}
                  onChange={(event)=>setAbsences(event.target.value)}>
                </Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} className="validation_col">
          <span className="error_style">{error}</span>
          <Button className="validation_style" onClick={handleFormValidation}>Calculer</Button>
        </Col>
      </Row>
      
      }
    </Container>
  );
}

export default connect(null, { setHandWashing, setDishwasher, setClothesWashing,  setShower, setBath, setToilet, setGarden, setTotal})(WaterForm);

