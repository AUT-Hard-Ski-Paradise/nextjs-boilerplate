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
        if (user==undefined){
            console.log("gatyaaaaa")
            // window.location.replace("/")
        }
        setLoaded(true)
    }, []);

    useEffect(() => {
        if (!loaded){
            console.log("xdd")
            void fetchUserAuth();
        }
    }, [fetchUserAuth]);

    // const getCookie = (name: string) => {
    //     return document.cookie.split(';').some(c => {
    //         return c.trim().startsWith(name + '=');
    //     });
    // }
    // const deleteCookie = (name: string, path: string, domain: string) => {
    //     if (getCookie(name)) {
    //         document.cookie = name + "=" +
    //             ((path) ? ";path=" + path : "") +
    //             ((domain) ? ";domain=" + domain : "") +
    //             ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    //     }
    // }

    // deleteCookie("jwt","/api",window.location.hostname)

    function delete_cookie(name: string) {
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    const handleLogoutSubmit = (e:any) => {

        // Handle validations
        axios
            .post("http://localhost:8080/api/logout",{withCredentials: true, headers:{"Content-Type":"application/json"}} )
            .then(response => {
                console.log(response)
                setLoaded(false)
                // console.log(window.location.hostname)
                // Handle response
            })
        // Prevent the default submit and page reload
        // e.preventDefault()
        // setUser(undefined)
        setLoaded(false)
        delete_cookie("jwt")
        // deleteCookie([][],"jwt")
        // localStorage.clear()
        // window.location.replace("/")

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
            <Button id={"logoutSubmit"} onClick={handleLogoutSubmit} formAction={"auth"}>Logout</Button>
            </Flex>

        </Card>
    );

}