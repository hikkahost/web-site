import { TelegramProvider, useTelegram } from "../components/provider";
import { Container, Text, createStyles, ThemeIcon, Button, Paper, Center, Group, Badge } from '@mantine/core';
import { IconPlanet, IconPlayerPlayFilled, IconPlayerStopFilled, IconRefresh } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    card: {
        padding: 10,
        margin: '0 auto',
        marginTop: 150,
        backgroundColor: theme.colors.gray[9],
        textAlign: 'center',
    },

    icon: {
        color: theme.colors.gray[0],
        marginTop: -30,
        marginBottom: 20,
    },
}));

const WebApp = () => {
    const { user, webApp } = useTelegram();
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
                    <Paper radius="md" withBorder className={classes.card} mt={20}>
                        <ThemeIcon className={classes.icon} size={60} radius={60}>
                            <IconPlanet stroke={1.5} style={{ width: 40, height: 40 }} />
                        </ThemeIcon>

                        <Text size="lg" weight={700} mt={10}>
                            HikkaHost
                        </Text>

                        <Center>
                            <Button.Group style={{ marginTop: 50 }}>
                                <Button leftIcon={<IconPlayerPlayFilled stroke={1.5} style={{ width: 20, height: 20 }} />} variant="default">Start</Button>
                                <Button leftIcon={<IconPlayerStopFilled stroke={1.5} style={{ width: 20, height: 20 }} />} variant="default">Stop</Button>
                                <Button leftIcon={<IconRefresh stroke={1.5} style={{ width: 20, height: 20 }} />} variant="default">Restart</Button>
                            </Button.Group>
                        </Center>

                        <Center>
                            <Group justify="space-between" mt="xs">
                                <Text fz="sm" c="dimmed">
                                    Subscribe:
                                </Text>
                                <Text fz="sm" c="dimmed">
                                    23.04.2024
                                </Text>

                                <Badge variant="light" color="blue" size="xs">
                                    3 days
                                </Badge>
                            </Group>
                        </Center>
                    </Paper>
                </Container>
            ) : (
                <Container style={{ textAlign: 'center' }} size="xs">
                    <Paper radius="md" withBorder className={classes.card} mt={20}>
                        <ThemeIcon className={classes.icon} size={60} radius={60}>
                            <IconPlanet stroke={1.5} style={{ width: 40, height: 40 }} />
                        </ThemeIcon>

                        <Text size="lg" weight={700} mt={10}>
                            HikkaHost
                        </Text>

                        <Center>
                            <Button.Group style={{ marginTop: 50 }}>
                                <Button leftIcon={<IconPlayerPlayFilled stroke={1.5} style={{ width: 20, height: 20 }} />} variant="default">Start</Button>
                                <Button leftIcon={<IconPlayerStopFilled stroke={1.5} style={{ width: 20, height: 20 }} />} variant="default">Stop</Button>
                                <Button leftIcon={<IconRefresh stroke={1.5} style={{ width: 20, height: 20 }} />} variant="default">Restart</Button>
                            </Button.Group>
                        </Center>

                        <Center>
                            <Group justify="space-between" mt="xs">
                                <Text fz="sm" c="dimmed">
                                    Subscribe:
                                </Text>
                                <Text fz="sm" c="dimmed">
                                    23.04.2024
                                </Text>

                                <Badge variant="light" color="blue" size="xs">
                                    3 days
                                </Badge>
                            </Group>
                        </Center>
                    </Paper>
                </Container>
            )
            }
        </div >
    );
};

export default function WebAppPage() {
    return (
        <TelegramProvider>
            <WebApp />
        </TelegramProvider>
    );
};