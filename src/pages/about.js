import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        lorem, ipsum dolor sit amet consectetur adipisicing elit. at laboriosam
        aspernatur dolor esse numquam eligendi voluptatibus labore magnam,
        inventore error iure reprehenderit amet quidem repellendus fuga eum
        doloribus explicabo tenetur!
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
