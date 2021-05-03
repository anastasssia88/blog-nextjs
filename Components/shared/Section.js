import styled from 'styled-components'

const Section = (props) => {
    return (
        <StyledSection light={props.light} dark={props.dark} auto={props.auto} redGradient={props.redGradient} mdP={props.mdP}>
            {props.children}
        </StyledSection>
    );
}

export default Section;

const StyledSection = styled.section`
  min-height: 100vh;
  height: ${props => props.auto ? 'auto' : '100vh'};
  width: 100%;
  
  background: ${props => props.light && '#EDEBE8'};
  background: ${props => props.dark && '#314654'};
  background: ${props => props.redGradient && '#BE4357'};

  padding: 2rem 20rem;
  padding: ${props => props.mdP && '3rem 20rem 8rem 20rem'};
  padding: ${props => props.smP && '3rem 20rem'};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  
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