import { TelegramProvider, useTelegram } from "../components/provider";
import {
    Container,
    Button,
    Paper,
    Text,
    Title,
    Badge,
    Group,
    Grid,
    Tabs,
    Center,
    ThemeIcon
} from '@mantine/core';
import {
    IconPlanet,
    IconCaretRightFilled,
    IconPlayerPauseFilled,
    IconArticleFilledFilled
} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { createStyles } from '@mantine/styles';
import { useRef } from 'react';
import { Sparkline } from '@mantine/charts';
import '@fontsource/roboto';

const useStyles = createStyles((theme, _params, getRef) => ({
    card: {},

    tabs: {
        backgroundColor: '#74748014',
        borderRadius: '8.91px',
        border: 'none',
        '& button': {
            width: 'calc(100% / 3)'
        },

        '&::before': {
            display: 'none'
        }
    },

    tab: {
        color: '#fff',

        // &[data-active]
        ['&[data-active]']: {
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: '8.91px',
            border: 'none',
        }
    },

    body: {
        height: '100vh',
        padding: 10,
        margin: '0 auto',
        backgroundColor: '#1C1C1D',
        color: 'white',
        textAlign: 'center',
        zIndex: 1,
        fontFamily: 'Roboto'
    },

    button: {
        padding: '0',

    },

    // before themeicon,
    themeicon1: {
        marginTop: -10,
        width: 30,
        ['&::before']: {
            content: '"start"',
            marginTop: 40,
            fontSize: 11,
            color: '#007AFF',
            fontWeight: 500,
            marginLeft: 5
        }
    },
    themeicon2: {
        marginTop: -10,
        width: 30,
        ['&::before']: {
            content: '"stop"',
            marginTop: 40,
            fontSize: 11,
            fontWeight: 500,
            marginLeft: 3
        }
    },
    themeicon3: {
        marginTop: -10,
        width: 30,
        ['&::before']: {
            content: '"logs"',
            marginTop: 40,
            fontSize: 11,
            color: '#007AFF',
            fontWeight: 500
        }
    }
}));

const WebApp = () => {
    //const { user, webApp } = useTelegram();
    let user = 'test';
    const { classes } = useStyles();
    const secondTabRef = useRef<HTMLButtonElement>(null);

    return (
        <Container className={classes.body}>
            {user ? (
                /*<div>
                    <h1>Welcome {user?.username}</h1>
                    User data:
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                    Eniter Web App data:
                    <pre>{JSON.stringify(webApp, null, 2)}</pre>
                </div>*/
                <Container style={{ textAlign: 'center' }} size="xs">
                    <ThemeIcon size={80} radius={120} color="#007AFF" mt={10}>
                        <IconPlanet stroke={1.5} style={{ width: 64, height: 64 }} />
                    </ThemeIcon>
                    <Title order={1} mt={20}>
                        HikkaHost
                    </Title>

                    <Text mt={10} size={'16px'}>
                        Your hosting panel
                    </Text>

                    <Group mt={20} style={{ position: 'relative' }}>
                        <Text mt={10} size={'16px'} style={{ width: 160 }}>
                            Expires at 2024-01-26
                        </Text>

                        <Badge variant="light" color="blue" mt={10} style={{ position: 'absolute', right: 0 }}>
                            30days
                        </Badge>
                    </Group>

                    <Group grow preventGrowOverflow={false} wrap="nowrap" mt={20}>
                        <Grid columns={24}>
                            <Grid.Col span={12}>
                                <Button size="lg" fullWidth mt={10} radius={12} className={classes.button} color="#007AFF1A" autoContrast>
                                    <Center className={classes.themeicon1}>
                                        <ThemeIcon size={24} radius={12} color="#007AFF" ml={-23}>
                                            <IconCaretRightFilled size={20} />
                                        </ThemeIcon>
                                    </Center>
                                </Button>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Button size="lg" fullWidth mt={10} radius={12} className={classes.button} color="#007AFF" autoContrast p={0}>
                                    <Center className={classes.themeicon2}>
                                        <ThemeIcon size={24} radius={12} color="#fff" ml={-23}>
                                            <IconPlayerPauseFilled size={16} style={{ color: '#007AFF' }} />
                                        </ThemeIcon>
                                    </Center>
                                </Button>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Button size="lg" fullWidth mt={10} radius={12} className={classes.button} color="#FFFFFF" autoContrast p={0}>
                                    <Center className={classes.themeicon3}>
                                        <ThemeIcon size={24} radius={12} color="#007AFF" ml={-22}>
                                            <IconArticleFilledFilled size={16} style={{ color: '#fff' }} />
                                        </ThemeIcon>
                                    </Center>
                                </Button>
                            </Grid.Col>
                        </Grid>
                    </Group>
                    <Button size="lg" fullWidth mt={10} radius={12} className={classes.button} color="#007AFF" autoContrast>
                        Restart
                    </Button>

                    <Tabs defaultValue="cpu" mt={20}>
                        <Tabs.List className={classes.tabs}>
                            <Tabs.Tab value="cpu" className={classes.tab}>CPU</Tabs.Tab>
                            <Tabs.Tab value="ram" ref={secondTabRef} className={classes.tab}>
                                RAM
                            </Tabs.Tab>
                            <Tabs.Tab value="ping" className={classes.tab}>PING</Tabs.Tab>
                        </Tabs.List>

                        <Center mt={10}>
                            <Tabs.Panel value="cpu" className={classes.tabs} p={10} style={{ width: '100%' }}>
                                <Text size="sm" mt={10} style={{ textAlign: 'left' }} ml={15}>
                                    4 cores
                                    <Badge variant="light" color="blue" ml={15}>
                                        0.11%
                                    </Badge>
                                </Text>

                                <Sparkline
                                    w={'100%'}
                                    h={80}
                                    data={[40, 20, 40, 10, 50, 10, 20, 40, 20, 40, 10, 50]}
                                    curveType="linear"
                                    color="blue"
                                    fillOpacity={0.6}
                                    strokeWidth={2}
                                />
                            </Tabs.Panel>
                            <Tabs.Panel value="ram" className={classes.tabs} p={10} style={{ width: '100%' }}>
                                <Text size="sm" mt={10} style={{ textAlign: 'left' }} ml={15}>
                                    240 / 1024 MB
                                    <Badge variant="light" color="blue" ml={15}>
                                        23%
                                    </Badge>
                                </Text>

                                <Sparkline
                                    w={'100%'}
                                    h={80}
                                    data={[10, 20, 40, 20, 40, 10, 20, 40, 20, 40, 10, 50]}
                                    curveType="linear"
                                    color="blue"
                                    fillOpacity={0.6}
                                    strokeWidth={2}
                                />
                            </Tabs.Panel>
                            <Tabs.Panel value="ping" className={classes.tabs} p={10} style={{ width: '100%' }}>
                                <Text size="sm" mt={10} style={{ textAlign: 'left' }} ml={15}>
                                    102.1 ms
                                    <Badge variant="light" color="blue" ml={15}>
                                        ~ 100 ms
                                    </Badge>
                                </Text>

                                <Sparkline
                                    w={'100%'}
                                    h={80}
                                    data={[10, 20, 40, 20, 40, 10, 50, 10, 20, 40, 20, 40, 10, 50]}
                                    curveType="linear"
                                    color="blue"
                                    fillOpacity={0.6}
                                    strokeWidth={2}
                                />
                            </Tabs.Panel>
                        </Center>
                    </Tabs>
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
        </Container>
    );
};

export default function WebAppPage() {
    return (
        <TelegramProvider>
            <WebApp />
        </TelegramProvider>
    );
};