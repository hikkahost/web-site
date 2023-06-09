import { createStyles, Text, Title, List, ThemeIcon } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons';

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
  },

  image: {
    maxWidth: '55%',
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

export function PaymentWrapper() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Популярные способы <br />оплаты</Title>
        <Text size="lg" color="dimmed">
            Выберите удобный способ оплаты<br />и получите готовый товар
        </Text>
        <br />
        
        <List
            spacing="xs"
            size="sm"
            center
            icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <IconArrowRight size={16} />
                </ThemeIcon>
            }
        >
            <List.Item>Apple Pay и Google Pay</List.Item>
            <List.Item>Банковские карты</List.Item>
            <List.Item>Электронные кошельки</List.Item>
        </List>
      </div>
      <img src='./payment.png' className={classes.image} />
    </div>
  );
}