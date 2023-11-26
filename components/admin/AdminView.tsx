"use client"
import {Badge, Box, Card, Flex, Grid, Heading, Link, Separator, Text} from "@radix-ui/themes";
import {useEffect, useState} from "react";
import {Operators, pusherResponse} from "@/types";
import Pusher from "pusher-js";
import {Lift} from "@/components/lifts/Lift";
import {LiftAdminViewElement} from "@/components/admin/LiftAdminViewElement";
import {AdminLift} from "@/components/admin/AdminLift";

interface Props{

}

export const AdminView: React.FC<Props> = (props) => {
    const [lifts, setLifts] = useState<Operators[]>([]);

    useEffect(() => {
        Pusher.logToConsole = true;
        const pusher = new Pusher('535dc181055af27d3bde', {
            cluster: 'eu'
        });

        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', async function(data: pusherResponse) {
            // console.log("ASD: "+JSON.stringify(data))
            setLifts(data.message.operators)

        });
    }, []);



    return (
        <Box>
        <Box style={{marginTop:'2vh'}}>
            <Card style={{maxWidth: 800, margin: '1vh', padding:'1vh'}}>
                {lifts.map( lo =>{
                    const id = lo.id;
                    return(
                        <Box>
                            <LiftAdminViewElement type={lo.type} name={lo.name} state={lo.state} throughput={lo.throughput} queue_size={lo.queue_size} wind_speed={lo.wind_speed}/>
                            <Separator my="3" size="4" />
                        </Box>
                    )
                })}
            </Card>
        </Box>

    <Box style={{marginTop:'2vh'}}>
        <Grid columns="2" gap="3">
            {lifts.map( lo =>{
                const id = lo.id;
                return(
                    <Box>
                        <AdminLift type={lo.type} name={lo.name} state={lo.state} throughput={lo.throughput} queue_size={lo.queue_size} wind_speed={lo.wind_speed}/>
                    </Box>
                )
            })}
        </Grid>

        </Box>
        </Box>
    )

}