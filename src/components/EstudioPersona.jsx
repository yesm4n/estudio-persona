import styles from "./EstudioPersona.module.css";
import images from "./Data";

function EstudioPersona() {
  return (
    <main>
      {images.map((img, i) => (
        <section className={styles[img.sectionClass]} key={i}>
          {img.items.map((img) => (
            <div key={img.id}>
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
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}

export default EstudioPersona;
