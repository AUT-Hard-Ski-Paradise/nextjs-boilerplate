import {Box, Container, Flex, Heading, Text} from "@radix-ui/themes";
import {SkiParadiseNavbar} from "@/components/navbar/SkiParadiseNavbar";
import {LiftList} from "@/components/lifts/LiftList";
import {SignIn} from "@/components/signin/SignIn";

export default function Page() {
    return (
        <Box>
            <Container size="1">
                <SkiParadiseNavbar isLogged/>
            </Container>
            <Container size="1">
                <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <SignIn/>
                </Flex>
            </Container>
        </Box>
    )
}