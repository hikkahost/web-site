import { TelegramProvider, useTelegram } from "../components/provider";
import { Dots } from "../components/dots";
import { Container, Text, createStyles, ThemeIcon, Button, Paper, Center, Group, Badge, ScrollArea, Progress, Modal, Code } from '@mantine/core';
import { IconPlanet, IconPlayerPlayFilled, IconPlayerStopFilled, IconRefresh, IconExternalLink, IconSourceCode } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
    card: {
        padding: 10,
        margin: '0 auto',
        marginTop: 150,
        backgroundColor: theme.colors.gray[9],
        textAlign: 'center',
        zIndex: 1
    },

    icon: {
        color: theme.colors.gray[0],
        marginTop: -50,
        marginBottom: 20,
    },

    dots: {
        position: "absolute",
        color: "#373a40",
        zIndex: -1
    }
}));

const WebApp = () => {
    //const { user, webApp } = useTelegram();
    const { classes } = useStyles();
    const { user, webApp } = useTelegram();
    //let user = '123';
    const [opened, { open, close }] = useDisclosure(false);

    let logs = `• Build: 4d9d4d9
• Version: 1.6.4
• Up-to-date

🔄 Restarting...
2024-01-26 15:51:46 [INFO] hikka.inline.token_obtainment: Bot token not found in db, attempting search in BotFather
█ █ █ █▄▀ █▄▀ ▄▀█
█▀█ █ █ █ █ █ █▀█

• Build: 4d9d4d9
• Version: 1.6.4
• Up-to-date`

    return (
        <>
            {user ? (
                /*<div>
                    <h1>Welcome {user?.username}</h1>
                    User data:
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                    Eniter Web App data:
                    <pre>{JSON.stringify(webApp, null, 2)}</pre>
                </div>*/
                <Container style={{ textAlign: 'center', marginTop: 100 }} size="xs">
                    <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
                    <Dots className={classes.dots} style={{ left: 120, top: 0 }} />
                    <Dots className={classes.dots} style={{ left: 0, top: 300 }} />
                    <Dots className={classes.dots} style={{ right: 0, top: 150 }} />
                    <Paper radius="md" withBorder className={classes.card} mt={20}>
                        <ThemeIcon className={classes.icon} size={90} radius={90}>
                            <IconPlanet stroke={1.5} style={{ width: 64, height: 64 }} />
                        </ThemeIcon>

                        <Text size="lg" weight={700} mt={10}>
                            HikkaHost
                        </Text>

                        <Center>
                            <Button.Group style={{ marginTop: 30 }}>
                                <Button leftIcon={<IconPlayerPlayFilled stroke={1.5} style={{ width: 20, height: 20 }} />} variant="default">Start</Button>
                                <Button leftIcon={<IconPlayerStopFilled stroke={1.5} style={{ width: 20, height: 20 }} />} variant="default">Stop</Button>
                                <Button leftIcon={<IconRefresh stroke={1.5} style={{ width: 20, height: 20 }} />} variant="default">Restart</Button>
                            </Button.Group>
                        </Center>
                        <Center>
                            <Button.Group>
                                <Button leftIcon={<IconSourceCode stroke={1.5} style={{ width: 20, height: 20 }} />} onClick={open} variant="default">Logs</Button>
                                <Button leftIcon={<IconExternalLink stroke={1.5} style={{ width: 20, height: 20 }} />} variant="default">WEB</Button>
                            </Button.Group>
                        </Center>

                        <Center>
                            <Group mt="xs">
                                <Text>
                                    Expires at
                                </Text>
                                <Text>
                                    27.02.2024
                                </Text>

                                <Badge variant="light" color="blue">
                                    30 days
                                </Badge>
                            </Group>
                        </Center>

                        <Center>
                            <Paper radius="md" withBorder mt={20} style={{ textAlign: 'left', padding: 10, width: 300 }}>
                                <Text size="sm" weight={700} mt={10} style={{ textAlign: 'left' }}>
                                    CPU:
                                </Text>
                                <Text size="sm" weight={700} style={{ textAlign: 'right', marginTop: -22 }}>
                                    0.1 %
                                </Text>
                                <Progress value={1} color="blue" style={{ marginTop: 20 }} striped />
                                <Text size="sm" weight={700} mt={10} style={{ textAlign: 'left' }}>
                                    RAM:
                                </Text>
                                <Text size="sm" weight={700} style={{ textAlign: 'right', marginTop: -22 }}>
                                    237 / 1024 MB (23%)
                                </Text>
                                <Progress value={23} color="blue" style={{ marginTop: 20 }} striped />
                            </Paper>
                        </Center>
                    </Paper>

                    <Modal opened={opened} onClose={close} title="Logs">
                        <ScrollArea style={{ maxWidth: 300 }}>
                            <Code block>
                                {logs}
                            </Code>
                        </ScrollArea>
                    </Modal>
                </Container>
            ) : (
                <Container style={{ textAlign: 'center' }} size="xs">
                    <Paper radius="md" withBorder className={classes.card} mt={20}>
                        <Text size="lg" weight={700} mt={10}>
                            HikkaHost
                        </Text>

                        <Text size="lg" weight={700} mt={10}>
                            Open this page in Telegram bot
                        </Text>
                    </Paper>
                </Container>
            )
            }
        </>
    );
};

export default function WebAppPage() {
    return (
        <TelegramProvider>
            <WebApp />
        </TelegramProvider>
    );
};