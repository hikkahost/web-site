import { Text, Title, Button } from '@mantine/core';
import { createStyles } from '@mantine/styles';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.xl * 2,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
    width: '90%',
    margin: '0 auto',
    background: 'auto',
    paddingBottom: '0px',
    marginBottom: '0px',
  },

  image: {
    maxWidth: '35%',
    //position: 'relative',

    float: 'right',
    marginLeft: 'auto',
    order: 2,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: '20px',
    paddingLeft: theme.spacing.xl * 3,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      paddingLeft: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Golos, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function QRWrapper() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Переходите в нашего <br />бота в Telegram</Title>
        <Text size="lg" color="dimmed" mt={20}>
          Весь наш интерфейс находится <br />в Telegram боте для вашего удобства
        </Text>
        <Button radius="xl" mt={20} onClick={() => { window.location.href = 'https://t.me/hikkahost_bot' }}>
          Перейти
        </Button>
      </div>
      <img src='./qr.png' className={classes.image} />
    </div>
  );
}