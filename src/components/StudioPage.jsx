import styles from "./StudioPage.module.css";
import { motion } from "framer-motion";

const animateText = {
  hidden: { opacity: 0, x: 300 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 10,
      duration: 2,
    },
  },
};

const animateImages = {
  hidden: { opacity: 0, y: 100, scale: 1.1 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
    },
  },
};

function StudioPage() {
  return (
    <main>
      {/* Section one */}
      <section className={styles.one}>
        <div>
          <img
            className={styles.imgOne}
            src="images/studio/1.webp"
            alt="O Stool"
            loading="lazy"
            draggable="false"
          />
          <div className={styles.description}>
            <span>1</span>
            <span>O Stool</span>
          </div>
        </div>
        <div>
          <img
            className={styles.imgTwo}
            src="images/studio/2.webp"
            alt="Emiliana Gonzalez and Jessie Young"
            loading="lazy"
            draggable="false"
          />
        </div>
      </section>
      {/* Section one */}

      {/* Section two */}
      <motion.section
        variants={animateText}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h1 className={styles.h2}>
          <span className={styles.spacing}>
            {" "}
            Estudio Persona was created by
          </span>{" "}
          Emiliana Gonzalez and Jessie Young in 2015. Born in Uruguay, they both
          met in Los Angeles where they started working on a collaborative
          process that evolved into the formation of Estudio Persona.
        </h1>
      </motion.section>
      {/* Section two */}

      {/* Section three */}
      <motion.section
        className={styles.three}
        variants={animateImages}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <span className={styles.explore}>Explore Collections</span>
        <div className={styles.threeContent}>
          <div>
            <span className={styles.title}>Connection</span>
            <span className={styles.content}>
              A collection that seeks a balance of forms within a domestic
              space.
            </span>
            <span className={styles.download}>Download PDF</span>
          </div>
          <img
            src="images/studio/3.webp"
            alt="chair"
            loading="lazy"
            draggable="false"
          />
        </div>

        <span></span>
        <div className={styles.threeContent}>
          <div>
            <span className={styles.title}>Flow</span>
            <span className={styles.content}>
              A collection that looks for light in darkness and for softness in
              harsh steel and glass.
            </span>
            <span className={styles.download}>Download PDF</span>
          </div>
          <img
            src="images/studio/4.webp"
            alt="chair"
            loading="lazy"
            draggable="false"
          />
        </div>

        <span></span>
        <div className={styles.threeContent}>
          <div>
            <span className={styles.title}>Hilo</span>
            <span className={styles.content}>
              Hilo is a family of pieces that communicate with each other.
            </span>
            <span className={styles.download}>Download PDF</span>
          </div>
          <img
            src="images/studio/5.webp"
            alt="chair"
            loading="lazy"
            draggable="false"
          />
        </div>
      </motion.section>
      {/* Section three */}

      {/* Section four */}
      <motion.section
        className={styles.four}
        variants={animateImages}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <img
          src="images/studio/6.webp"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          src="images/studio/7.webp"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
      </motion.section>
      {/* Section four */}

      {/* Section five */}
      <motion.section
        className={styles.five}
        variants={animateText}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h3 className={styles.h3}>
          At the core of their practice lies a desire to unearth the full
          potential of raw materials and a creative expression reflective of
          their cultural identity and heritage.
        </h3>
      </motion.section>
      {/* Section five */}

      {/* Section six */}
      <motion.section
        className={styles.six}
        variants={animateImages}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p>
          Estudio Persona was created by Emiliana Gonzalez and Jessie Young in
          2015. Born in Uruguay, they both met in Los Angeles where they started
          working on a collaborative process that evolved into the formation of
          Estudio Persona. <br /> <br />
          The colorful and vibrant Hispanic cliché is turned on its head in
          favor of brutalist design evoking stark natural forms and sculptural
          lines.
        </p>
      </motion.section>
      {/* Section six */}

      {/* Section seven */}
      <div className={styles.div}>
        <span className={styles.num}>1</span>
        <span className={styles.name}>Explore Gallery</span>
        <span className={styles.material}>Wood, Foam & Fabric</span>
      </div>
      <motion.section
        className={styles.seven}
        variants={animateImages}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <img
          className={styles.tall}
          src="images/studio/8.webp"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.normal}
          src="images/studio/9.webp"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.tall}
          src="images/studio/10.webp"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.normal}
          src="images/studio/11.webp"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.normal}
          src="images/studio/12.webp"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.tall}
          src="images/studio/13.webp"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
      </motion.section>
      {/* Section seven */}
    </main>
  );
}

export default StudioPage;
