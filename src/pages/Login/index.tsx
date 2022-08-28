import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";

import { FormEvent, useRef } from "react";

import useSetBodyClass from "Hooks/useSetBodyClass";
import useSetTitle from "Hooks/useSetTitle";
import { useSetUserID } from "context/user-context";

import Logo from "components/UI/Logo";
import { UITextInput } from "components/UI/inputs";
import { UIButton } from "components/UI/buttons";

import UsersService from "services/users-service";
import { AppPaths } from "Routes/AppRoutes";

import styles from "./Login.module.css";

function Login() {
    useSetTitle("Login");
    useSetBodyClass(styles.login_bg);

    alert("cadastro teste: \n" + "email: admin@gmail.com \n" + "senha: admin");

    const setUserID = useSetUserID();

    const navegacao = useNavigate();

    const emailRef = useRef({} as HTMLInputElement);
    const senhaRef = useRef({} as HTMLInputElement);

    interface FormLoginSubmit {
        form: HTMLFormElement
        inputs: {
            email: HTMLInputElement
            senha: HTMLInputElement
        }
    }

    function onSubmitHandler(event: FormEvent) {
        event.preventDefault();
        event.stopPropagation();

        const form = event.target as HTMLFormElement;

        form.reportValidity();
        form.normalize();

        const data: FormLoginSubmit = {
            form: form,
            inputs: {
                email: emailRef.current,
                senha: senhaRef.current
            }
        };

        onSubmit(data);
    }

    async function onSubmit({ form, inputs }: FormLoginSubmit) {
        const { email, senha } = inputs;

        const log = { email: email.value, senha: senha.value };
        const userId = await UsersService.logar(log);

        if (userId) {
            setUserID(userId);
            navegacao(AppPaths.home, { replace: true });
        }

        else alert("Dados invalidos");
    }

    return (
        <main className={classNames(styles.login, "container-main", "padding-v-main")}>
            <Logo className={styles.logo} type="azul" />

            <h1 className={classNames(styles.titulo, "texto-primario", "texto-center")}>
                Já tem conta? Faça seu login:
            </h1>

            <form
                onSubmit={onSubmitHandler}
                noValidate
                className={styles.formulario}>
                <UITextInput
                    ref={emailRef}
                    id="login-email"
                    type="email"
                    labelText="Email"
                    placeholder="Insira seu email"
                />

                <UITextInput
                    ref={senhaRef}
                    id="login-senha"
                    type="password"
                    labelText="Senha"
                    placeholder="Insira sua senha"
                />

                <Link className={styles.recuperarSenha} to={""} title="Recuperar senha">
                    Esqueci minha senha
                </Link>

                <UIButton type="submit">
                    Entrar
                </UIButton>
            </form>
        </main>
    );
}
export default Login;