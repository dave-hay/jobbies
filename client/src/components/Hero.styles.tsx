import {styled} from '@mui/material/styles';

export const MegaContainer = styled('div')`
    background: #eff2f9;
`;

export const HeroContent = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 90vh;
  @media screen and (max-width: 900px) {
    margin: 0 20%;
    width: auto;
  }
`;

export const HeroMain = styled('div')`
  text-align: center;
  width: 40%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

export const HeroImg = styled('img')`
  justify-self: end;
  margin-left: auto;
  width: 60%;
  flex: 1 1 auto;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const HeroImg2 = styled('img')`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
    justify-self: center;
    margin: auto;
    width: 60%;
    flex: 1 1 auto;
  }
`;

// const BackgroundBox = styled(Box)`
//   background-image: url(${team});
//   background-repeat: no-repeat;
//   background-size: cover;
//   width: 100%;
//   height: 100vh;
// `;

export const StyledH1 = styled('h1')`
  font-weight: 300;
  font-size: 1rem;
  color: deepskyblue;

`;

export const StyledP = styled('p')`
  margin: 20px 0;
  font-size: 1.1rem;
  line-height: 1.5rem;
  justify-self: start;

`;

export const StyledH2 = styled('h1')`
    font-size: 5rem;
  margin-bottom: auto;
  @media screen and (max-width: 900px) {
    font-size: 4rem;
  }

`;