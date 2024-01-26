import { TelegramProvider, useTelegram } from "../components/provider";
import { Container, Text, createStyles, ThemeIcon, Button, Paper, Center, Group, Badge, ScrollArea, Progress, Modal, Code } from '@mantine/core';
import { IconPlanet, IconPlayerPlayFilled, IconPlayerStopFilled, IconRefresh, IconExternalLink } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

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
                            <Button.Group style={{ marginTop: 30 }}>
                                <Button leftIcon={<IconPlayerPlayFilled stroke={1.5} style={{ width: 20, height: 20 }} />} variant="default">Start</Button>
                                <Button leftIcon={<IconPlayerStopFilled stroke={1.5} style={{ width: 20, height: 20 }} />} variant="default">Stop</Button>
                                <Button leftIcon={<IconRefresh stroke={1.5} style={{ width: 20, height: 20 }} />} variant="default">Restart</Button>
                            </Button.Group>
                        </Center>
                        <Center>
                            <Button.Group>
                                <Button leftIcon={<IconPlayerPlayFilled stroke={1.5} style={{ width: 20, height: 20 }} />} onClick={open} variant="default">Logs</Button>
                                <Button leftIcon={<IconPlayerStopFilled stroke={1.5} style={{ width: 20, height: 20 }} />} variant="default">WEB</Button>
                            </Button.Group>
                        </Center>

                        <Center>
                            <Group mt="xs">
                                <Text>
                                    Subscribe:
                                </Text>
                                <Text>
                                    23.04.2024
                                </Text>

                                <Badge variant="light" color="blue" size="xs">
                                    3 days
                                </Badge>
                            </Group>
                        </Center>

                        <Center>
                            <Paper radius="md" withBorder mt={20} style={{ textAlign: 'left', padding: 10, width: 300 }}>
                                <Text size="sm" weight={700} mt={10} style={{ textAlign: 'left' }}>
                                    CPU: 0.1 %
                                </Text>
                                <Progress value={1} color="blue" style={{ marginTop: 20 }} striped />
                                <Text size="sm" weight={700} mt={10} style={{ textAlign: 'left' }}>
                                    RAM: 237 / 1024 MB (23%)
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