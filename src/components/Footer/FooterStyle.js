import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ;
  text-align: left;
`;
   
export const Row = styled.div`
  display: ${({ display }) => (display ? display : "flex")};
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "row")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? test : "none")};
  width:  ${({ w }) => ( w ? w : "100%" )};
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  margin: ${({ m }) => ( m ? m : "none" )};
  padding: ${({ p }) => ( p ? p : "none" )};
  max-width: ${({ mxw }) => ( mxw ? mxw : "none" )};
  max-height: ${({ mxh }) => ( mxh ? mxh : "none" )};
  min-width: ${({ mnw }) => ( mnw ? mnw : "none" )};
  min-height: ${({ mnh }) => ( mnh ? mnh : "none" )};
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color:  var(--primary);
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;