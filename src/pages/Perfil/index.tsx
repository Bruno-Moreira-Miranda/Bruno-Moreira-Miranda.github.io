import classNames from "classnames";
import { Textarea, TextInput } from "components/UI/Inputs";

import PerfilImgInput from "./PerfilImgInput";

import "styles/common/container.module.css";
import "styles/common/texto.module.css";
import styles from "./Perfil.module.css";
import Button from "components/UI/Buttons";

function Perfil() {
    return (
        <main className={classNames(styles.perfil, "container", "main-v-padding-top", "main-v-padding-bottom-primario")}>
            <h1 className={classNames(styles.texto, "texto-primario", "texto-center")}>
                Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
            </h1>

            <form className={styles.formulario}>
                <h2 className={styles.formulario__titulo}>
                    Perfil
                </h2>

                <PerfilImgInput id="perfil-img" />

                <TextInput
                    type="text"
                    id="perfil-nome"
                    labelText="Nome"
                    placeholder="Joana Magalhães"
                    aparencia="primario"
                />

                <TextInput
                    type="num"
                    id="perfil-numero"
                    labelText="Telefone"
                    placeholder="55 11 XXXXXXXXX"
                    aparencia="primario"
                />

                <TextInput
                    type="text"
                    id="perfil-cidade"
                    labelText="Cidade"
                    placeholder="São Paulo"
                    aparencia="primario"
                />

                <Textarea
                    id="perfil-sobre"
                    labelText="Sobre"
                    placeholder="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."
                    aparencia="primario"
                />

                <Button type="button">
                    Salvar
                </Button>

            </form>
        </main>
    );
}
export default Perfil;