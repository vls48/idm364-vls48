import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color: white;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 7px;
  width: 100%;
  div{
    position: fixed;
    height: ${props => (props.fullheight ? '100vh' : '25px')};
  }
  h1{
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