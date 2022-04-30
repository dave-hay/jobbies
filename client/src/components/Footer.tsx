import {styled} from '@mui/material/styles';

const FooterDiv = styled('div')`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 48px;
  text-align: center;
  justify-content: center;
  bottom: -20px;
`;

const FooterText = styled('p')`
    


`;

const Footer = () => {
    return (
        <FooterDiv>
            <FooterText>
                <a href={'https://davidhay.me/'}>
                    Hay Designs
                </a>
            </FooterText>
        </FooterDiv>
    )
}

export default Footer;