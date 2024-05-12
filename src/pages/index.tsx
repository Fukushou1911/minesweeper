import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [samplePosition, setSamplePosition] = useState(0);
  const [bombMap, setBoard] = State([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [userInputs] = State([]);
  console.log(samplePosition);
  return (
    <div className={styles.container}>
      <div className={styles.flame}>
        <div className={styles.informationBoard}>
          <div className={styles.flagBoard} />
          <div className={styles.statusBoard} />
          <div className={styles.timeBoard} />
        </div>
        <div className={styles.board}>
          <div className={styles.cell} />
          <div className={styles.masses} />
        </div>
      </div>
    </div>
  );
};

// className={styles.sampleStyle}
// style={{ backgroundPosition: `${-30 * samplePosition}px, 0px` }}
export default Home;
