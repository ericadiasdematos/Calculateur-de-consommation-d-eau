import React from "react";
import { connect } from "react-redux";
import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";





function Result({ totalUsage,  handWashing, dishwasher, clothesWashing, shower, bath, toilet, garden }) {


    const data = [
        { name: "VAM", value: handWashing },
        { name: "LV", value: dishwasher },
        { name: "LVLV", value: clothesWashing },
        { name: "DOUC", value: shower },
        { name: "BAIN", value: bath },
        { name: "TOIL", value: toilet },
        { name: "JARD", value: garden },
      ];

    const isMobile = window.innerWidth <= 768;

    const chartWidth = isMobile ? 390 : 1000;
    const chartHeight = isMobile ? 400 : 600;


  return (
    <Container>
        {
            totalUsage === 0?
            <p></p>
            :
        <Row>
            <Card style={{padding:0}}>
                <Card.Header style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                    <h5 className="card_header_style">Consomation Total: <h3>{totalUsage}</h3> litres par an </h5>
                </Card.Header>
                <Card.Body style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", flexDirection: "column"}}>
                    <Row>
                        <BarChart width={chartWidth} height={chartHeight} data={data} className="chart_style">
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#307473" />
                        </BarChart>
                    </Row>
                </Card.Body>
                <Card.Footer style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                    <p>
                        VAM = Vaisselle à la main
                        LV = Lave-vaisselle
                        LVLV = Lave-linge
                        DOUC = Douches
                        BAIN = Bains
                        TOIL = Toilettes
                        JARD = Jardin
                    </p>
                </Card.Footer>
            </Card>
        </Row>
        }
    </Container>
  );
};

const mapStateToProps = (state) => ({
    totalUsage: state.waterUsage.total,
    handWashing: state.waterUsage.handWashing,
    dishwasher: state.waterUsage.dishwasher,
    clothesWashing: state.waterUsage.clothesWashing,
    shower: state.waterUsage.shower,
    bath: state.waterUsage.bath,
    toilet: state.waterUsage.toilet,
    garden: state.waterUsage.garden

  });
  
export default connect(mapStateToProps)(Result);

