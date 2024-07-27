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
export default function Education() {
    return (
        <div id={"Education"}>
            <SectionTitle title={"Education"}/>
            <div className={"Education"}>
                <Educations/>
            </div>
        </div>
        )
}



function Educations() {
    const steps = [
        { title: 'Master of Science in Cybersecurity', description: "I graduate with a Master's in Cybersecurity from the University of Science and Technology Houari Boumediene in July 2023 ,A Master's in Cybersecurity is a specialized program designed to equip students with advanced knowledge and skills in protecting digital systems, networks, and data from cyber threats. This comprehensive degree covers a wide range of topics, including cryptography, network security, risk management, digital forensics, ethical hacking, and more." },
        { title: "Bachelor's degree in Computer Science", description: "A Bachelor's degree in Computer Science is a comprehensive program designed to provide students with a strong foundation in computer science principles, programming languages, algorithms, and problem-solving skills. The program covers a diverse set of topics, enabling students to understand the core concepts of computing and apply them to various fields."},
        { title: 'Scientific baccalaureate', description: "The Scientific Baccalaureate is a secondary school diploma in Algeria that emphasizes scientific subjects such as mathematics, physics, chemistry and life sciences. There are several specializations within the Scientific Baccalaureate, each emphasizing a specific branch of science." },
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

