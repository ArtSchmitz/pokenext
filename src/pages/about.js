import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Projeto feito em Next.JS e React.JS, No site, é possível visualizar
        informações sobre os Pokémons, tais como o tipo e características como
        peso e altura. Aplicação feita em curso de Next.JS
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
      <div className={styles.img_icons}>
        <Image
          src="/images/react-icon.png"
          width="60"
          height="50"
          alt="React"
          id="react"
        />
        <Image
          src="/images/next-icon.png"
          width="90"
          height="90"
          alt="Next"
          id="next"
        />
      </div>
    </div>
  );
}
