import styled from 'styled-components';
import Ink from 'react-ink';

export default function ButtonClick(props) {
  const {
    onClick,
    text,
    color,
    outline,
  } = props;

  return(
    <Button onClick={onClick}>
      <Ink style={{ color: 'black' }} />
      <Text>{text}</Text>
    </Button>
  )
}

const Button = styled.button`
  position: relative;
`;
const Text = styled.div`

`;