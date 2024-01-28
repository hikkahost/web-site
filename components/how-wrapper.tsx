import { Text, Title, List, ThemeIcon } from '@mantine/core';
import { IconCircleDashed } from '@tabler/icons-react';
import { createStyles } from '@mantine/styles';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    //padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
      }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
    width: '90%',
    margin: '0 auto',
    background: 'auto',
    [theme.colorScheme === 'dark' ? 'color' : 'background']: 'linear-gradient(180deg,#edf6f9,#d7d7d7)',
  },

  image: {
    maxWidth: '55%',
    //position: 'relative',
    marginRight: '0',
    marginTop: theme.spacing.xl * 2,
    marginBottom: theme.spacing.xl * 2,
    float: 'right',
    marginLeft: 'auto',
    order: 2,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: '10px',
    paddingLeft: theme.spacing.xl * 2,

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

export function HowWrapper() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Text size="lg" mb={5}>
          Как мы работаем?
        </Text>
        <Title className={classes.title}>Слаженно и активно!</Title>

        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="gray" size={24} radius="xl">
              <IconCircleDashed size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>Смотрим за серверами</List.Item>
          <List.Item>Обеспечиваем безопасность</List.Item>
          <List.Item>Все пользователи изолированы</List.Item>
          <List.Item>Тех.поддежка на готове</List.Item>
        </List>
      </div>
      <img src='./mokup.png' className={classes.image} />
    </div>
  );
}