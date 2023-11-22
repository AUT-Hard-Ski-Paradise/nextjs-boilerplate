"use client"
import * as React from "react";
import {Box, Button, Card, Flex, Tabs, Text, TextField} from "@radix-ui/themes";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import "./style.css"
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {HealthResponse} from "@/types";
import {id} from "postcss-selector-parser";
import {isNullOrUndefined} from "util";


interface Props{

}

export const SignIn: React.FC<Props> = (props) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [full_name, setFullName] = useState()
    const [username, setUsername] = useState()
    const [loginMessage, setLoginMessage] = useState<string>()

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
    }, [fetchUserAuth, username]);


    const handleFullNameChange = (e:any) =>{
        if (e.target.value !=undefined){
            setFullName(e.target.value);
        }
    }
    const handleUsernameChange = (e:any) =>{
        if (e.target.value !=undefined){
            setUsername(e.target.value);
        }
    }
    const handleEmailChange = (e:any) =>{
        if (e.target.value !=undefined){
            setEmail(e.target.value);
        }
    }
    const handlePasswordChange = (e:any) =>{
        if (e.target.value !=undefined){
            setPassword(e.target.value);
        }
    }

    const handleRegisterSubmit = (e:any) => {
        // const fullName = document.getElementById("full_name")
        // const user = document.getElementById("username")
        // const pwd = document.getElementById("password")
        // const mail = document.getElementById("email")
        //
        // const btn = document.getElementById("registerSubmit")
        //
        // // @ts-ignore
        // btn.addEventListener("click", () => {
        //     // @ts-ignore
        //     const full_name = isNullOrUndefined(fullName)?fullName.value:"";
        //     // @ts-ignore
        //     const username = isNullOrUndefined(user)?user.value:"";
        //     // @ts-ignore
        //     const password = isNullOrUndefined(pwd)?pwd.value:"";
        //     // @ts-ignore
        //     const email = isNullOrUndefined(mail)?mail.value:"";
        //
        //     axios.post(`http://localhost:8080/api/register`, {
        //         username:username,
        //         password:password,
        //         full_name:full_name,
        //         email:email,
        //     })
        //         .then((response) => {
        //             console.log(response);
        //         });
        // });

        // Handle validations
        axios
            .post("http://localhost:8080/api/register", {username, password, full_name, email})
            .then(response => {
                console.log(response)
                // Handle response
            })
        // Prevent the default submit and page reload
        e.preventDefault()
        setLoginMessage("Successful registration! Please log in.")
    }

    const handleLoginSubmit = (e:any) => {

        // Handle validations
        axios
            .post("http://localhost:8080/api/login", {username, password}, {withCredentials: true})
            .then(response => {
                console.log(response)
                console.log(healthCheck)

                // Handle response
            })
        // Prevent the default submit and page reload
        e.preventDefault()
        setLoginMessage("Successful login! Go to the homepage!")
        // window.location.replace('/');

    }

    // @ts-ignore
    return (
        <Card style={{maxWidth: 350, margin:'5vh'}}>
            <Tabs.Root defaultValue="login">
                <Tabs.List size={"2"} style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Tabs.Trigger value="login">Login</Tabs.Trigger>
                    <Tabs.Trigger value="register">Register</Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content className="TabsContent" value="login">
                    <p className="Text">Log in to the Ski Resort page. Please enter your credidentals to access your account.</p>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="username">
                            Username
                        </label>
                        <input className="Input" id="username" onChange={handleUsernameChange}/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="pwd" >
                            Password
                        </label>
                        <input className="Input" id="password" type={"password"} onChange={handlePasswordChange}/>
                    </fieldset>
                    <Text align="center" as="div" highContrast color={"teal"}>{loginMessage}</Text>
                    <div style={{ display: 'flex',justifyContent: 'center', alignItems:"center" }}>
                        <Box style={{ display: 'flex', marginTop: 10, justifyContent: 'center', alignItems:"center"}}>
                            <Button id={"registerSubmit"} type={"submit"} onClick={handleLoginSubmit} formAction={"auth"}>Login</Button>
                        </Box>
                    </div>
                </Tabs.Content>

                <Tabs.Content className="TabsContent" value="register">
                    <p className="Text">Register on the Ski Resort site. lease fill in the required information to create your account.</p>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="fullname">
                            Full Name
                        </label>
                        <input className="Input" id="full_name" onChange={handleFullNameChange}/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="username">
                            Username
                        </label>
                        <input className="Input" id="username" onChange={handleUsernameChange}/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="email">
                            E-mail
                        </label>
                        <input className="Input" id="email" onChange={handleEmailChange}/>
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="pwd" >
                            Password
                        </label>
                        <input className="Input" id="password" type={"password"} onChange={handlePasswordChange}/>
                    </fieldset>
                    <Text align="center" as="div" highContrast color={"teal"}>{loginMessage}</Text>
                    <div style={{ display: 'flex',justifyContent: 'center', alignItems:"center" }}>
                        <Box style={{ display: 'flex', marginTop: 10, justifyContent: 'center', alignItems:"center"}}>
                            <Button id={"registerSubmit"} type={"submit"} onClick={handleRegisterSubmit} formAction={"auth"}>Register</Button>
                        </Box>
                    </div>
                </Tabs.Content>

            </Tabs.Root>
        </Card>


    )
}