"use client"
import {Flex, Text, Button, Box, Container, Link, Grid, Heading} from '@radix-ui/themes';
import {SkiParadiseNavbar} from "@/components/navbar/SkiParadiseNavbar";
import {SkisList} from "@/components/skis/SkisList";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {HealthResponse} from "@/types";
export default function SkiParadiseWebMain() {
    const [healthCheck, setHealthCheck] = useState<string>();

    const fetchUserAuth = useCallback(async () => {
        const { data: healthResponse } =
            await axios.get<HealthResponse>(
                `http://localhost:8080/api/auth`, {withCredentials: true}
            );
        console.log(healthResponse)
        // @ts-ignore
        setHealthCheck(healthResponse);
    }, []);

    useEffect(() => {
        void fetchUserAuth();
    }, [fetchUserAuth]);

    return (
            <Box>
                <Container size="1">
                    <SkiParadiseNavbar/>
                </Container>
                <Container size="4">
                    <Heading align={"center"}>Ski Resort</Heading>
                    <SkisList/>
                </Container>
        </Box>

    );
}