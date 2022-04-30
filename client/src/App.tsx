import React, {useState} from 'react';
import Header from "./components/Header";
import Input from "./components/Input";
import ResultsCard from "./components/ResultsCard";
import Footer from "./components/Footer";
import {
    MegaContainer,
    HeroMain,
    HeroContent,
    HeroImg,
    HeroImg2,
    StyledH1,
    StyledH2,
    StyledP} from "./components/Hero.styles";
import {ResultsContainer} from './components/Results.styles';
import LoadingWheel from './components/LoadingWheel';
import people from './images/people.svg';

import {Button, Stack} from '@mui/material';


type InputText = {
    what: string,
}

interface JobData {
    title: string,
    description: string,
}

function App() {
    const [what, setWhat] = useState<InputText>({what: ""});
    const [where, setWhere] = useState<InputText>({what: ""});
    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChangeWhat = (e: any) => {
        setWhat(e.target.value);
    }

    const handleChangeWhere = (e: any) => {
        setWhere(e.target.value);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const fetchJobData = async () => {
            setLoading(true);
            const response = await fetch(`https://jobbies-api.herokuapp.com/?what=${what}&where=${where}`);
            const data = await response.json();
            const dataKeys = data.results;
            await setJobData(dataKeys.map((job: JobData) => [job.title, job.description]))
            setLoading(false);
        }
        await fetchJobData()
    }

    return (
        <MegaContainer>
            {loading ? <LoadingWheel />: <div></div> }
            <Header/>
            <HeroContent>
                <HeroMain>
                    <StyledH1>Online Job Board</StyledH1>
                    <HeroImg2 src={people} alt={'people'}/>
                    <StyledH2>Find Your Dream Job Today.</StyledH2>
                    <StyledP>
                        Job boards are the best way for employers and job seekers to find each other online. We've
                        reviewed hundreds of job boards to find the best parts of each
                        one and create one that gives job seekers a trustworthy collection of the best jobs.
                    </StyledP>
                    <form onSubmit={handleSubmit}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Input label={"Dream Job"} name={"what"} changeHandler={handleChangeWhat} currentValue={what}/>
                            <Input label={"Location"} name={"what"} changeHandler={handleChangeWhere}
                                   currentValue={where}/>
                            <Button variant="contained" type={'submit'} value={"Submit"}>Search Now</Button>
                        </Stack>
                    </form>
                </HeroMain>
                <HeroImg src={people} alt={'people'}/>
            </HeroContent>
            <ResultsContainer>
                {jobData.map((job: any) => <ResultsCard title={job[0]} desc={job[1]}/>)}
            </ResultsContainer>
            <Footer />
        </MegaContainer>
    );
}

export default App;
