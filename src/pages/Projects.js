import React from 'react'
import {Card, CardBody, Heading,Text,Stack,Image, CardFooter,Button} from "@chakra-ui/react";
import SectionTitle from "../components/SectionTitle";
import "../styles/Projects.css";

export default function Projects() {

    const projects=[
        {'title':'DESIGN AND SIMULATION OF A SMART FIREWALL','description':'Create a personal portfolio website to showcase your skills, projects, and experiences. Include sections for your resume, portfolio gallery with images and descriptions of your projects, and a contact form for potential clients or employers to get in touch','image':'#'},
        {'title':'INTRUSUIN DETECTION SYSTEM BASED AGENT','description':'Build a fully functional e-commerce platform where users can browse products, add them to the cart, and make purchases. Implement user authentication, a search feature, product categories, and a secure checkout process with payment integration.','image':'#'},
        {'title':'LOGGING SYSTEM','description':'Develop a web-based application for managing tasks and to-do lists. Users should be able to create tasks, set due dates, mark tasks as complete, and organize tasks into projects. Include user registration, authentication, and the ability to prioritize tasks.','image':'#'},
        {'title':'APPLICATION WEB DEPLOMACHAIN','description':'Design an online platform for hosting and accessing courses. Instructors can create and upload courses, including video lectures, quizzes, and assignments. Students can enroll in courses, track their progress, and receive completion certificates. Implement a user-friendly interface and a responsive design.','image':'#'},
        {'title':'APPLICATION MOBILE CARCARE','description':'Build a dashboard that aggregates data from various social media platforms, providing users with insights into their social media performance. Users should be able to connect their accounts, view metrics like follower count and engagement rates, and generate customizable reports.','image':'#'},
    ];

    return (
        <div id={"Projects"}>
            <SectionTitle title={"Projects"}/>
<div className={"Projects"}>

            {projects.map((prj)=>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                padding={"20px"}
                margin={"20px"}
                bgColor={"#E5E4D3FF"}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt={prj.title}
                />

                <Stack width="80%">
                    <CardBody>
                        <Heading size='md'>{prj.title}</Heading>

                        <Text py='2'>
                            {prj.description}
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            See More
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
            )}
</div>

        </div>
    )
}

