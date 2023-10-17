import styles from "./IndexPage.module.css";
import indexDataImages from "./IndexData";

import { motion } from "framer-motion";
import { Fragment } from "react";

const animateImages = {
  hidden: { opacity: 0, x: "30%" },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 2,
    },
  },
};

function IndexPage() {
  return (
    <main className={styles.main}>
      {indexDataImages.map((images, i) => (
        <Fragment key={i}>
          <div className={styles.div}>
            <span className={styles.id}>{images.div.id}</span>
            <span className={styles.name}>{images.div.name}</span>
            <span className={styles.material}>{images.div.material}</span>
          </div>
          <section className={styles[images.sectionClass]}>
            {images.items.map((img, index) => (
              <motion.img
                variants={animateImages}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                key={index}
                src={img.image}
                className={styles[img.class]}
                alt="Chairs"
                loading="lazy"
                draggable="false"
              />
            ))}
          </section>
        </Fragment>
      ))}
    </main>
  );
}

export default IndexPage;
