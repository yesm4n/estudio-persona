import styles from "./StudioPage.module.css";

function StudioPage() {
  return (
    <main>
      {/* Section one */}
      <section className={styles.one}>
        <div>
          <img
            className={styles.imgOne}
            src="images/studio/1.png"
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
            src="images/studio/2.png"
            alt="Emiliana Gonzalez and Jessie Young"
            loading="lazy"
            draggable="false"
          />
        </div>
      </section>
      {/* Section one */}

      {/* Section two */}
      <section className={styles.two}>
        <h1 className={styles.h2}>
          <span className={styles.spacing}>
            {" "}
            Estudio Persona was created by
          </span>{" "}
          Emiliana Gonzalez and Jessie Young in 2015. Born in Uruguay, they both
          met in Los Angeles where they started working on a collaborative
          process that evolved into the formation of Estudio Persona.
        </h1>
      </section>
      {/* Section two */}

      {/* Section three */}
      <section className={styles.three}>
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
            src="images/studio/3.png"
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
            src="images/studio/4.png"
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
            src="images/studio/5.png"
            alt="chair"
            loading="lazy"
            draggable="false"
          />
        </div>
      </section>
      {/* Section three */}

      {/* Section four */}
      <section className={styles.four}>
        <img
          src="images/studio/6.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          src="images/studio/7.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
      </section>
      {/* Section four */}

      {/* Section five */}
      <section className={styles.five}>
        <h3 className={styles.h3}>
          At the core of their practice lies a desire to unearth the full
          potential of raw materials and a creative expression reflective of
          their cultural identity and heritage.
        </h3>
      </section>
      {/* Section five */}

      {/* Section six */}
      <section className={styles.six}>
        <p>
          Estudio Persona was created by Emiliana Gonzalez and Jessie Young in
          2015. Born in Uruguay, they both met in Los Angeles where they started
          working on a collaborative process that evolved into the formation of
          Estudio Persona. <br /> <br />
          The colorful and vibrant Hispanic cliché is turned on its head in
          favor of brutalist design evoking stark natural forms and sculptural
          lines.
        </p>
      </section>
      {/* Section six */}

      {/* Section seven */}
      <div className={styles.div}>
        <span className={styles.num}>1</span>
        <span className={styles.name}>Explore Gallery</span>
        <span className={styles.material}>Wood, Foam & Fabric</span>
      </div>
      <section className={styles.seven}>
        <img
          className={styles.imgEight}
          src="images/studio/8.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.imgNine}
          src="images/studio/9.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.imgTen}
          src="images/studio/10.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.imgEleven}
          src="images/studio/11.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.imgTwelve}
          src="images/studio/12.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
        <img
          className={styles.imgThirteen}
          src="images/studio/13.png"
          alt="chair"
          loading="lazy"
          draggable="false"
        />
      </section>
      {/* Section seven */}
    </main>
  );
}

export default StudioPage;
