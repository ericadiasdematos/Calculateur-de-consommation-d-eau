import './App.css';
import WaterForm from './components/WaterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import waterUsageReducer from "./redux/reducers";

const rootReducer = combineReducers({
  counter: waterUsageReducer,
});

const store = createStore(rootReducer);



function App() {
  return (
    <Provider store={store}>
      <Container fluid className="App p-0">
        <header className='header_style'>
          <Row className='header_row'>
            <Col xs={12} className='title_style'>
              <span>
                CALCULATEUR DE CONSOMMATION D’EAU ANNUELLE
              </span>
            </Col>
          </Row>
        </header>
        <WaterForm></WaterForm>
      </Container>
    </Provider>
  );
}

export default App;
