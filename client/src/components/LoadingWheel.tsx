import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';

const WheelBox = styled(Box)`
  position: absolute;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

const Progress = styled(CircularProgress)`
    margin: auto;
`;


export default function LoadingWheel() {
    return (
        <WheelBox sx={{display: 'flex'}}>
            <Progress />
        </WheelBox>
    );
}