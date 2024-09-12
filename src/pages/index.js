import Head from "next/head";
import styles from "@/pages/styles.module.css";
import getSeatMap from "@/utils/getSeatMap";
import {useEffect, useState} from "react";
import classnames from 'classnames'

export default function Home() {
  const [seatMap, setSeatMap] = useState({seatData: [], categoryData: []})
  const [numSeats] = useState(3)
  useEffect(() => {
    getSeatMap().then(seatMap => {
      seatMap && seatMap.seatData && seatMap.categoryData && setSeatMap(seatMap)
    })
  }, [])
  return (
    <>
      <Head>
        <title>Book my Show</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={styles.page}
      >
        <div>
          <div className={styles.numSelector}><span>How many seats do you want?</span><div>{[...new Array(9)].map((_, i) => <div key={i} className={classnames(styles.seat,  (i + 1) === numSeats &&  styles.selected)}>{i + 1}</div>)}</div></div>
        </div>
        <div className={styles.map}>
          {seatMap.seatData.map(({rowCode, seats}, index) => {
            return <div>
              <span className={styles.seats}>
                <span className={classnames(styles.rowName, styles.seat)}>{rowCode}</span>
                {seats.map(({seatNo, isAvail, isWalkway, isPreferred}, i) => {
                  return <div key={`${i}-${rowCode}`} className={classnames(styles.seat)}>{seatNo}</div>
                })}
              </span>
            </div>
          })}
        </div>
        <div className={styles.legendContainer}>
          <div className={styles.legend}>Selected: <div className={classnames(styles.seat, styles.selected)}></div></div>
          <div className={styles.legend}>Booked: <div className={classnames(styles.seat, styles.booked)}></div></div>
          <div className={styles.legend}>Preferred: <div className={classnames(styles.seat, styles.preferred)}></div></div>
        </div>
      </div>
    </>
  );
}
