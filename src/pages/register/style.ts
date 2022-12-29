import styled from 'styled-components';

const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  @media (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 0 !important;
    & > div {
      margin-bottom: 40px !important;

  }
}
`;
// usando default pois é o único componente que será exportado por enquanto
export default NameWrapper;
