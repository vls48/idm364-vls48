import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color: white;
  width: 100%;
  position: relative;
  .box{
    position: absolute;
    width: 100%;
    background-color: rgb(255,255,255,0.85);
    padding: 0px;
    margin: 0px auto;
    top: 20;
    transition: height 0.3s ease-out;
    height: ${props => (props.fullheight ? '0px' : '120vh')};
  }
  h1{
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 7px;
    font-size: 1.1rem;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }
  a{
      color: rgb(60,60,60);
      text-decoration: none;
  }
`;

export default HeaderStyled;