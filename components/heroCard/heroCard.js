import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import style from "../../styles/herocard.module.css";
import Image from "next/image";

import { sanityClient, urlFor } from "../../lib/sanity";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const HeroCard = ({ props }) => {
  console.log("dtata", props);


  const classes = useStyles();

  return (
    <div className={style.cardContainer}>
      {

        props.map((r) => (
          <section className={style.shadow} key={r._id}>
            <Card className={classes.root}>
              <CardActionArea>
                <Image src={urlFor(r.image).url()} height={350} width={350} alt="ds" />

                <Typography className={style.blurb} component="p">
                  <div><Image src="https://www.brightlocal.com/wp-content/themes/brightlocal/assets/images/quote_marks.svg" alt="quote" width={31} height={26} />
                    <p className={style.blurbText}>{r.notes}</p>
                  </div>
                </Typography>

                <Typography style={{ padding: '10px', marginBottom: '10px' }}>
                  <span>{r.name}</span>
                  <p className={style.blurbTextEnd}>{r.bio.children[0].text}</p>
                </Typography>
              </CardActionArea>
            </Card>
          </section>
        ))}
    </div>
  );
};

export default HeroCard;
