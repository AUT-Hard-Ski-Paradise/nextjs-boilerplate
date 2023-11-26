"use client"
import {Box, Container, Flex, Text} from "@radix-ui/themes";
import {SkiParadiseNavbar} from "@/components/navbar/SkiParadiseNavbar";
import {Profile} from "@/components/profile/Profile";
import {AdminView} from "@/components/admin/AdminView";
import {LiftList} from "@/components/lifts/LiftList";

export default function Page() {
    return (
        <Box>
            <Container size="1">
                <SkiParadiseNavbar isLogged={true}/>
            </Container>
            <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Text size={"9"} align={"center"}>Ski Resort - Admin</Text>
            </Flex>
            <Container size="2">
                <AdminView/>
            </Container>
        </Box>
    )
}