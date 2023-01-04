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

  let [shoes, setShoes] =useState()
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
      <Card/>
      </div>
         

      </div>
    </div>
  );
}
function Card(){
  return (
    <div className="col-md-4">
      <img src={rainbow} width="80%" />
      <h4>상품명</h4>
      <p>상품정보</p>
    </div>
  )
}
function Loop(data){
  return(
    // data.map((info, i)=>{
      console.log(data.data[0].title),
      <div className='col-md-4'>
      <img src={data.data[0].title} style={{width:100}} className='product'></img>
      <h4 className='productName'>{data.data[0].title}</h4>
      <p>{data.data[0].content}</p>
      <p className='productPrice'>{data.data[0].price}</p>
      </div>

    // })
    
  )
}
export default App;
