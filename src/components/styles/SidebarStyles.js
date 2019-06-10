import styled from 'styled-components';

const SidebarStyled = styled.div`
{
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    height: 100vh;
    width: 22%;
    right: 0;
    text-align: right;
    position: fixed;
    h4 {
        border-bottom: 1px solid rgba(255,255,255,0.2);
        font-size: 3.5rem;
        text-transform: uppercase;
        font-family: 'Roboto',sans-serif;
        font-style: oblique;
        font-weight: 700;
        line-height: 4.3rem;
        margin: 0px 0px 15px 0px;
        padding-right: 20px;
        padding-left: 20px;
    }
}
`;

export default SidebarStyled;