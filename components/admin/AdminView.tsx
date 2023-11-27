"use client"
import {Badge, Box, Card, Flex, Grid, Heading, Link, Separator, Text} from "@radix-ui/themes";
import {useEffect, useState} from "react";
import {ErrorMessage, Operators, pusherErrorsResponse, pusherLiftsResponse} from "@/types";
import Pusher from "pusher-js";
import {Lift} from "@/components/lifts/Lift";
import {LiftAdminViewElement} from "@/components/admin/LiftAdminViewElement";
import {AdminLift} from "@/components/admin/AdminLift";
import {AdminErrorViewElement} from "@/components/admin/AdminErrorViewElement";
import {Loading} from "@/components/loading/Loading";

interface Props{

}

export const AdminView: React.FC<Props> = (props) => {
    const [lifts, setLifts] = useState<Operators[]>([]);
    const [errorList] = useState<ErrorMessage[]>([]);
;

    useEffect(() => {
        Pusher.logToConsole = false;
        const pusher = new Pusher('535dc181055af27d3bde', {
            cluster: 'eu'
        });

        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', async function(data: pusherLiftsResponse) {
            // console.log("ASD: "+JSON.stringify(data))
            setLifts(data.message.operators)

        });

        const channel2 = pusher.subscribe('my-channel');
        channel2.bind('errorMessages', async function(data: pusherErrorsResponse) {
            errorList.push(data.message)
            // console.log(errorList)
            if (errorList.length>5){
                errorList.shift()
            }
        });



    }, []);

    const handleLiftNameById = (errorId:number) =>{
        let name=""
        lifts.map(lo=>{
            if (lo.id==errorId){
                name=lo.name
            }
        })
       return name
    }

    return (
        <Box>
            {lifts.length>0?
                <Box style={{marginTop:'2vh'}}>
                    <Card style={{maxWidth: 800, margin: '1vh', padding:'1vh'}}>
                        <Box>
                            <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom:'1vh'}}>
                                <Heading size="7">Lifts status</Heading>
                            </Flex>
                        </Box>
                        {lifts.map( lo =>{
                            const id = lo.id
                            return(
                                <Box>
                                    <LiftAdminViewElement type={lo.type} name={lo.name} state={lo.state} throughput={lo.throughput} queue_size={lo.queue_size} wind_speed={lo.wind_speed}/>
                                    <Separator my="3" size="4" />
                                </Box>
                            )
                        })}
                    </Card>
                </Box>
                :
                <Loading/>
            }


            {errorList.length>0?
                <Box style={{marginTop:'2vh'}}>
                    <Card style={{maxWidth: 800, margin: '1vh', padding:'1vh'}}>
                        <Box>
                            <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom:'1vh'}}>
                                <Heading size="7">Errors</Heading>
                            </Flex>
                        </Box>
                        {errorList.map( error =>{
                            const id = error.id;
                            return(
                                <Box>
                                    <AdminErrorViewElement errorId={error.id} liftName={handleLiftNameById(error.id)} message={error.message} type={error.type} severity={error.severity}/>
                                    <Separator my="3" size="4" />
                                </Box>
                            )
                        })}
                    </Card>
                </Box>
                :null
            }

            {lifts.length>0?<Box style={{marginTop:'2vh'}}>
        <Box>
            <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom:'1vh'}}>
                <Heading size="7">Manage Lifts</Heading>
            </Flex>
        </Box>
        <Grid columns="2" gap="3">
            {lifts.map( lo =>{
                const id = lo.id;
                return(
                    <Box>
                        <AdminLift id={lo.id} type={lo.type} name={lo.name} state={lo.state} throughput={lo.throughput} queue_size={lo.queue_size} wind_speed={lo.wind_speed}/>
                    </Box>
                )
            })}
        </Grid>

    </Box> :null}

        </Box>
    )

}