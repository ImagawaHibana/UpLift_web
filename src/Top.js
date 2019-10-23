import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';

import mainImg from './assets/lpmain.png';
import ssHome from './assets/screenshot_home.png';
import ssWorkout from './assets/screenshot_workout.png';
import workout1 from './assets/workout1.png';
import workout2 from './assets/workout2.png';
import workout3 from './assets/workout3.png';
import ssArticle from './assets/screenshot_article.png';
import article1 from './assets/article1.png';
import article2 from './assets/article2.png';
import article3 from './assets/article3.png';
import data1 from './assets/screenshot_article.png';
import data2 from './assets/screenshot_article.png';
import data3 from './assets/screenshot_article.png';
import instaLogo from './assets/instagramlogo.png';
import twitterLogo from './assets/twitterlogo.png';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  root: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#000000',
    overflow: 'hidden', //はみ出しを非表示、画像サイズをレスポンシブにしたい
  },
  main: {
    display: 'flex',
    width: '100vw',
    backgroundImage: `url(${mainImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px 0',
    },
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 0',
    }
  },
  ssHome: {
    width: 'auto',
    padding: '16px',
    [theme.breakpoints.down('xs')]: {
      height: '400px',
    },
    [theme.breakpoints.up('sm')]: {
        height: '560px',
    },
  },
  mainBody: {
    [theme.breakpoints.up('sm')]: {
      alignSelf: 'flex-end',
      padding: '64px',
    }
  },
  mainText: {
    color: 'white',
    padding: '4px 32px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '28px',
    }
  },
  mainTitle: {
    color: 'white',
    padding: '4px 0',
    fontWeight: 900,
    [theme.breakpoints.down('xs')]: {
      fontSize: '26px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '48px',
    }
  },
  area1: {
    width: '100vw',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px 0',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '48px 0',
    }
  },
  screenshot: {
    width: 'auto',
    [theme.breakpoints.down('xs')]: {
      padding: '8px 0',
      height: '320px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '24px 0',
      height: '560px',
    },
  },
  example: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      alignSelf: 'stretch',
      justifyContent: 'space-around',
      padding: '8px 0',
    },
    [theme.breakpoints.up('sm')]: {
      order: 3,
      justifyContent: 'center',
      padding: '16px 0',
    },
  },
  exampleItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '112px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '256px',
    },
  },
  exampleImg: {
    borderRadius: '8px',
    margin: '4px 0',
    [theme.breakpoints.down('xs')]: {
      width: '106px',
      height: '72px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '236px',
      height: '160px',
    },
  },
  area2: {
    width: '100vw',
    backgroundColor: '#E8E8E8',
    transform: 'skewY(-8deg)',
  },
  area2Content: {
    display: 'flex',
    transform: 'skewY(8deg)',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center', 
      margin: '48px 0', 
      padding: '48px 0',
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: '96px 0',
      padding: '96px 0',
    },
  },
  area3: {
    width: '100vw',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px 0',
      },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '48px 0',
    }
  },
  dataExample: {
    display: 'flex',
    padding: '8px 0',
    [theme.breakpoints.down('xs')]: {
      alignSelf: 'stretch',
      justifyContent: 'space-around',
    },
    [theme.breakpoints.up('sm')]: {
      order: 3,
      justifyContent: 'center',
    }
  },
  dataExItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dataExImg:{
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      height: '172px',
    },
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      height: '360px',
    },
  },
  area4: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: '24px 0',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '48px 0',
    }
  },
  contact:{
    width: '320px',
    [theme.breakpoints.up('sm')]: {
      order: 3,
    }
  },
  textField: {
    backgroundColor: '#E8E8E8'
  },
  mailButton:{
    color: '#E8E8E8',
    backgroundColor: '#4199FF',
  },
  followUs: {
    display: 'flex',
    justifyContent: 'center',
  },
  fUText: {
    [theme.breakpoints.down('xs')]: {
      padding: '8px 0 2px 0',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '16px 0 4px 0',
    }
  },
  avater: {
    [theme.breakpoints.down('xs')]: {
      width: '48px',
      height: '48px',
      },
    [theme.breakpoints.up('sm')]: {
      width: '64px',
      height: '64px',
    }
  },
  avaterButton: {
    [theme.breakpoints.down('xs')]: {
      margin: '0 8px',
      },
    [theme.breakpoints.up('sm')]: {
      margin: '0 16px',
    }
  },
  areaBody:{
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    } 
  },
  areaText: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
      padding: '8px 32px',
    },
    [theme.breakpoints.up('sm')]: {
      order: 2,
      maxWidth: '720px',
      fontSize: '16px',
      padding: '16px 32px',
    }
  },
  areaTitle: {
    fontWeight: 900,
    [theme.breakpoints.down('xs')]: {
      padding: '8px 0',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '16px 0',
      fontSize: '32px',
      order: 1,
    }
  },
  caption: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '10.5px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '12px',
    }
  },
}));

const Top = ()=>{
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <div className={classes.toolbar}/>
      <div className={classes.main}>
        <img alt="ssHome" src={ssHome} className={classes.ssHome}/>
        <div className={classes.mainBody}>
          <Typography align="center" noWrap className={classes.mainTitle}>
            理想のカラダを手に入れよう
          </Typography>
          <Typography align="center" noWrap className={classes.mainText}>
            必要なすべてのものがここにある
          </Typography>
        </div>
      </div>
      <div className={classes.area1}>
        <img alt="ssWorkout" src={ssWorkout} className={classes.screenshot}/>
        <div className={classes.areaBody}>
          <Typography color="secondary" align="center" variant="h5" className={classes.areaTitle}>
            自分にあったワークアウトが<Hidden smUp><br/></Hidden>見つかる
          </Typography>
          <div className={classes.example}>
            <div className={classes.exampleItem}>
              <img alt="workout1" src={workout1} className={classes.exampleImg}/>
              <Typography color="secondary" align="center" className={classes.caption}>ウエイトトレーニング</Typography>
            </div>
            <div className={classes.exampleItem}>
              <img alt="workout2" src={workout2} className={classes.exampleImg}/>
              <Typography color="secondary" align="center" className={classes.caption}>自重トレーニング</Typography>
            </div>
            <div className={classes.exampleItem}>
              <img alt="workout3" src={workout3} className={classes.exampleImg}/>
              <Typography color="secondary" align="center" className={classes.caption}>ヨガ</Typography>
            </div>
          </div>
          <Typography color="secondary" className={classes.areaText}>
            フィットネスと何年も真剣に向かい合ってきたプロのトレーナーやインフルエンサーによって作成されたワークアウト。経験や実力問わず、今の自分がレベルアップするためのメニューがここにある。意識すべきポイントや正しいフォームを動画で丁寧に説明してくれるから、初心者でも安心。「筋トレはじめたいけど何をすればいいのかわからない」UPLIFTを使えば、この言葉を口にすることはもうないだろう。
          </Typography>
        </div>
      </div>
      <div className={classes.area2}>
        <div className={classes.area2Content}>
          <img alt="ssArticle" src={ssArticle} className={classes.screenshot}/>
          <div className={classes.areaBody}>
            <Typography align="center" variant="h5"  className={classes.areaTitle}>
              理想の情報で<Hidden smUp><br/></Hidden>理想の自分に近づく
            </Typography>
            <div className={classes.example}>
              <div className={classes.exampleItem}>
                <img alt="article1" src={article1} className={classes.exampleImg}/>
                <Typography align='center' className={classes.caption}>トレーニング</Typography>
              </div>
              <div className={classes.exampleItem}>
                <img alt="article2" src={article2} className={classes.exampleImg}/>
                <Typography align='center' className={classes.caption}>栄養・ダイエット</Typography>
              </div>
              <div className={classes.exampleItem}>
                <img alt="article3" src={article3} className={classes.exampleImg}/>
                <Typography align='center' className={classes.caption}>注目のジムやスタジオ</Typography>
              </div>
            </div>
            <Typography className={classes.areaText}>
              トレーニング・栄養・コンディショニングに関する、プロのトレーナーや管理栄養士からの最新の情報が手に入る。また、地域別に注目のジム・スタジオ・パーソナルトレーニングの情報も発信されるため、自分にあったトレーニングができる場所がわかる。理想の自分に近づくための、知識と場所の情報はもう揃った。
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.area3}>
        <div className={classes.areaBody}>
          <Typography align='center' variant='h5' color='secondary' className={classes.areaTitle}>
            数値記録・目標設定も<Hidden smUp><br/></Hidden>すべてここで
          </Typography>
          <div className={classes.dataExample}>
            <div className={classes.dataExItem}>
              <img alt="data1" src={data1} className={classes.dataExImg}/>
              <Typography align='center' color='secondary' className={classes.caption}>数値記録</Typography>
            </div>
            <div className={classes.dataExItem}>
              <img alt="data2" src={data2} className={classes.dataExImg}/>
              <Typography align='center' color='secondary' className={classes.caption}>目標設定</Typography>
            </div>
            <div className={classes.dataExItem}>
              <img alt="data3" src={data3} className={classes.dataExImg}/>
              <Typography align='center' color='secondary' className={classes.caption}>推移グラフ</Typography>
            </div>
          </div>
          <Typography color='secondary' className={classes.areaText}>
            見つけたワークアウトを始めると、そのまま数値を記録することができる。記録した数値を管理しグラフで推移を出すことができるため、過去の自分も今の自分も一目瞭然だ。目標数値を設定すれば、あとはその目標を達成するのみ。
          </Typography>
        </div>
      </div>
      <div className={classes.area4}>
        <Typography align='center' color='secondary' variant='h5' className={classes.areaTitle}>
          The UPLIFT App, この冬登場
        </Typography>
        <Hidden xsUp>
          <Typography align='center' color='secondary' className={classes.areaText}>
            リリース情報など最新の情報を受け取る
          </Typography>
        </Hidden>
        <div className={classes.contact}>
          <Hidden xsUp>
            <TextField
              id="filled-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="filled"
              fullWidth
            />
            <Button fullWidth className={classes.mailButton}>登録</Button>
            <p/>
          </Hidden>
          <Typography align='center' color='secondary' className={classes.fUText}>FOLLOW US</Typography>
          <div className={classes.followUs}>
            <Button component="a" target="_blank" rel="noopener noreferrer" href="https://twitter.com/upliftfitnessjp" className={classes.avaterButton}>
              <img alt="twitterLogo" src={twitterLogo} className={classes.avater}/>
            </Button>
            <Button component="a" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/upliftfitnessjp" className={classes.avaterButton}>
              <img alt="instaLogo" src={instaLogo} className={classes.avater}/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Top;