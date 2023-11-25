import {Box, Container, Flex} from "@radix-ui/themes";
import {SkiParadiseNavbar} from "@/components/navbar/SkiParadiseNavbar";
import {SignIn} from "@/components/signin/SignIn";
import {Profile} from "@/components/profile/Profile";

export default function Page() {
    return (
        <Box>
            <Container size="1">
                <SkiParadiseNavbar/>
            </Container>
            <Container size="1">
                <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Profile/>
                </Flex>
            </Container>
        </Box>
    )
}