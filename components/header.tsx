import {
  Container,
  Group,
  Button,
  Burger,
  AppShell,
  Center
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Logo } from '../components/logo';
import { createStyles } from '@mantine/styles';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme, _params, getRef) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm + 4,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  button: {
    fontSize: theme.fontSizes.sm + 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: 'none',
    },
  },

  header: {
    marginBottom: 120,
    border: 'none',
    backgroundColor: 'white',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: 'none',
    },
  },

  links: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: 'none',
    },
  },

  mobile: {
    display: 'none',
    textAlign: 'center',
    margin: 30,
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      display: 'block',
    },
  },
}));

const links = [
  {
    links: 'https://t.me/hikkahost_chat',
    label: 'Поддержка',
  },
  {
    links: 'https://t.me/hikkahost',
    label: 'Новости',
  }
]

export function HeaderAction() {
  const { classes } = useStyles();

  const items = links.map((link) => {
    return (
      <a
        key={link.label}
        href={link.links}
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });

  return (
    <>
      <Center>
        <Logo className={classes.mobile} />
      </Center>
      <AppShell
        header={{ height: HEADER_HEIGHT }}
        className={classes.header}
        padding="md"
      >
        <AppShell.Header p={30} style={{ border: 'none', position: 'absolute', width: '100%' }}>
          <Container className={classes.inner} size="xl">
            <Group>
              <Logo />
            </Group>
            <Group className={classes.links}>
              {items}
            </Group>
            <Button radius="xl" className={classes.button} onClick={() => { window.location.href = 'https://t.me/hikkahost_bot' }}>
              Перейти в бота
            </Button>
          </Container>
        </AppShell.Header>
      </AppShell>
    </>
  );
}