import styles from "./IndexPage.module.css";

function IndexPage() {
  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <span className={styles.num}>1</span>
        <span className={styles.name}>Block chair</span>
        <span className={styles.material}>Wood, Foam & Fabric</span>
      </div>
      {/* Section one */}
      <section className={styles.one}>
        <img
          className={styles.tall}
          src="images/index/1.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.normal}
          src="images/index/2.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.tall}
          src="images/index/3.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.normal}
          src="images/index/4.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.normal}
          src="images/index/5.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.tall}
          src="images/index/6.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
      </section>
      {/* Section one */}
      {/* Section two */}

      <div className={styles.div}>
        <span className={styles.num}>2</span>
        <span className={styles.name}>Totem side table</span>
        <span className={styles.material}>Wood, concrete</span>
      </div>
      <section className={styles.one}>
        <img
          className={styles.normal}
          src="images/index/7.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.tall}
          src="images/index/8.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.normal}
          src="images/index/9.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.wide}
          src="images/index/10.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.normal}
          src="images/index/11.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
      </section>
      {/* Section two */}
      {/* Section three  */}

      <div className={styles.div}>
        <span className={styles.num}>3</span>
        <span className={styles.name}>H Chair</span>
        <span className={styles.material}>Wood, Foam & Fabric</span>
      </div>
      <section className={styles.one}>
        <img
          className={styles.wide}
          src="images/index/12.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.normal}
          src="images/index/13.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.tall}
          src="images/index/14.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.normal}
          src="images/index/15.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.tall}
          src="images/index/16.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
      </section>
      {/* Section three  */}
      {/* Section four */}
      <div className={styles.div}>
        <span className={styles.num}>4</span>
        <span className={styles.name}>O Stool</span>
        <span className={styles.material}>Steel</span>
      </div>
      <section className={styles.one}>
        <img
          className={styles.normal}
          src="images/index/17.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.tall}
          src="images/index/18.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.normal}
          src="images/index/19.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.wide}
          src="images/index/20.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.normal}
          src="images/index/21.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
      </section>

      {/* Section four */}
    </main>
  );
}

export default IndexPage;
