import styles from "./EstudioPersona.module.css";
import { motion } from "framer-motion";

function EstudioPersona() {
  return (
    <main>
      {/* Section one */}
      <section className={styles.one}>
        <div>
          <img
            className={styles.imgOne}
            src="images/homepage/1.png"
            alt="Una chair"
            loading="lazy"
            draggable="false"
          />
          <div className={styles.description}>
            <span>1</span>
            <span>Una chair</span>
          </div>
        </div>

        <div>
          <img
            className={styles.imgTwo}
            src="images/homepage/2.png"
            alt="Block chair"
            loading="lazy"
            draggable="false"
          />
          <div className={styles.description}>
            <span>2</span>
            <span>Block chair</span>
          </div>
        </div>
      </section>
      {/* Section one */}
      {/* Section two */}
      <section className={styles.two}>
        <div>
          <img
            className={styles.imgOne}
            src="images/homepage/3.png"
            alt="Grey block chair"
            loading="lazy"
            draggable="false"
          />
          <div className={styles.description}>
            <span>3</span>
            <span>Grey block chair</span>
          </div>
        </div>

        <div>
          <img
            className={styles.imgTwo}
            src="images/homepage/4.png"
            alt="Hole bench"
            loading="lazy"
            draggable="false"
          />
          <div className={styles.description}>
            <span>4</span>
            <span>Hole bench</span>
          </div>
        </div>

        <div>
          <img
            className={styles.imgThree}
            src="images/homepage/5.png"
            alt="O Stool"
            loading="lazy"
            draggable="false"
          />
          <div className={styles.description}>
            <span>5</span>
            <span>O Stool</span>
          </div>
        </div>
      </section>
      {/* Section two */}
      {/* Section Three */}

      <section className={styles.three}>
        <div>
          <img
            className={styles.imgOne}
            src="images/homepage/6.png"
            alt="Table lamp luna"
            loading="lazy"
            draggable="false"
          />
          <div className={styles.description}>
            <span>6</span>
            <span>Table lamp luna</span>
          </div>
        </div>
      </section>
      {/* Section Three */}
      {/* Section Four */}

      <section className={styles.four}>
        <div>
          <img
            className={styles.imgOne}
            src="images/homepage/7.png"
            alt="Bow floor lamp"
            loading="lazy"
            draggable="false"
          />
          <div className={styles.description}>
            <span>7</span>
            <span>Bow floor lamp</span>
          </div>
        </div>

        <div>
          <img
            className={styles.imgTwo}
            src="images/homepage/8.png"
            alt="Wool boucle chair"
            loading="lazy"
            draggable="false"
          />
          <div className={styles.description}>
            <span>8</span>
            <span>Wool boucle chair</span>
          </div>
        </div>
      </section>
      {/* Section Four */}
    </main>
  );
}

export default EstudioPersona;
