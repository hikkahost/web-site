import { createStyles } from '@mantine/styles';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  inline: {
    display: 'inline-block',
    cursor: 'pointer',
    fontSize: '1.7rem',
    fontWeight: 'bolder',
    color: 'black',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: '1.4rem',
    },
  },
  image: {
    width: '64px',
    display: 'inline-block',
    margin: '5px',
    marginTop: '-5px',
    verticalAlign: 'middle',
  },
  link: {
    color: 'white',
    cursor: 'pointer'
  },
}));


export function Logo() {
  const { classes } = useStyles();

  return (
    <Link href='/' className={classes.link}>
      <div className={classes.inline}>
        <img src="/logo.png" className={classes.image} />
        <h2 className={classes.inline}>HikkaHost</h2>
      </div>
    </Link>
  );
}