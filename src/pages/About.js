import React from 'react'
import {Button, Stack} from "@chakra-ui/react";
import "../App.css";
import "../styles/About.css";
import my_image from "../images/my_image.jpg";
import { ArrowForwardIcon, DownloadIcon } from "@chakra-ui/icons";
import SectionTitle from "../components/SectionTitle";

import resume from "../../src/data/cv.pdf";
export default function About() {
   // const toast = useToast();

    return (
        <div id="About" className="About">
            <SectionTitle title={"About Me"}/>
            <div className="container">
                <div className="left">
                    <p className="About_me">
                    I am a Cyber Security Engineer at Air Algerie, specializing in digital forensics and incident response. I have a strong passion for cybersecurity and continually seek out new challenges.                        
                    </p>
                    <div className="buttons_about">
                        <Stack direction='row' spacing={6}>
                            <a href={resume} target={"_blank"} download={"resume"} rel='noreferrer'>
                                <Button leftIcon={<DownloadIcon />} colorScheme='teal' variant='solid' downlond>
                                    RESUME
                                </Button>
                            </a>
                            <a href={"#Contact"}>
                            <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                                HIRE ME
                            </Button>
                            </a>

                        </Stack>
                    </div>
                </div>
                <div className="right">
                    <img src={my_image} alt={"walid mengour"}/>
                    </div>
            </div>

        </div>
    )
}
