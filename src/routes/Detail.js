import '/Users/ddoyoon/react/shop/src/App.css';
import rainbow from '../img/rainbow.png'
import rainbow2 from '../img/rainbow2.png'
import sprinkle from '../img/sprinkle.png'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import {Nav} from 'react-bootstrap'
import {Context1} from './../App.js'
let YellowBtn = styled.button`
  background : ${props => props.color};
  color : ${props => props.color === 'blue' ? 'white' : 'black' };
  padding : 10px;
  border : none
    
`;

let BlackBox = styled.div`
  background : grey;
  padding : 20px;
`;
const img = [rainbow,rainbow2,sprinkle];
const Detail =(shoes)=>{
  let {stock} = useContext(Context1)
  let [fade, setFade] = useState('')
  useEffect(()=>{
    setTimeout(()=>{setFade('end')},100)
    return()=>{
      setFade('')
    }
  },[])
  let [tab, setTab] = useState(0);
  const [show,setShow] = useState(true);
  let [num, setNum] = useState('');
  useEffect(()=>{
    setTimeout( ()=>{ setShow(false) }, 2000);
    if(isNaN(num)=== true){
      alert('숫자만 입력해주세요');
    }
  },[num])
  
  let {id} = useParams();
    return(
    // <div className="container">
    // <div className="row">
    //  <Loop data={data.data}/>
    //     <button className="btn btn-danger">주문하기</button> 
    //   </div>
    // </div>
    <div className={`start ${fade}`}>
    <div className="container">
      {show&&
        <div className='alert alert-warning' >
          2초이내 구매시 할인
      </div>}
      <YellowBtn color = "orange" >버튼</YellowBtn>
    <div className="row">
      <div className="col-md-6">
        {stock[0]}
        <img src={img[id]} width="100%" />
      </div>
      <div className="col-md-6">
        <input onChange={(e)=>{setNum(e.target.value)}}></input>
        <h4 className="pt-5">{shoes.shoes[id].title}</h4>
        <p>{shoes.shoes[id].content}</p>
        <p>{shoes.shoes[id].price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>

    <Nav variant="tabs"  defaultActiveKey="link0">  
    {/* //!defaultActiveKey->기본으로 눌려있는 탭 설정 */}
    <Nav.Item>
      <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
    </Nav.Item>
</Nav>
<Tab tab={tab}></Tab>





  </div> 
  </div>
    )
  }

const Tab = ({tab})=>{
  let [fade, setFade] = useState('')
  useEffect(()=>{
    setTimeout(()=>{setFade('end')},100)
    return()=>{
      setFade('')
    }
  }, [tab])
    return(
      <div className={`start ${fade}`}>
        {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][tab]}
      </div>
    )
}
      //  return (
      //  <div className="end">
      //  {  [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
      //  </div>)
      // }

  export default Detail;