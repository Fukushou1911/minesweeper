import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const nomrmalBord = (n: number) => [
    [n, n, n, n, n, n, n, n, n],
    [n, n, n, n, n, n, n, n, n],
    [n, n, n, n, n, n, n, n, n],
    [n, n, n, n, n, n, n, n, n],
    [n, n, n, n, n, n, n, n, n],
    [n, n, n, n, n, n, n, n, n],
    [n, n, n, n, n, n, n, n, n],
    [n, n, n, n, n, n, n, n, n],
    [n, n, n, n, n, n, n, n, n],
  ];
  // const [samplePosition, setSamplePosition] = useState(0);
  // const [bombMap, setBoard] = useState(nomrmalBord(0));
  // const [userInputs] = useState([]);
  // console.log(samplePosition);
  const board: number[][] = nomrmalBord(-1);
  console.table(board);
  return (
    <div className={styles.container}>
      <div className={styles.flame}>
        <div className={styles.informationBoard}>
          <div className={styles.flagBoard} />
          <div className={styles.statusBoard}>
            <div className={styles.statusNumber} />
          </div>
          <div className={styles.timeBoard} />
        </div>
        <div className={styles.board}>
          {board.map(() => (
            <>
              <div className={styles.cell}>
                <div className={styles.number} />
              </div>
              <div className={styles.cell}>
                <div className={styles.number} />
              </div>
              <div className={styles.cell}>
                <div className={styles.number} />
              </div>
              <div className={styles.cell}>
                <div className={styles.number} />
              </div>
              <div className={styles.cell}>
                <div className={styles.number} />
              </div>
              <div className={styles.cell}>
                <div className={styles.number} />
              </div>
              <div className={styles.cell}>
                <div className={styles.number} />
              </div>
              <div className={styles.cell}>
                <div className={styles.number} />
              </div>
              <div className={styles.cell}>
                <div className={styles.number} />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

// <div className={styles.sampleStyle}
// style={{ backgroundPosition: `${-30 * samplePosition}px, 0px` }}/>
export default Home;
