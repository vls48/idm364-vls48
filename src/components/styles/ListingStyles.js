import styled from 'styled-components';

const ListingStyle = styled.div`
  width: 32%;
  margin: 0px 0px 40px 0px; 
  color: white;
  .overlaycont{
    position: relative;
    width: 77%;
    height: 100%;
    display: inline-block;
  }
  button{
    margin: 5px;
  }
  img{
    background-color: red;
    width: 100%;
    float: left;
    display: block;
    overflow: hidden;
    box-shadow: 0px 0px 14px -1px rgba(0,0,0,0.87);
  }
  &:hover .infocont {
    visibility: visible;
    opacity: 1;
  }
  &:hover .gradient {
    visibility: visible;
    opacity: 1;
  }
  .infocont{
    color: white;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    position: absolute;
    bottom: 0;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    h2{
      text-transform: uppercase;
      margin: 0px 0px 0px 15px;
      font-size: 1.5rem;
      font-weight: 700;
      text-shadow: 1px 1px 2px rgba(35,0,0,0.95);
    }
    .name{
      margin: 0px 0px 10px 15px;
    }
    .price{
      font-weight: 400;
      font-style: oblique;
      font-size: 0.9rem;
    }
    .status {
      font-size: 0.9rem;
      font-weight: 400;
      text-transform: capitalize;
      color: rgba(255,255,255, 0.75);
    }
    p{
      margin: 15px 10px 15px 15px;
      font-size: 0.8rem;
      font-weight: 300;
      text-shadow: 1px 1px 2px rgba(35,0,0,0.95);
    }
  }
  .gradient{
    background-image: linear-gradient(rgb(255,0,0, 0.3), rgba(105,0,0,0.65), rgba(75,0,0,0.98));
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .buttonscont{
    display: flex;
    width: 77%;
    padding-top: 10px;
    justify-content: center;
  }
`;

const CartListingStyle = styled.div`
  width: 100%;
  margin: 0px; 
  padding: 0px 10px 5px 0px;
  color: white;
  font-family: 'Roboto',sans-serif;
  ul{
    margin: 0;
  }
    h2{
      text-transform: uppercase;
      margin: 0px 0px 0px 10px;
      font-size: 1rem;
      font-weight: 500;
      display: inline-block;
    }
    .name{
      margin: 0px 10px 10px 0px;
    }
    .price{
      font-weight: 700;
      font-style: oblique;
      font-size: 0.9rem;
    }
    .amount {
      font-size: 0.9rem;
      font-weight: 500;
      text-transform: lowercase;
      color: rgba(255,255,255,0.75);
    }
`;

const AdminListingStyle = styled.div`
  margin: 15px; 
  padding: 15px;
  border-radius: 5px;
  background-color: rgba(255,255,255);
  box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  color: rgb(40,40,40);
  font-family: 'Roboto',sans-serif;
  label{
    display: block;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
  }
  input, select, textarea{
    width: 100%;
    border-radius: 5px;
    border: solid 1px darkgrey;
    height: 25px;
    color: rgb(40,40,40);
    box-sizing : border-box;
    margin-bottom: 15px;
  }
  img{
    background-color: red;
    width: 175px;
    float: left;
    display: block;
    overflow: hidden;
    box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.37);
  }
  .fields{
    display: inline-block;
    padding-left: 15px;
  }
`;

export { ListingStyle, CartListingStyle, AdminListingStyle };