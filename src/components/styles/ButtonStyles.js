import styled from 'styled-components';

const AdminButton = styled.button`
  background-color: white;
  color: ${props => (props.color ? 'white' : 'grey')};
  width: 100%;
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
`;

const AddToCartButton = styled.button`
  color: ${props => (props.white ? 'white' : 'rgb(229, 1, 1)')};
  background-color: rgba(0,0,0,0.5);
  font-size: 0.75rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  border: solid 0.75spx;
  border-radius: 3px;
  height: 30px;
  border-color: ${props => (props.white ? 'white' : 'rgb(229, 1, 1)')};
`;

const ResetButton = styled.button`
  color: white;
  box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.25);
  background-color: red;
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  border-radius: 2px;
  font-style: oblique;
  width: 150px;
  height: 25px;
  padding: 5px;
  border: none;
  display: block;
  margin: 0px auto 25px auto;
`;

export { AdminButton, AddToCartButton, ResetButton };