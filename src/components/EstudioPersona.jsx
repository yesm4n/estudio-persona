import styles from "./EstudioPersona.module.css";
import images from "./EstudioData";
import { motion } from "framer-motion";

// TODO
const animateImages = {
  hidden: { opacity: 0, y: 200, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
    },
  },
};

function EstudioPersona() {
  return (
    <main>
      {images.map((img, i) => (
        <section className={styles[img.sectionClass]} key={i}>
          {img.items.map((img) => (
            <motion.div
              key={img.id}
              variants={animateImages}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <img
                className={styles[img.class]}
                src={img.image}
                alt={img.name}
                loading="lazy"
                draggable="false"
              />
              <div className={styles.description}>
                <span>{img.id}</span>
                <span>{img.name}</span>
              </div>
            </motion.div>
          ))}
        </section>
      ))}
    </main>
  );
}

export default EstudioPersona;
