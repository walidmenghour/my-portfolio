import React from 'react';
import {Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator,Tag, Flex} from '@chakra-ui/react';
import SectionTitle from "../components/SectionTitle";

import "../styles/Skills.css";

import {skillSets} from '../data/skills';


export default function Skills() {
    return (
        <div id="Skills" className="skills">
            <SectionTitle title="Skills" />

            <Tabs variant="enclosed-colored" colorScheme="green" align="center" bg="#E5E4D3FF">
                <TabList>
                    {skillSets.map((skillSet, index) => (
                        <Tab key={index} _selected={{ color: 'white', bg: 'teal.700' }}>{skillSet.title}</Tab>
                    ))}
                </TabList>
                <TabIndicator mt="-1.5px" height="5px" bg="#E5E4D3FF" borderRadius="2px" />
                <TabPanels>
                    {skillSets.map((skillSet, index) => (
                        <TabPanel key={index}>
                            <Flex display={"flex"}  justifyContent={"center"} flexWrap={"wrap"}>
                                {skillSet.skills.map((skill, skillIndex) => (
                                    <Tag
                                         padding={"15px"}
                                         margin={"10px"}
                                        key={skillIndex}
                                        size="lg"
                                        variant="solid"
                                        borderRadius="full"
                                        colorScheme="teal">
                                        {skill}
                                    </Tag>
                                ))}
                            </Flex>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </div>
    );
}
