import {Box, Flex, Grid, Text} from "@radix-ui/themes";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {HealthResponse, LiftOperators, Operators, pusherResponse} from "@/types";
import Pusher from "pusher-js";
import {type} from "os";
import {Lift} from "@/components/lifts/Lift";

interface Props{

}

export const LiftList: React.FC<Props> = (props) => {
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
            console.log(data.message.operators)

        });
    }, []);

    return (
        // <Text>Asd: </Text>

        <Box style={{marginTop:'2vh'}}>
            <Grid columns="3" gap="3">
                {lifts.map( lo =>{
                    const id = lo.id;
                    return(
                            <Box>
                                <Lift type={lo.type} name={lo.name} state={lo.state} throughput={lo.throughput} queue_size={lo.queue_size} wind_speed={lo.wind_speed}/>
                            </Box>
                    )
                })}
            </Grid>

        </Box>
    )
}
