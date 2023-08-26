
import {SocialIcon} from "react-social-icons";
import {Box, HStack, Link} from "@chakra-ui/react";
// TODO : use react icons
const Footer = () => {
    return (
        <Box id={"Footer"} as="footer" py={6} bg="#363636" color="white">
            <HStack justifyContent={"center"} padding={"20px"}>

                    <SocialIcon url="https://www.facebook.com/walid.menghour" />
                    <SocialIcon url="https://www.linkedin.com/in/walidmenghour/" />
                    <SocialIcon url="https://github.com/walidmenghour" />
                    <SocialIcon url="https://www.instagram.com/walid_menghour" />
            </HStack>
            <Box mt={4} textAlign="center">
                Designed by <Link href="https://spaider54.com" isExternal>Spider54</Link>
            </Box>
        </Box>
    );
};

export default Footer;
