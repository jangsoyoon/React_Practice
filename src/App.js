import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container} from 'react-bootstrap';
import header from './img/header.jpg'
import rainbow2 from './img/rainbow2.png'
import rainbow from './img/rainbow.png'
import sprinkle from './img/sprinkle.png'
import { useState } from 'react';
import data from './data.js';


function App() {

  // let [shoes, setShoes] =useState()
  return (
    <div className="App">
     <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="Title">송만이</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#product">상품</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg' style={{backgroundImage: 'url('+header+')'}}></div>
      <div className='container'>
      <div className='row'>
      <Loop data={data}/>
      </div>
         

      </div>
    </div>
  );
}
const img = [rainbow,rainbow2,sprinkle];
const Loop=(data)=>{
  //  console.log(data);
  return(
    data.data.map((info, index)=>(
        // console.log(info.title),
        // console.log(index),
        <div className='col-md-4' key={index}>
        <img src={img[index]} style={{width:100}} className='product'></img>
        <h4 className='productName'>{info.title}</h4>
        <p>{info.content}</p>
        <p className='productPrice'>{info.price}</p>
        </div>
      )
    )
  )
}
export default App;
