"use client"
import {Button, Card, Flex, Heading, Link, Separator, Text} from "@radix-ui/themes";
import {useCallback, useEffect, useState} from "react";
import {User} from "@/types";
import axios from "axios";
import * as React from "react";



interface Props{

}
export const Profile: React.FC<Props> = (props) => {
    const [user, setUser] = useState<User>();
    const [loaded, setLoaded] = useState(Boolean);

    const fetchUserAuth = useCallback(async () => {
        const { data: userResponse } =
            await axios.get<User>(
                `http://localhost:8085/api/auth`, {withCredentials: true}
            ).catch();
        setUser(userResponse);
        if (user?.username==undefined){
            // window.location.replace("/")
        }
        setLoaded(true)
    }, []);

    useEffect(() => {
            void fetchUserAuth();

    }, [fetchUserAuth]);


    function delete_cookie(name: string) {
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    const handleLogoutSubmit = (e:any) => {

        // Handle validations
        axios
            .post("http://localhost:8085/api/logout",{withCredentials: true, headers:{"Content-Type":"application/json"}} )
            .then(response => {
                console.log(response)
                setLoaded(false)
                // console.log(window.location.hostname)
                // Handle response
            })

        setLoaded(false)
        delete_cookie("jwt")

    }

    return (
        <Card style={{maxWidth: 800, margin: '1vh', padding:'3'}}>
            <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Heading>{user?.full_name} - {user?.username}</Heading>
            </Flex>
            <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Text>Permission: {user?.permission}</Text>
            </Flex>
            <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Text>{user?.email}</Text>
            </Flex>
            <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button id={"logoutSubmit"} onClick={handleLogoutSubmit} >Logout</Button>
            </Flex>

        </Card>
    );

}