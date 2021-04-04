import styled from 'styled-components'


const about = () => {
    return (
        <Section>
            Enter
        </Section>
    );
}

export default about;

const Section = styled.section`
  height: 100vh;
  width: 100%;
  background: #EDEBE8;
  padding: 2rem 18rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 100vh;
    padding: 1rem 10rem;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 2rem;
  }
`