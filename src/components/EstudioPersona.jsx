import styles from "./EstudioPersona.module.css";
import images from "./EstudioData";
import { AnimatePresence, motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function EstudioPersona() {
  return (
    <main>
      {images.map((img, i) => (
        <section className={styles[img.sectionClass]} key={i}>
          {img.items.map((img) => (
            <AnimatePresence key={img.id}>
              <div>
                <motion.img
                  initial={{
                    WebkitMaskImage: hiddenMask,
                    maskImage: hiddenMask,
                  }}
                  whileInView={{
                    WebkitMaskImage: visibleMask,
                    maskImage: visibleMask,
                  }}
                  exit={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  src={img.image}
                  alt={img.name}
                  draggable="false"
                  className={styles[img.class]}
                  loading="lazy"
                />
                <div className={styles.description}>
                  <span>{img.id}</span>
                  <span>{img.name}</span>
                </div>
              </div>
            </AnimatePresence>
          ))}
        </section>
      ))}
    </main>
  );
}

export default EstudioPersona;
