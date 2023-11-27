import {Badge, Box, Flex, Heading, Strong, Text} from "@radix-ui/themes";

interface Props{

}

export const Loading: React.FC<Props> = (props) => {

    return (
        <Box>
            <Flex gap="3" align="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin:'5vh'}}>
                <Heading size="8">Loading...</Heading>
            </Flex>
        </Box>
    );

}