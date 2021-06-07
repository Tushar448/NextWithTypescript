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
  Theme,
  Button
} from "@material-ui/core";
import Router from "next/router";

interface LoginLayoutProps {
    children?: JSX.Element;
    title?: string;
    logoutButton?: boolean;
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
export const LoginLayout:React.FC<LoginLayoutProps> = ({children, title, logoutButton}) => {
  // used for checking current route
  const classes = useStyles();
const handleLogout = () => {
  Router.push('/login')
}
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
          <Box display="flex" flexDirection="row">
          <Typography variant='h6'>
            {title}
          </Typography>
         { logoutButton && <Box ml={150}>
          <Button color="primary"  style ={{color: "black"}}onClick={()=> handleLogout()}>Logout</Button>
        </Box>
}
          </Box>
          
        
          
        </Toolbar>
      </AppBar>
      <Box className={classes.meetingBody}>{children}</Box>
    </>
  );
}
