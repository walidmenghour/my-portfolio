import React from 'react'
import {Box} from "@chakra-ui/react";
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from '@chakra-ui/react'
import SectionTitle from "../components/SectionTitle";
import "../styles/Education.css";
export default function Experience() {
    return (
        <div id={"Experience"}>
            <SectionTitle title={"Experience"}/>
            <div className={"Experience"}>
                <Experiences/>
            </div>
        </div>
        )
}



function Experiences() {
    const steps = [
        { title: 'Freelancer ', description: "I works as a web developer remotely my favor platform upwork & fiver ..." },
        { title: 'Internship Project', description: "This is One of the best project that i realised in my life i can do everything this is the time to advance my carier" },
    ]
    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })


    return (
        <Stepper index={activeStep} orientation='horizontal' height='100%' colorScheme={"green"}>
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepIndicator>
                        <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                        />
                    </StepIndicator>

                    <Box width={"60%"}>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                    </Box>
                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    )
}

