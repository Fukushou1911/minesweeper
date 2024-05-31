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
  const board = [...Array(9)].map((_, y) => [...Array(9)].map((_, x) => ((y + x + 1) % 13) - 1));
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
          {board.map((row, y) =>
            row.map((number, x) => (
              <div
                className={number === -1 ? styles.cell : styles.number}
                style={{ backgroundPositionX: 30 - 30 * number }}
                key={`${y}-${x}`}
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
};

// <div className={styles.sampleStyle}
// style={{ backgroundPosition: `${-30 * samplePosition}px, 0px` }}/>
export default Home;
