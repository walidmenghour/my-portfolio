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
        { title: 'Cyber Security Engineer', description: "I have been working as a cybersecurity engineer since December 2023 at Air Algérie, specializing as a blue teamer in digital forensics and incident response." },
        { title: 'Freelancer ', description: "I work as a web developer remotely, primarily using the platform Fiverr, and I find clients through social media." },
    ]
    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })


    return (
        <Stepper index={activeStep} orientation='vertical' height='100%' colorScheme={"green"}>
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

