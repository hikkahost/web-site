import { Text, SimpleGrid, Container } from '@mantine/core';
import { createStyles } from '@mantine/styles';

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
    marginTop: '40px',
    marginBottom: '40px',
  },

  overlay: {
    position: 'absolute',
    height: 100,
    width: 160,
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  description: string;
}

function Feature({ title, description, className, ...others }: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Text size="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text color="dimmed" size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    title: '⚙️ Быстрота',
    description:
      'абсолютно всё выполняется в встроенной веб-панели, вам необходимо лишь пройти авторизацию в аккаунт',
  },
  {
    title: '💾 Удобство',
    description:
      'всё обслуживание сервера выполняется администратором, все необходимые зависимости и пакеты уже стоят в системе',
  },
  {
    title: '😌 Простота',
    description:
      'вам не нужно знать, как настраивать сервер, подключаться к нему и устанавливать юзербот. Всё уже готово',
  },
];

export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 10, sm: 'lg' }} verticalSpacing={{ base: 'md', sm: 'xl' }}>
        {items}
      </SimpleGrid>
    </Container>
  );
}