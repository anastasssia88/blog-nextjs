import styled from "styled-components"
import RedCurve from "../../public/images/curve-red.svg"


export const Section = styled.section`
  min-height: 100vh;
  background: ${ props => props.dark && "#314654" };
  background-color: ${ props => props.light && "#EDEBE8"};
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image:  ${ props => props.bgRedCurve && `url(${RedCurve})`};
  background-position: ${ props => props.bgRedCurve && "bottom center"};
`

export const Main = styled.div`
  padding: 2rem 20rem 0rem 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-items: ${ props => props.alignLeft && "flex-start"};

  @media (max-width: 1024px) {
    height: 100vh;
    padding: 1rem 10rem;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 2rem;
  }

  @media (min-width: 1920px) {
    padding: 1rem 30rem;
  }
`