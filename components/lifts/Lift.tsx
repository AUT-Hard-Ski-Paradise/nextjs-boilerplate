import {Avatar, Badge, Text, Box, Card, Flex, Heading, Link, Separator, Strong} from "@radix-ui/themes";
import gondola from 'images/gondola.png'
interface Props{
    type: string,
    name: string,
    state: string,
    throughput: number,
    queue_size: number,
    wind_speed: number,
}

export const Lift: React.FC<Props> = (props) => {

    const handleBadgeColor = () =>{
        if (props.state=="STARTED"){
            return "green"
        }else if (props.state == "SLOW"){
            return "orange"
        }else{
            return "crimson"
        }
    }

    const handleTypeText = () =>{
        if (props.type=="GONDOLA"){
            return "Gondola"
        }else if (props.type=="CHAIRLIFT"){
            return "Chairlift"
        }else if (props.type=="T_BAR"){
            return "T-Bar"
        }
    }

    const handleAvatarSrc = () =>{
        if (props.type=="GONDOLA"){
            return "https://images.unsplash.com/photo-1689192943465-b7274721253a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }else if (props.type=="CHAIRLIFT"){
            return "https://images.unsplash.com/uploads/1411156220671349cb3aa/e2d2752f?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }else if (props.type=="T_BAR"){
            return "https://blog.ansi.org/wp-content/uploads/2022/08/T-Bar.jpg"
        }
    }
    return (
        <Card style={{maxWidth: 300, margin: '1vh', padding:'1vh'}}>
            <Box>
                <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Heading>{props.name}</Heading>
                    <Badge color={handleBadgeColor()}>{props.state}</Badge>
                </Flex>
            </Box>
            <Separator my="3" size="4" />
            <Box style={{margin: '5px'}}>
                <Box style={{marginBottom:'10px'}}>
                    <Text size={"3"}>
                        <Strong>Type:</Strong>
                    </Text>

                </Box>
                <Flex gap="2" align={"center"}>
                    <Avatar
                        size="5"
                        src={handleAvatarSrc()}
                        fallback="T"
                    />
                    <Text>{handleTypeText()}</Text>
                </Flex>
            </Box>

            <Box style={{margin: '5px'}}>
                <Text size={"3"}>
                    <Strong>Wind speed: </Strong>
                    {props.wind_speed} km/h
                </Text>
            </Box>
            <Box style={{margin: '5px'}}>
                <Text size={"3"}>
                    <Strong>Queue: </Strong>
                    {props.queue_size} people
                </Text>
            </Box>
        </Card>
    );

}