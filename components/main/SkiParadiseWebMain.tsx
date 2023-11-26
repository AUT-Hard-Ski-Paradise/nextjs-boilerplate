"use client"
import {Flex, Text, Button, Box, Container, Link, Grid, Heading} from '@radix-ui/themes';
import {SkiParadiseNavbar} from "@/components/navbar/SkiParadiseNavbar";
import {LiftList} from "@/components/lifts/LiftList";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {HealthResponse, User} from "@/types";
import {isNull} from "util";
export default function SkiParadiseWebMain() {
    const [user, setUser] = useState<User>();
    const [isLogged, setIsLogged] = useState(Boolean);
    const [loaded, setLoaded] = useState(Boolean);

    const fetchUserAuth = useCallback(async () => {
        const { data: userResponse } =
            await axios.get<User>(
                `http://localhost:8085/api/auth`, {withCredentials: true}
            ).catch();
        // @ts-ignore
        setUser(userResponse);
        console.log("asdasdasd: "+userResponse.username)
        if (userResponse.username!=undefined){
            setIsLogged(true);
        }

    }, []);

    useEffect(() => {
            void fetchUserAuth();
    }, [fetchUserAuth]);

    return (
            <Box>
                <Container size="1">
                    <SkiParadiseNavbar isLogged={isLogged} permission={user?.permission}/>
                </Container>
                <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Text size={"9"} align={"center"}>Ski Resort</Text>
                </Flex>
                <Container size="4">
                    <LiftList/>
                </Container>
        </Box>

    );
}