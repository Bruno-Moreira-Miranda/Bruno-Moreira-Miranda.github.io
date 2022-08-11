import classNames from "classnames"; import Button from "components/UI/Buttons";
import { Textarea, TextInput } from "components/UI/Inputs";

import styles from "./Contato.module.css";

function Contato() {
    return (
        <main className={classNames(styles.contato, "container-main", "padding-v-primario")}>
            <h1 className={classNames(styles.titulo, "texto-primario", "texto-center")}>
                Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:
            </h1>

            <form className={styles.formulario}>
                <TextInput
                    type="text"
                    id="contato-nome"
                    labelText="Nome"
                    placeholder="Insira seu nome completo"
                    aparencia="primario"
                />

                <TextInput
                    type="num"
                    id="contato-numero"
                    labelText="Numero"
                    placeholder="Insira seu telefone e/ou whatsapp"
                    aparencia="primario"
                />

                <TextInput
                    type="text"
                    id="contato-nome-animal"
                    labelText="Nome do animal"
                    placeholder="Por qual animal você se interessou?"
                    aparencia="primario"
                />

                <Textarea
                    id="contato-mensagem"
                    labelText="Mensagem"
                    placeholder="Escreva sua mensagem"
                    aparencia="primario"
                />

                <Button type="button">
                    Enviar
                </Button>

            </form>

        </main>
    );
}
export default Contato;