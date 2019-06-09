import styled from 'styled-components';

const AdminButton = styled.button`
  background-color: white;
  color: ${props => (props.color ? 'white' : 'grey')};
  span {
    font-size: 200%;
  }
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
  background-color: red;
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  border-radius: 2px;
  font-style: oblique;
  width: 100px;
  height: 25px;
  padding: 5px;
  border: none;
`;

export { AdminButton, AddToCartButton, ResetButton };