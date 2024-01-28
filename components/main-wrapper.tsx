import {
  Grid,
  SimpleGrid,
  Mark,
  Button
} from '@mantine/core';
import { useEffect } from 'react'
import { createStyles } from '@mantine/styles';


const useStyles = createStyles((theme) => ({
  h1: {
    fontSize: 54,
    fontWeight: 700,
    lineHeight: 'initial',
    height: 'fit-content',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 40,
    },
  },
  p: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 'initial',
    height: 'fit-content',
    //marginTop: '-160px',
    color: '#626a7a'
  },
  button: {
    //marginTop: '-160px'
  },

  flex: {
    alignContent: 'flex-start',
  },

  img: {
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    margin: '0 auto',
  },

}));

export function MainWrapper() {
  const { classes } = useStyles();
  const anim = [
    <><Mark color="indigo">HikkaHost</Mark></>,
  ]
  let text = anim[0];

  return (
    <SimpleGrid cols={{ base: 1, sm: 1, lg: 2 }} spacing="md">
      <Grid p={30} className={classes.flex}>
        <h1 className={classes.h1}>
          Используй Hikka<br />
          юзербота по <br />
          полной с нами!
        </h1>
        <p className={classes.p}>
          Приобрети хост, настрой под себя,<br />
          и используй все фичи Telegram<br />
          у нас в {text} за гроши!!!
        </p>
        <Button color="blue" variant="outline" size="lg" className={classes.button} mt={20} onClick={() => { window.location.href = 'https://t.me/hikkahost_bot' }}>
          Перейти в Telegram бота
        </Button>
      </Grid>
      <Grid>
        <img src="/main.png" className={classes.img} />
      </Grid>
    </SimpleGrid>
  );
}