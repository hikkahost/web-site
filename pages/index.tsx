import { HeaderAction } from '../components/header';
import { MainWrapper } from '../components/main-wrapper';
import { FeaturesAsymmetrical } from '../components/section';
import { HowWrapper } from '../components/how-wrapper';
import { PaymentWrapper } from '../components/payment-wrapper';
import { FooterLinks } from '../components/footer';
import { QRWrapper } from '../components/qr-wrapper';

import { Container } from '@mantine/core';
import { createStyles } from '@mantine/styles';

const useStyles = createStyles((theme) => ({
  font: {
    fontFamily: 'Golos UI',
  },
  hr: {
    marginTop: '100px',
    marginBottom: '100px',
    border: 'none',
    background: 'none',
  }
}));

export default function IndexPage() {
  const { classes } = useStyles();

  return (
    <>
      <Container size="xl" className={classes.font}>
        <HeaderAction />
        <MainWrapper />
        <hr className={classes.hr} />
        <FeaturesAsymmetrical />
        <hr className={classes.hr} />
        <HowWrapper />
        <hr className={classes.hr} />
        <PaymentWrapper />
        <hr className={classes.hr} />
        <QRWrapper />
      </Container>
      <FooterLinks data={[
        {
          title: 'Ссылки',
          links: [
            { label: 'Бот', link: 'https://t.me/hikkahost_bot' },
          ],
        }
      ]} />
    </>
  );
}
