import {Badge, Flex, Strong, Text} from "@radix-ui/themes";

interface Props{
    errorId:number,
    liftName:string,
    message:string,
    type:number,
    severity:string,

}

export const AdminErrorViewElement: React.FC<Props> = (props) => {

    const handleBadgeColor = () =>{
        if (props.severity=="WARNING"){
            return "indigo"
        }else if (props.severity == "DANGEROUS"){
            return "orange"
        }else{
            return "crimson"
        }
    }

    return (
        <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Text size="4"><Strong>ID: {props.errorId} - {props.liftName}</Strong></Text>
            <Badge color={handleBadgeColor()}>{props.severity}</Badge>
            <Text size="4"><Strong>Message: </Strong>{props.message}</Text>
        </Flex>
    );

}