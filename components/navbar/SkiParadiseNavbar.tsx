import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {Avatar, Box, Card, Flex, Link, Separator, Text} from "@radix-ui/themes";

interface Props{
    isLogged:boolean;
    permission?:string|undefined;
}

export const SkiParadiseNavbar: React.FC<Props> = (props) => {

    console.log("isLogged: " + props.isLogged)
    return (
        <Card variant={"ghost"} style={{maxWidth: 400, margin: '1vh'}}>
            <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Link size={"6"} href={"/"}>Home</Link>
                    <Separator orientation="vertical" />
                    <Link size={"6"}  href={"/"}>About</Link>
                {!props.isLogged?
                    <><Separator orientation="vertical"/><Link size={"6"}  href={"/pages/login"}>Sign In</Link></>
                    :
                    <><Separator orientation="vertical"/><Link size={"6"}  href={"/pages/profile"}>Profile</Link></>}
                {/*{props.isLogged? <><Separator orientation="vertical"/><Link size={"6"}  href={"/pages/profile"}>Profile</Link></>:null}*/}
                {props.permission=="ADMIN"? <><Separator orientation="vertical"/><Link size={"6"}  href={"/pages/admin"}>Admin</Link></>:null}
            </Flex>
        </Card>
    );

}