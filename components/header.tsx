import {
  createStyles,
  Header,
  Container,
  Group,
  Button,
  Burger,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Logo } from '../components/logo';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    float: 'right',
    marginLeft: 'auto',
    order: 2,
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
    display: 'none',
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

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    marginBottom: 120,

    [theme.fn.smallerThan('sm')]: {
      marginBottom: 0,
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
  const [opened, { toggle }] = useDisclosure(false);

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
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} p={30} className={classes.header}>
      <Container className={classes.inner} fluid>
        <Group>
          <Logo />
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Button radius="xl" sx={{ height: 40 }} className={classes.button} onClick={() => {window.location.href = 'https://t.me/hikkahost_bot'}}>
          Перейти в бота
        </Button>
      </Container>
    </Header>
  );
}