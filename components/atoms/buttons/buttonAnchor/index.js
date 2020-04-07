import styled from 'styled-components';
import Ink from 'react-ink';
import { Link } from 'react-scroll';

export default function ButtonAnchor(props) {
  const {
    to,
    text,
    color,
    outline,
  } = props;

  return(
    <Link to={to} spy={true} smooth={true} duration={800}>
      <a>
        <Button>
          <Ink style={{ color: 'black' }} />
          <Text>{text}</Text>
        </Button>
      </a>
    </Link>
  )
}

const Button = styled.div`
  position: relative;
`;
const Text = styled.div`

`;