import { TelegramProvider, useTelegram } from "../components/provider";
import { Container, Button, Paper, Text, Title, Badge, Group } from '@mantine/core';
import { IconPlanet } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { createStyles } from '@mantine/styles';

const useStyles = createStyles((theme) => ({
    card: {},
}));

const WebApp = () => {
    //const { user, webApp } = useTelegram();
    let user = 'test';
    const { classes } = useStyles();

    return (
        <div>
            {user ? (
                /*<div>
                    <h1>Welcome {user?.username}</h1>
                    User data:
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                    Eniter Web App data:
                    <pre>{JSON.stringify(webApp, null, 2)}</pre>
                </div>*/
                <Container style={{ textAlign: 'center' }} size="xs">
                    <IconPlanet stroke={1.5} style={{ width: 40, height: 40 }} />
                    <Title order={1}>
                        HikkaHost
                    </Title>

                    <Text size="xl" mt={10}>
                        Your hosting panel
                    </Text>

                    <Group mt={20}>
                        <Text size="md" mt={10}>
                            Expires at 2024-01-26
                        </Text>

                        <Badge variant="light" color="blue" mt={10}>
                            30days
                        </Badge>
                    </Group>

                    <Group grow preventGrowOverflow={false} wrap="nowrap" mt={20}>
                        <Button variant="default" color="blue" radius="md" size="lg">
                            Second button with large content
                        </Button>
                        <Button variant="default" color="blue" radius="md" size="lg">
                            Stop
                        </Button>
                        <Button variant="default" color="blue" radius="md" size="lg">
                            Logs
                        </Button>
                    </Group>
                </Container>
            ) : (
                <Container style={{ textAlign: 'center' }} size="xs">
                    <Paper radius="md" withBorder className={classes.card} mt={20}>
                        <Text size="lg" mt={10}>
                            HikkaHost
                        </Text>

                        <Text size="lg" mt={10}>
                            Open this page in Telegram bot
                        </Text>
                    </Paper>
                </Container>
            )
            }
        </div>
    );
};

export default function WebAppPage() {
    return (
        <TelegramProvider>
            <WebApp />
        </TelegramProvider>
    );
};