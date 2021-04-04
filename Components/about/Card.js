import styled from 'styled-components'
import quote from '../../public/images/quote.svg'
import Text from '../Text'

const Card = ({content, name}) => {
    return (
        <Div>
            <svg viewBox="0 0 42 31">
                <path d="M41.334 0.891994C40.1953 5.60933 39.0567 10.7333 37.918 16.264C36.7793 21.7133 35.8847 26.5527 35.234 30.782H23.644L22.79 29.44C23.9287 25.1293 25.474 20.412 27.426 15.288C29.378 10.0827 31.3707 5.284 33.404 0.891994H41.334ZM18.764 0.891994C17.6253 5.60933 16.4867 10.7333 15.348 16.264C14.2093 21.7133 13.3147 26.5527 12.664 30.782H1.196L0.464 29.44C1.60267 25.1293 3.10733 20.412 4.978 15.288C6.93 10.0827 8.92267 5.284 10.956 0.891994H18.764Z"></path>
            </svg>
            <Content>
                <Text sm content={content} />
                <Text sm i content={name} />
            </Content>
        </Div>
    );
}

export default Card;

const Div = styled.div`
    background: #EDEBE8;
    border-radius: 50px;
    padding: 2rem 3rem;
    margin: 1rem;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 5%);
    justify-content: sapce-between;
    align-items: center;

    display: flex;
    flex-direction: row;
    transition: all 0.4s ease;

    &:hover{
        box-shadow: 0px 0px 12px 8px rgba(0, 0, 0, 10%);
    }
    
    svg {
        fill: #314654;
        width: 8rem;
        align-self: flex-start;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`