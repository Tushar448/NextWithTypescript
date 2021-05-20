import React from "react";
import Head from "next/head";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  createStyles,
  Theme
} from "@material-ui/core";

interface LoginLayoutProps {
    children?: JSX.Element;
    title?: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    meetingHeader: {
      border: 0
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    meetingBody: {
      padding: '100px 32px 32px 32px'
    }
  })
);
export const LoginLayout:React.FC<LoginLayoutProps> = ({children, title}) => {
  // used for checking current route
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AppBar className={classes.meetingHeader}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          ></IconButton>
          <Typography variant='h6'>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.meetingBody}>{children}</Box>
    </>
  );
}
