import { useEffect, useState } from "react";
import classNames from "classnames";

import useSetTitle from "Hooks/useSetTitle";
import useSetBodyClass from "Hooks/useSetBodyClass";

import PetCard from "./PetCard";

import { IPet } from "interfaces/i-pet";

import PetsService from "services/pets-service";

import styles from "./Home.module.css";

function Home() {
    useSetTitle("Home");
    useSetBodyClass(styles.home_bg);

    const [pets, setPets] = useState<IPet[] | null>(null);

    useEffect(() => {
        PetsService.buscarTodos()
            .then(thisPets => setPets(thisPets));
    }, []);

    return (
        <main className={classNames(styles.home, "padding-top-main")}>
            <h1 className={classNames(styles.titulo, "texto-primario", "texto-center")}>
                <span>Olá!</span> Veja os amigos disponíveis para adoção!
            </h1>

            <section>
                <ul className={styles.pets_cards}>
                    {
                        pets &&
                        pets.map(petInfo => (
                            <PetCard
                                key={petInfo.id}
                                img={petInfo.img}
                                nome={petInfo.nome}
                                idade={petInfo.idade}
                                porte={petInfo.porte}
                                descricao={petInfo.descricao}
                                localizacao={petInfo.localizacao}
                            />
                        ))
                    }
                </ul>
            </section>
        </main>
    );
}
export default Home;