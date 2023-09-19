import React from 'react';
import "../styles/Contact.css";
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    useToast, Box, VStack, HStack,
} from '@chakra-ui/react'







function Contact() {
    const toast = useToast();

    return (
        <Box id={"Contact"}>

            <VStack spacing={4} align={"flex-start"} w={"full"}>
                <VStack spacing={1} align={["flex-start","center"]} w={"full"}>

                    <h1 className="header_title">
                        Contact Us
                    </h1>
                </VStack>
                <FormControl isRequired>
                    <FormLabel>Subject</FormLabel>
                    <Input rounded={"none"} variant={"filled"} placeholder="Subject" />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" rounded={"none"} variant={"filled"} placeholder="email@domain.ext" />

                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder="Message" rounded={"none"} variant={"filled"} />
                </FormControl>

                <HStack w={"full"} justify={"space-around"} padding="20px">
                    <Button
                        //isLoading
                        loadingText="Submitting"
                        colorScheme="green"
                        variant="solid"
                        onClick={() =>
                            toast({
                                title: 'Message Sent',
                                description: "We successfully sent your message.",
                                status: 'success',
                                position: 'bottom-left',
                                duration: 9000,
                                isClosable: true,
                            })
                        }
                    >
                        Submit
                    </Button>
                    <Button
                        //isLoading
                        loadingText="Submitting"
                        colorScheme="red"
                        variant="outline"
                    >
                        Reset
                    </Button>
                </HStack>

            </VStack>
        </Box>
);
}

export default Contact;
