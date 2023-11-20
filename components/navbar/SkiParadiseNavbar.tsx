import {Avatar, Box, Card, Flex, Link, Separator, Text} from "@radix-ui/themes";

interface Props{

}

export const SkiParadiseNavbar: React.FC<Props> = (props) => {

    return (
        <Card variant={"ghost"} style={{maxWidth: 400, margin: '1vh'}}>
            <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Link href={"/"}>Homepage</Link>
                    <Separator orientation="vertical" />
                    <Link href={"/pages/login"}>Sign In</Link>
                    <Separator orientation="vertical" />
                    <Link href={"/"}>About</Link>
            </Flex>
        </Card>
    );

}