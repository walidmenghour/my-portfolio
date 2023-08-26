import React from 'react'
import {Button, Stack} from "@chakra-ui/react";
import "../App.css";
import "../styles/About.css";
import my_image from "../images/my_image.jpg";

import { ArrowForwardIcon, DownloadIcon } from "@chakra-ui/icons";
import SectionTitle from "../components/SectionTitle";

export default function About() {
    return (
        <div id="About" className="About">
            <SectionTitle title={"About Me"}/>
            <div className="container">
                <div className="left">
                    <p className="About_me">
                        I'm a graduate in Cybersecurity Engineering from USTHB in the year
                        2023. My journey began when I was 12 years old, prompted by an
                        incident where someone hacked into my father's computer and sent
                        him a screenshot of the desktop. This event ignited my interest,
                        motivating me to embark on a journey of research. I delved into
                        learning programming languages such as Python, PHP, and others,
                        while also acquiring knowledge in networking. Additionally, I
                        explored tools like BackTrack .
                    </p>
                    <div className="buttons_about">
                        <Stack direction='row' spacing={6}>
                            <Button leftIcon={<DownloadIcon />} colorScheme='teal' variant='solid'>
                                Resume
                            </Button>
                            <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                                Contact ME
                            </Button>

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
