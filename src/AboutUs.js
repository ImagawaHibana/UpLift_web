import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import twitterLogo from './assets/twitterlogo.png';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  root: {
    backgroundColor: '#E8E8E8',
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
    width: '48px',
    height: '48px',
  },
}));

const AboutUs = ()=>{
  const classes = useStyles();

  return(
    <div className={classes.root}>
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
        <Button><img alt="twitterLogo" src={twitterLogo} className={classes.avater}/></Button>
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
        <Button><img alt="twitterLogo" src={twitterLogo} className={classes.avater}/></Button>
      </div>
    </div>
  )
};

export default AboutUs;