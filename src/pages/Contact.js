import React from 'react';
import "../styles/Contact.css";
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Stack,
} from '@chakra-ui/react'

function Contact() {
    return (
        <div id={"Contact"}>
            <h1 className="header_title">
                Contact Us
            </h1>
            <div className="left form_contact">
                <form>
                    <FormControl isRequired>
                        <FormLabel>Subject</FormLabel>
                        <Input placeholder="Subject" />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" placeholder={"example@domain.com"}/>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Message</FormLabel>
                        <Textarea placeholder="Message" />
                    </FormControl>

                    <Stack direction="row" spacing={4} padding="20px">
                        <Button
                            //isLoading
                            loadingText="Submitting"
                            colorScheme="green"
                            variant="solid"
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
                    </Stack>
                </form>
            </div>
        </div>
    );
}

export default Contact;
