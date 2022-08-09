import classNames from "classnames";
import Button from "components/UI/Buttons";
import { TextInput } from "components/UI/Inputs";

import Logo from "components/UI/Logo";

import "styles/common/container.module.css";
import "styles/common/texto.module.css";
import styles from "./Cadastro.module.css";

function Cadastro() {
    return (
        <main className={classNames(styles.cadastro, "container", "main-v-padding")}>
            <Logo className={styles.logo} type="azul" />

            <h1 className={classNames(styles.titulo, "texto-primario", "texto-center")}>
                <em>Ainda não tem cadastro?</em>
                <span></span> Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
            </h1>

            <form className={styles.formulario}>
                <TextInput
                    id="cadastro-email"
                    type="email"
                    labelText="Email"
                    placeholder="Escolha seu melhor email"
                />
                <TextInput
                    id="cadastro-nome"
                    type="text"
                    labelText="Nome"
                    placeholder="Digite seu nome completo"
                />
                <TextInput
                    id="cadastro-senha"
                    type="password"
                    labelText="Senha"
                    placeholder="Crie uma senha"
                />
                <TextInput
                    id="cadastro-confirmar-senha"
                    type="password"
                    labelText="Confirmar seu senha"
                    placeholder="Repita a senha criada acima"
                />

                <Button className={styles.cadastroButton} type="button">
                    Cadastrar
                </Button>
            </form>
        </main>
    );
}
export default Cadastro;