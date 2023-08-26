import React from 'react'
import {Box, Card, CardBody,Text} from "@chakra-ui/react";
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

export default function Education() {
    return (
        <>
            <SectionTitle title={"Education"}/>

    <Card width="80%">
        <CardBody>
            <Text>

                Welcome to the hell of doing cool thing ...
            </Text>
        </CardBody>
    </Card>
<Educations/>








        </>)
}



function Educations() {
    const steps = [
        { title: 'Master of Science in Cybersecurity', description: "A Master's in Cybersecurity is a specialized program designed to equip students with advanced knowledge and skills in protecting digital systems, networks, and data from cyber threats. This comprehensive degree covers a wide range of topics, including cryptography, network security, risk management, digital forensics, ethical hacking, and more." },
        { title: "Bachelor's degree in Computer Science", description: "A Bachelor's degree in Computer Science is a comprehensive program designed to provide students with a strong foundation in computer science principles, programming languages, algorithms, and problem-solving skills. The program covers a diverse set of topics, enabling students to understand the core concepts of computing and apply them to various fields."},
        { title: 'Baccalauréat Scientifique', description: "Le Baccalauréat Scientifique est un diplôme d'études secondaires en Algeria qui met l'accent sur les matières scientifiques telles que les mathématiques, la physique, la chimie et les sciences de la vie. Il existe plusieurs spécialisations à l'intérieur du Baccalauréat Scientifique, chacune mettant l'accent sur une branche spécifique des sciences." },
    ]
    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })


    return (
        <Stepper index={activeStep} orientation='vertical' height='400px'>
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepIndicator>
                        <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                        />
                    </StepIndicator>

                    <Box flexShrink='2' width={"40%"}>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                    </Box>
                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    )
}

