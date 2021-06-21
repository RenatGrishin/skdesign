import styled from "styled-components";
import arrowSVG from "../img/arrow.svg"
import loaging from "../img/loadingSVG.svg";


export const MainPage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`
export const MainPageStyle = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const FormBlockStyle = styled.form`
  width: 440px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 0 5px 20px #26353238;
  flex-shrink: 0;
`;
export const InputGroupStyle = styled.div`
	width: ${props=>props.width ? props.width : 'auto'};
  position: relative;
  margin-bottom: 20px;
  ${props=>props.show===true ? '' : 'display:none;'}
`;
export const InputTextStyle = styled.input`
	width: ${props=>props.width ? props.width : 'auto'};
	box-sizing: border-box;
  padding: 18px 15px;
  border-radius: 8px;
  border: 2px solid ${props=>props.status==='error' ? '#EB5E55' : '#E3E3E3'};
  font-size: 14px;
  &:focus{
   outline: none;
   border: 2px solid #0086A8;
  }
  &:focus+label{
   color: #0086A8;
  }
  ${props=>props.status==='error' ? '+label{color: #EB5E55;}' : ''}
  
 `;
export const LabelStyle = styled.label`
  font-size: 12px;
  color: #828282;
  background-color: #fff;
  padding: 0px 6px;
  position: absolute;
  top: -6px;
  left: 10px;
  z-index: 100;
`;
export const SelectStyle = styled.select`
	width: ${props=>props.width ? props.width : 'auto'};
	box-sizing: border-box;
  padding: 18px 15px;
  border-radius: 8px;
  border: 2px solid ${props=>props.status==='error' ? '#EB5E55' : '#E3E3E3'};
  font-size: 14px;
  appearance: none;
  background-image: url("${arrowSVG}");
  background-size: 11px auto;
  background-repeat: no-repeat;
  background-position: bottom 50% right 16px;
  &:focus{
   outline: none;
   border: 2px solid #0086A8;
  }
`;
export const Logo = styled.img`
  height: 70px;
  margin-bottom: 40px;
`;
export const H2Style = styled.h2`
  margin-bottom: 40px;
	font-size: 26px;
`
export const PStyle = styled.p`
	margin-bottom: 20px;
	font-size: 14px;
	line-height: 150%;
`;

export const SectionStyle = styled.section`
	margin-right: 60px;
	display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
export const SubmitStyle = styled.input.attrs({ type: 'submit' })`
 width: ${props=>props.width ? props.width : 'auto'};
 padding: 18px 25px;
 border: 0px;
 border-radius: 8px;
 background-color: #0086A8;
 font-size: 14px;
 color: #fff;
 &:hover{
  background-color: #007693;
 }
 &:active{
  background-color: #00657E;
 }
 &:disabled{
  background-color: ${props=>props.loading ? '#0086A8' : '#E3E3E3'};
  color: #828282;
  ${props=>props.loading 
  ? `background-image: url("${loaging}");
  background-size: 30px;
  background-position: center;
  background-repeat: no-repeat;`
  : ''
 }
`;
export const PErrorStyle = styled.p`
 margin-top: 8px;
 margin-left: 16px;
 font-size: 12px;
	color: #EB5E55;
`;

export const ShowInputsStyle = styled.div`
 font-size: 14px;
 margin-bottom: 26px;
 img{
  ${props => props.rotate===true ? 'transform: rotate(180deg);' : ''}
  width: 14px;
 }
`;

export const MySelectStyle = styled.div`
  width: ${props=>props.width ? props.width : 'auto'};
  position: relative;
	box-sizing: border-box;
  padding: 18px 15px;
  border-radius: 8px;
  border: 2px solid ${props=>props.status==='error' ? '#EB5E55' : '#E3E3E3'};
  ${props=>props.display===true ? 'border: 2px solid #0086A8;' : ''}
  font-size: 14px;
  appearance: none;
  background-image: url("${arrowSVG}");
  background-size: 11px auto;
  background-repeat: no-repeat;
  background-position: bottom 50% right 16px;
  &:focus{
   outline: none;
   border: 2px solid #0086A8;
  }
  +ul{
    ${props=>props.display===false ? 'display:none;' : ''}
    position: absolute;
    z-index: 200;
    border: 2px solid #E3E3E3;
    box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
    border-radius: 8px;
    background-color: #fff;
    cursor: pointer;
    font-size: 14px;
  }
  +ul li{
    list-style-type: none;
    padding: 7px 17px;
  }
  +ul li:hover{
    background-color: #FAFAFA;
  }
  +ul li:not(:last-of-type){border-bottom: 2px solid #E3E3E3;}
`;