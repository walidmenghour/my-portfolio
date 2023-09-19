import React from 'react'
import {
    Card,
    CardBody,
    Heading,
    Text,
    Stack,
    Image,
    CardFooter,
    Button,
    ModalContent,
    ModalOverlay, Modal, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure
} from "@chakra-ui/react";
import SectionTitle from "../components/SectionTitle"; // important section
import "../styles/Projects.css"; // style
import { projects } from "../data/projects"; // data
export default function Projects() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div id={"Projects"}>
            <SectionTitle title={"Projects"}/>
<div className={"Projects"}>

            {projects.map((prj)=> <div>

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
                    src={prj.image}
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
                        <Button onClick={onOpen} variant='outline' colorScheme='green'>
                            See More
                        </Button>

                    </CardFooter>
               </Stack>

                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{prj.title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {prj.description}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Card>

        </div>
            )}
</div>

        </div>
    )
}

