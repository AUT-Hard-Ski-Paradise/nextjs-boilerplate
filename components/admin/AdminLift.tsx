import {
    Avatar,
    Badge,
    Text,
    Box,
    Card,
    Flex,
    Heading,
    Link,
    Separator,
    Strong,
    Button,
    IconButton
} from "@radix-ui/themes";
import axios from "axios";
interface Props{
    id: number,
    type: string,
    name: string,
    state: string,
    throughput: number,
    queue_size: number,
    wind_speed: number,
}

export const AdminLift: React.FC<Props> = (props) => {


    const submitStart = async (e:any) => {
        e.preventDefault();

        axios
            .post("http://localhost:8085/ski/lo", {id:props.id,opcode:2,description:"Lift started by admin"})
            .then((response: any) => {
                console.log(response)
                // Handle response
            })
        // Prevent the default submit and page reload
        e.preventDefault()
    }

    const submitSlow = async (e:any) => {
        e.preventDefault();

        axios
            .post("http://localhost:8085/ski/lo", {id:props.id,opcode:4,description:"Lift slowed by admin"})
            .then((response: any) => {
                console.log(response)
                // Handle response
            })
        // Prevent the default submit and page reload
        e.preventDefault()
    }

    const submitStop = async (e:any) => {
        e.preventDefault();

        axios
            .post("http://localhost:8085/ski/lo", {id:props.id,opcode:3,description:"Lift stopped by admin"})
            .then((response: any) => {
                console.log(response)
                // Handle response
            })
        // Prevent the default submit and page reload
        e.preventDefault()
    }

    return (
        <Card style={{maxWidth: 500, margin: '1vh', padding:'1vh'}}>
            <Box>
                <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Heading>{props.name}</Heading>
                </Flex>
            </Box>
            <Separator my="3" size="4" />
            <Box style={{margin: '1px'}}>
                <Flex gap="3" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Button color="green" variant="soft" onClick={submitStart}>
                    Start
                </Button>
                <Button color="orange" variant="soft" onClick={submitSlow}>
                    Slow
                </Button>
                <Button color="crimson" variant="soft" onClick={submitStop}>
                    Stop
                </Button>
                </Flex>
            </Box>
        </Card>
    );

}