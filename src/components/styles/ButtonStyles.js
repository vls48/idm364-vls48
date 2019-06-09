import styled from 'styled-components';

const AdminButton = styled.button`
  background-color: red;
  font-size: ${props => (props.huge ? '200%' : '100%')};
  span {
    font-size: 200%;
  }
`;

const AddToCartButton = styled.button`
  background-color: rgba(222, 24, 33, 0.4);
  color: white;
  border: solid white 1px;
  height: 40px;
  font-size: ${props => (props.huge ? '200%' : '100%')};
  span {
    font-size: 1rem;
  }
`;

export { AdminButton, AddToCartButton };