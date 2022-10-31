import styled from "styled-components";

const Wrapper = styled.div`
 text-align: center;
`

const Title = styled.div`
  margin-bottom: 0.75rem;
`



const WeatherItem = ({
    title,
    children
}) => (
    <Wrapper>
        <Title>{title}</Title>
        <div>{children}</div>
    </Wrapper>
)

export default WeatherItem;