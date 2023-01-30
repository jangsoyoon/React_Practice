import React, { createContext, useEffect,useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container} from 'react-bootstrap';
import header from './img/header.jpg'
import rainbow2 from './img/rainbow2.png'
import rainbow from './img/rainbow.png'
import sprinkle from './img/sprinkle.png'
import sprinkle1 from './img/sprinkle1.png'
import ballons from './img/ballons.png'
import data from './data.js';
import Detail from './routes/Detail.js'
import { Routes, Route, useNavigate, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
const img = [rainbow,rainbow2,sprinkle,sprinkle1,ballons];

export let Context1 = createContext()
function App() {
  let [shoes, setShoes] =useState(data);
  let [stock, setStock] = useState([10,11,12])
  const [count, setCount] = useState(0);

  //console.log(shoes)
  let navigate = useNavigate();
  return (
    <div className="App">

      
     <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/" className="Title">송만이</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>상품</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>이벤트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <button onClick={()=>{

           let temp = [];
           if(count ===0){
            axios.get('https://codingapple1.github.io/shop/data2.json')
           .then((결과)=>{
             //console.log(data)
             //let temp = [];
             temp.push(...data, ...결과.data);
             setShoes(temp)
             setCount(count+1);
           })
           .catch(()=>{

           })
           }else if(count===1){
            axios.get('https://codingapple1.github.io/shop/data3.json')
           .then((결과)=>{
             //console.log(data)
             //let temp = [];
             temp.push(...data, ...결과.data);
             setShoes(temp)
             setCount(count+1);
           })
           .catch(()=>{

           })
           }else{
            alert('더 이상 존재하는 상품이 없습니다!')
           }
           
        }}>버튼</button>
      <Routes>
        //!메인
        <Route path='/' element={
        <Main shoes={shoes}/>
        }/>
        //!상품
        <Route path='/detail/:id' 
        element={
          <Context1.Provider value={{stock}}>
          <Detail shoes={shoes} img={img}
          />
          </Context1.Provider>
        }/> //** 페이지 */
        
      
        //! Nested Routes about 뒤에 붙을 라우트들을 nest한 것.
        <Route path='/about' element={<About/>}>
        <Route path='member' element={<div>멤버임</div>}/>
        <Route path='location' element={<div>위치정보임</div>}/>
        </Route>
        <Route path='/event' element={<Event/>}>
        <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>}/>
        <Route path='two' element={<p>생일기념 쿠폰받기</p>}/>
        </Route>


        
        <Route path='*'
        element={ 
          <div>없는 페이지입니다.</div>
        }/>
      </Routes>
        


      
    </div>
  );
}

const Main =(shoes, navigate)=>{
  return(
    <>
    <div className='main-bg' style={{backgroundImage: 'url('+header+')'}}></div>
    <div className='container'>
    <div className='row'>
    <Loop shoes={shoes.shoes}/>
    </div>
    </div>
    </>

  )
}
const About = ()=>{
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet/>
    </div>
  )
}
const Event = ()=>{
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet/>
    </div>
  )
}
// const Detail =(data)=>{
//   return(
//   // <div className="container">
//   // <div className="row">
//   //  <Loop data={data.data}/>
//   //     <button className="btn btn-danger">주문하기</button> 
//   //   </div>
//   // </div>
//   <div className="container">
//   <div className="row">
//     <div className="col-md-6">
//       <img src={img[0]} width="100%" />
//     </div>
//     <div className="col-md-6">
//       <h4 className="pt-5">{data.data[0].title}</h4>
//       <p>{data.data[0].content}</p>
//       <p>{data.data[0].price}</p>
//       <button className="btn btn-danger">주문하기</button> 
//     </div>
//   </div>
// </div> 
//   )
// }
//!ㄴㅐ가 스스로 해냄!!!!!!! >_<
// const address = (info)=>{
//   //console.log(data)
//   document.location.href='/detail/'+info.id;
//   //e.preventDefault();
// }

const Loop=(shoes)=>{
    console.log(shoes.shoes);
  return(
    shoes.shoes.map((info, i)=>(
        // console.log(info.title),
        // console.log(index),
        <div className='col-md-4' key={i}>
       {/* <img src={img[i]} style={{width:100}} className='product' onClick={()=>address(info)}></img> */}
        <img src={img[i]} style={{width:100}} className='product' onClick={()=>document.location.href='/detail/'+info.id}></img>
        <h4 className='productName'>{info.title}</h4>
        <p>{info.content}</p>
        <p className='productPrice'>{info.price}</p>
        </div>
      )
    )
  )
}


export default App;
