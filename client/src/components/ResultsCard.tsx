import Card from '@mui/material/Card';
import {styled} from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// TODO: Pick one card action

const StyledCard = styled(Card)`
    margin: 3% 0;
  //max-height: 250px;
  //max-width: 250px;
`;

const DescTypography = styled(Typography)`
    text-overflow: ellipsis;
`;

const ResultsCard = ({title, desc}: { title: string, desc: string }) => {
    return (
        <StyledCard sx={{minWidth: 275}} elevation={3}>
            <CardActionArea>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <DescTypography variant="body2">
                    {desc}
                </DescTypography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </CardActionArea>
        </StyledCard>
    )

}

export default ResultsCard;