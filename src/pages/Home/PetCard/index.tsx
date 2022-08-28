import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { IPet } from "interfaces/i-pet";

import { AppPaths } from "Routes/AppRoutes";

import styles from "./PetCard.module.css";

type IPetSemID = Omit<IPet, "id">
interface Props extends IPetSemID, HTMLAttributes<HTMLDivElement> { }

function PetCard({ img, nome, idade, porte, descricao, localizacao, className }: Props) {
    return (
        <article className={classNames(className, styles.card)}>
            <div className={styles.card_image}>
                <img src={img} alt="" />
            </div>
            <section className={styles.card_infos}>
                <h2 className={styles.card_infos__nome}>
                    {nome}                      
                </h2>

                <ul className={styles.card_infos__infos}>
                    <li>
                        {idade}
                    </li>
                    <li>
                        {porte}    
                    </li>
                    <li>
                        {descricao}    
                    </li>
                </ul>
            </section>

            <section>
                <address className={styles.card_contato__endereco}>
                    {localizacao}   
                </address>
                <Link className={styles.card_contato__link} to={AppPaths.contato}>
                    Falar com responsável
                </Link>
            </section>
        </article>
    );
}

export default PetCard;