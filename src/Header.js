import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';

import mainLogo from './assets/upliftlogo_white.png';
import twitterLogo from './assets/twitterlogo.png';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  root: {flexGrow: 1},
  appBar: {
    zIndex: 2000,
  },
  mainLogo: {
    width: 'auto',
    height: '36px',
  },
  void: {flexGrow: 1},
  button: {
    color: '#E8E8E8',
  },
  dialogRoot: {
    width: '100vw',
    minHeight: '100vh',
  },
  title: {
    margin: '16px 0 0 16px',
  },
  memberCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px 40px'
  },
  photoAvater: {
    width: '184px',
    height: '184px',
    margin: '8px',
  },
  positionText: {

  },
  nameText: {
    padding: '8px 0',
  },
  description: {
    padding: '8px 0',
  },
  avater: {
    padding: '8px 0',
  },
}));

const Header = ()=>{
  const classes = useStyles();
  const [aboutUs,setAboutUs] = useState(false);

  return(
    <div className={classes.root}>
      <AppBar elevation={1} className={classes.appBar}>
        <Toolbar>
          <img alt="mainLogo" src={mainLogo} className={classes.mainLogo} onClick={()=>{setAboutUs(false)}}/>
          <div className={classes.void}/>
          <Button className={classes.button} onClick={()=>{setAboutUs(true)}}>About Us</Button>
          <Button className={classes.button} href="https://docs.google.com/forms/d/e/1FAIpQLSdp9IGlmr40sKBNglhP4l4miEhvObej8xiZ1wNPQXhB7wfaEQ/viewform">
            お問い合わせ
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog fullScreen open={aboutUs} className={classes.dialogRoot}>
        <div className={classes.toolbar}/>
        <Typography variant='h5' className={classes.title}>ABOUT US</Typography>
        <div className={classes.memberCard}>
          <Avatar className={classes.photoAvater}>TK</Avatar>
          <Typography className={classes.positionText}>FOUNDER</Typography>
          <Typography variant='h6' className={classes.nameText}>TAKANORI KAI</Typography>
          <Typography className={classes.description}>
            東京大学工学部。幼少期を米国ジョージア州で過ごし、中学から日本に帰国。英語を得意とし、当時県内史上最年少で英検一級合格、高校3年次に全日本青少年英語弁論大会優勝。大学ではアメフト部に所属、４年次に国立大学初の関東最上位リーグ昇格を果たす。
            <br/><br/>
            フィットネスを通して人生が明るくなる・自分に自信を持てるようになる、という経験がきっかけとなり、それを多くの人々に広めたいという想いでThe UPLIFT Appを個人で開発。
          </Typography>
          <Avatar alt="twitterLogo" src={twitterLogo} className={classes.avater}/>
        </div>
        <div className={classes.memberCard}>
          <Avatar className={classes.photoAvater}>TK</Avatar>
          <Typography className={classes.positionText}>FOUNDER</Typography>
          <Typography variant='h6' className={classes.nameText}>TAKANORI KAI</Typography>
          <Typography className={classes.description}>
            東京大学工学部。幼少期を米国ジョージア州で過ごし、中学から日本に帰国。英語を得意とし、当時県内史上最年少で英検一級合格、高校3年次に全日本青少年英語弁論大会優勝。大学ではアメフト部に所属、４年次に国立大学初の関東最上位リーグ昇格を果たす。
            <br/><br/>
            フィットネスを通して人生が明るくなる・自分に自信を持てるようになる、という経験がきっかけとなり、それを多くの人々に広めたいという想いでThe UPLIFT Appを個人で開発。
          </Typography>
          <Avatar alt="twitterLogo" src={twitterLogo} className={classes.avater}/>
        </div>
      </Dialog>
    </div>
  )
};

export default Header;