import {Avatar, Badge, Text, Box, Card, Flex, Heading, Link, Separator, Strong, IconButton} from "@radix-ui/themes";
import {BellIcon} from "@radix-ui/react-icons";
interface Props{
    type: string,
    name: string,
    state: string,
    throughput: number,
    queue_size: number,
    wind_speed: number,
}

export const LiftAdminViewElement: React.FC<Props> = (props) => {

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

    return (
        <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Text size="4"><Strong>{props.name}   -</Strong></Text>
            <Badge color={handleBadgeColor()}>{props.state}</Badge>
            <Text size="4"><Strong>Type: </Strong>{handleTypeText()}</Text>
            <Text size="4"><Strong>Queue: </Strong>{props.queue_size}</Text>
            <Text size="4"><Strong>Wind speed: </Strong>{props.wind_speed} km/h</Text>
        </Flex>
    );

}