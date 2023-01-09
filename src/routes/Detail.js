import rainbow from '../img/rainbow.png'
import rainbow2 from '../img/rainbow2.png'
import sprinkle from '../img/sprinkle.png'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
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
const Detail =(data)=>{
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
    <div className="container">
      {show&&
        <div className='alert alert-warning' >
          2초이내 구매시 할인
      </div>}
      <YellowBtn color = "orange" >버튼</YellowBtn>
    <div className="row">
      <div className="col-md-6">
        <img src={img[id]} width="100%" />
      </div>
      <div className="col-md-6">
        <input onChange={(e)=>{setNum(e.target.value)}}></input>
        <h4 className="pt-5">{data.data[id].title}</h4>
        <p>{data.data[id].content}</p>
        <p>{data.data[id].price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
    )
  }

  export default Detail;