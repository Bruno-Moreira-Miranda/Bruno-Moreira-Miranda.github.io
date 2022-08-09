import classNames from "classnames";
import { Link } from "react-router-dom";

import imagemTest from "assets/imagens/dungaLacunga-test.png";

import "styles/common/container.module.css";
import "styles/common/texto.module.css";
import styles from "./Home.module.css";

function Home() {
    return (
        <main className={classNames(styles.home, "main-v-padding-top")}>
            <h1 className={classNames(styles.titulo, "texto-primario", "texto-center")}>
                <span>Olá!</span> Veja os amigos disponíveis para adoção!
            </h1>

            <section>
                <ul className={styles.pets_cards}>
                    <li>
                        <article className={styles.pet_card}>
                            <div className={styles.card_image}>
                                <img src={imagemTest} alt="" />
                            </div>
                            <section className={styles.card_infos}>
                                <h2 className={styles.card_infos__nome}>
                                    Dunga
                                </h2>

                                <ul className={styles.card_infos__infos}>
                                    <li>2 anos</li>
                                    <li>Porte pequeno</li>
                                    <li>Calmo e educado</li>
                                </ul>
                            </section>

                            <section>
                                <address className={styles.card_contato__endereco}>
                                    Rio de Janeiro (RJ)
                                </address>
                                <Link className={styles.card_contato__link} to="">
                                    Falar com responsável
                                </Link>
                            </section>

                        </article>
                    </li>

                    <li>
                        <article className={styles.pet_card}>
                            <div className={styles.card_image}>
                                <img src={imagemTest} alt="" />
                            </div>
                            <section className={styles.card_infos}>
                                <h2 className={styles.card_infos__nome}>
                                    Dunga
                                </h2>

                                <ul className={styles.card_infos__infos}>
                                    <li>2 anos</li>
                                    <li>Porte pequeno</li>
                                    <li>Calmo e educado</li>
                                </ul>
                            </section>

                            <section>
                                <address className={styles.card_contato__endereco}>
                                    Rio de Janeiro (RJ)
                                </address>
                                <Link className={styles.card_contato__link} to="">
                                    Falar com responsável
                                </Link>
                            </section>

                        </article>
                    </li>

                    <li>
                        <article className={styles.pet_card}>
                            <div className={styles.card_image}>
                                <img src={imagemTest} alt="" />
                            </div>
                            <section className={styles.card_infos}>
                                <h2 className={styles.card_infos__nome}>
                                    Dunga
                                </h2>

                                <ul className={styles.card_infos__infos}>
                                    <li>2 anos</li>
                                    <li>Porte pequeno</li>
                                    <li>Calmo e educado</li>
                                </ul>
                            </section>

                            <section>
                                <address className={styles.card_contato__endereco}>
                                    Rio de Janeiro (RJ)
                                </address>
                                <Link className={styles.card_contato__link} to="">
                                    Falar com responsável
                                </Link>
                            </section>

                        </article>
                    </li>
                </ul>
            </section>
        </main>
    );
}
export default Home;