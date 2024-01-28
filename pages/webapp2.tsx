import { TelegramProvider, useTelegram } from "../components/provider";
import { useSearchParams } from 'next/navigation';
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
    ThemeIcon,
    Modal,
    ScrollArea,
    Code,
    LoadingOverlay,
    Box
} from '@mantine/core';
import { useDisclosure, useHotkeys } from '@mantine/hooks';
import {
    IconPlanet,
    IconCaretRightFilled,
    IconPlayerPauseFilled,
    IconArticleFilledFilled
} from '@tabler/icons-react';
import { createStyles } from '@mantine/styles';
import { useEffect, useState } from 'react';
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
    const { user, webApp, data } = useTelegram();
    //const user = {
    //    id: 1218845111,
    //    username: 'test'
    //};
    //const webApp = {
    //    initDataUnsafe: {
    //        hash: 'test'
    //    }
    //};
    const [token, setToken] = useState('');

    useEffect(() => {
        if (!webApp) return;
        if (!webApp?.initDataUnsafe.hash) return;
        fetch('/api/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ hash: data, userId: user?.id })
        })
            .then(res => res.json())
            .then(json => {
                if (!json.ok) {
                    console.log(json);
                }
                setToken(json.ok);
            })
            .catch(err => {
                console.log(err);
            }
            );
    }, [webApp]);

    //const user = 'test';
    const [visible, { open, close, toggle }] = useDisclosure(true);
    const { classes } = useStyles();
    const [days, setDays] = useState(0);
    const [date, setDate] = useState('');
    const [cpu, setCpu] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [ram, setRam] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [ping, setPing] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const [ram_info, setRamInfo] = useState(0);

    const [opened_action, { open: open_action, close: close_action }] = useDisclosure(false);
    const [opened_logs, { open: open_logs, close: close_logs }] = useDisclosure(false);
    const [logs, setLogs] = useState('');

    useHotkeys([
        ['mod+J', () => toggle()],
    ]);

    const action_modal = function (type: string) {
        toggle();
        fetch(`/api/action?action=${type}&token=${token}`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                open_action();
                close();
            });
    };

    const logs_modal = function () {
        toggle();
        fetch(`/api/logs?token=${token}`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setLogs(json.data.logs);
                open_logs();
                close();
            });
    };

    useEffect(() => {
        if (!token) return;
        const Id = setInterval(() => {
            fetch(`/api/host?token=${token}`)
                .then(res => res.json())
                .then(json => {
                    setCpu(prev => [...prev.slice(1), (json.data.stats.cpu_stats.cpu_usage.total_usage / json.data.stats.cpu_stats.system_cpu_usage) * 100]);
                    setRam(prev => [...prev.slice(1), (json.data.stats.memory_stats.usage / 1024 / 1024 / 1024) * 100]);
                    setRamInfo(json.data.stats.memory_stats.usage / 1024 / 1024);
                    setPing(prev => [...prev.slice(1), json.ping / 100]);
                });
        }, 5000);
        return () => clearInterval(Id);
    }, [token]);

    useEffect(() => {
        if (!token) return;
        fetch(`/api/expired?token=${token}`)
            .then(res => res.json())
            .then(json => {
                let end_date = json.data.host.end_date.split('T')[0].split('-');
                end_date = `${end_date[2]}.${end_date[1]}.${end_date[0]}`;
                setDate(end_date);
                let now = new Date();
                let end = new Date(json.data.host.end_date);
                setDays(Math.round((end.getTime() - now.getTime()) / (1000 * 3600 * 24)));
            });
        toggle();
    }, [token]);

    return (
        <Box pos="relative">
            <Container className={classes.body}>
                {user ? (
                    <>
                        <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ color: "#000" }} />
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
                                <Text mt={10} size={'16px'} style={{ width: 160, textAlign: 'left' }}>
                                    Expires on {date}
                                </Text>

                                <Badge variant="light" color="blue" mt={10} style={{ position: 'absolute', right: 0 }}>
                                    {days} days
                                </Badge>
                            </Group>

                            <Group grow preventGrowOverflow={false} wrap="nowrap" mt={20}>
                                <Grid columns={24}>
                                    <Grid.Col span={12}>
                                        <Button
                                            size="lg"
                                            fullWidth
                                            mt={10}
                                            radius={12}
                                            className={classes.button}
                                            color="#007AFF1A"
                                            autoContrast
                                            onClick={() => {
                                                action_modal('start');
                                            }}
                                        >
                                            <Center className={classes.themeicon1}>
                                                <ThemeIcon size={24} radius={12} color="#007AFF" ml={-23}>
                                                    <IconCaretRightFilled size={20} />
                                                </ThemeIcon>
                                            </Center>
                                        </Button>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Button
                                            size="lg"
                                            fullWidth mt={10}
                                            radius={12}
                                            className={classes.button}
                                            color="#007AFF"
                                            autoContrast
                                            p={0}
                                            onClick={() => {
                                                action_modal('stop');
                                            }}
                                        >
                                            <Center className={classes.themeicon2}>
                                                <ThemeIcon size={24} radius={12} color="#fff" ml={-23}>
                                                    <IconPlayerPauseFilled size={16} style={{ color: '#007AFF' }} />
                                                </ThemeIcon>
                                            </Center>
                                        </Button>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Button
                                            size="lg"
                                            fullWidth
                                            mt={10}
                                            radius={12}
                                            className={classes.button}
                                            color="#FFFFFF"
                                            autoContrast
                                            p={0}
                                            onClick={() => {
                                                logs_modal();
                                            }}
                                        >
                                            <Center className={classes.themeicon3}>
                                                <ThemeIcon size={24} radius={12} color="#007AFF" ml={-22}>
                                                    <IconArticleFilledFilled size={16} style={{ color: '#fff' }} />
                                                </ThemeIcon>
                                            </Center>
                                        </Button>
                                    </Grid.Col>
                                </Grid>
                            </Group>
                            <Button
                                size="lg"
                                fullWidth
                                mt={10}
                                radius={12}
                                className={classes.button}
                                color="#007AFF"
                                autoContrast
                                onClick={() => {
                                    action_modal('restart');
                                    toggle();
                                }}
                            >
                                Restart
                            </Button>

                            <Tabs defaultValue="cpu" mt={20}>
                                <Tabs.List className={classes.tabs}>
                                    <Tabs.Tab value="cpu" className={classes.tab}>CPU</Tabs.Tab>
                                    <Tabs.Tab value="ram" className={classes.tab}>
                                        RAM
                                    </Tabs.Tab>
                                    <Tabs.Tab value="ping" className={classes.tab}>PING</Tabs.Tab>
                                </Tabs.List>

                                <Center mt={10}>
                                    <Tabs.Panel value="cpu" className={classes.tabs} p={10} style={{ width: '100%' }}>
                                        <Text size="sm" mt={10} style={{ textAlign: 'left' }} ml={15}>
                                            4 cores
                                            <Badge variant="light" color="blue" ml={15}>
                                                {cpu[cpu.length - 1].toFixed(4)}%
                                            </Badge>
                                        </Text>

                                        <Sparkline
                                            w={'100%'}
                                            h={100}
                                            data={cpu}
                                            curveType="step"
                                            color="blue"
                                            fillOpacity={0.6}
                                            strokeWidth={2}
                                        />
                                    </Tabs.Panel>
                                    <Tabs.Panel value="ram" className={classes.tabs} p={10} style={{ width: '100%' }}>
                                        <Text size="sm" mt={10} style={{ textAlign: 'left' }} ml={15}>
                                            {ram_info} / 1024 MB
                                            <Badge variant="light" color="blue" ml={15}>
                                                {ram[ram.length - 1].toFixed(4)}%
                                            </Badge>
                                        </Text>

                                        <Sparkline
                                            w={'100%'}
                                            h={100}
                                            data={ram}
                                            curveType="step"
                                            color="blue"
                                            fillOpacity={0.6}
                                            strokeWidth={2}
                                        />
                                    </Tabs.Panel>
                                    <Tabs.Panel value="ping" className={classes.tabs} p={10} style={{ width: '100%' }}>
                                        <Text size="sm" mt={10} style={{ textAlign: 'left' }} ml={15}>
                                            {ping[ping.length - 1]} ms
                                            <Badge variant="light" color="blue" ml={15}>
                                                ~ {(ping.reduce((a, b) => a + b, 0) / ping.length).toFixed(4)} ms
                                            </Badge>
                                        </Text>

                                        <Sparkline
                                            w={'100%'}
                                            h={100}
                                            data={ping}
                                            curveType="step"
                                            color="blue"
                                            fillOpacity={0.6}
                                            strokeWidth={2}
                                        />
                                    </Tabs.Panel>
                                </Center>
                            </Tabs>

                            <Modal opened={opened_action} onClose={close_action} title="Action">
                                Action successfully completed
                            </Modal>

                            <Modal opened={opened_logs} onClose={close_logs} title="Logs">
                                <ScrollArea h={500}>
                                    <Code block>
                                        {logs}
                                    </Code>
                                </ScrollArea>
                            </Modal>
                        </Container>
                    </>
                ) : (
                    <Container style={{ textAlign: 'center' }} size="xs">
                        <Paper radius="md" withBorder className={classes.card} mt={20} style={{ backgroundColor: '#1C1C1D' }}>
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
        </Box>
    );
};

export default function WebAppPage() {
    return (
        <TelegramProvider>
            <WebApp />
        </TelegramProvider>
    );
};