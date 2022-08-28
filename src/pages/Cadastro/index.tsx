import React, { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import useSetTitle from "Hooks/useSetTitle";
import useSetBodyClass from "Hooks/useSetBodyClass";

import { UITextInput } from "components/UI/inputs";
import Logo from "components/UI/Logo";
import { UIButton } from "components/UI/buttons";

import { IUserCadastroInfo } from "interfaces/i-user";

import { validarCampo, validarCampoAsync, CampoValObject, CampoValObjectAsync } from "ts/validacao-campos/validar";

import { AppPaths } from "Routes/AppRoutes";

import UsersService from "services/users-service";

import styles from "./Cadastro.module.css";

function Cadastro() {
    useSetTitle("Cadastro");
    useSetBodyClass(styles.cadastro_bg);

    const navegacao = useNavigate();

    const emailRef = useRef({} as HTMLInputElement);
    const nomeRef = useRef({} as HTMLInputElement);
    const senhaRef = useRef({} as HTMLInputElement);
    const confirmarSenhaRef = useRef({} as HTMLInputElement);

    interface FormCadastroSubmit {
        form: HTMLFormElement
        inputs: {
            email: HTMLInputElement
            nome: HTMLInputElement
            senha: HTMLInputElement
            confirmarSenha: HTMLInputElement
        }
    }

    function onSubmitHandler(event: FormEvent) {
        event.preventDefault();
        event.stopPropagation();

        const form = event.target as HTMLFormElement;

        form.reportValidity();
        form.normalize();

        const data: FormCadastroSubmit = {
            form: event.target as HTMLFormElement,
            inputs: {
                email: emailRef.current,
                nome: nomeRef.current,
                senha: senhaRef.current,
                confirmarSenha: confirmarSenhaRef.current
            },
        };

        onSubmit(data);
    }

    async function validarDados({ nome, email, senha, confirmarSenha }: FormCadastroSubmit["inputs"]) {
        const confirmarSenhaVal: CampoValObject = {
            input: confirmarSenha,
            validacao: () => {
                return senha.value === confirmarSenha.value;
            },
            errorMensage: "As senhas devem ser iguais!"
        };

        const emailVal: CampoValObjectAsync = {
            input: email,
            errorMensage: "Este email já está em uso",
            validacao: async () => !(await UsersService.emUso({ email: email.value })).status
        };

        const nomeVal: CampoValObjectAsync = {
            input: nome,
            errorMensage: "Este nome já está em uso",
            validacao: async () => !(await UsersService.emUso({ nome: nome.value })).status
        };

        await validarCampoAsync(emailVal);
        await validarCampoAsync(nomeVal);
        validarCampo(confirmarSenhaVal);
    }

    async function cadastrar(userCadastro: IUserCadastroInfo) {
        const cadastrado = await UsersService.cadastrarUsuario(userCadastro);
        if (cadastrado) {
            navegacao(AppPaths.login, { replace: true });
        }
        else {
            alert("Falha ao cadastrar a conta");
        }
    }

    async function onSubmit({ form, inputs }: FormCadastroSubmit) {
        const { email, nome, senha } = inputs;

        await validarDados(inputs);

        const valido = form.reportValidity();

        valido && cadastrar({
            nome: nome.value,
            email: email.value,
            senha: senha.value
        });
    }

    return (
        <main className={classNames(styles.cadastro, "container-main", "padding-v-main")}>
            <Logo className={styles.logo} type="azul" />

            <h1 className={classNames(styles.titulo, "texto-primario", "texto-center")}>
                <em>Ainda não tem cadastro?</em>
                <span></span> Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
            </h1>

            <form
                onSubmit={onSubmitHandler}
                autoComplete={"on"}
                noValidate
                className={styles.formulario}>

                <UITextInput
                    ref={emailRef}
                    id="cadastro_email"
                    type="email"
                    labelText="Email"
                    placeholder="Escolha seu melhor email"
                    required
                />
                <UITextInput
                    ref={nomeRef}
                    id="cadastro_nome"
                    type="text"
                    labelText="Nome"
                    placeholder="Digite seu nome completo"
                    required
                />

                <UITextInput
                    ref={senhaRef}
                    id="cadastro_senha"
                    type="password"
                    labelText="Senha"
                    placeholder="Crie uma senha"
                    required
                />
                <UITextInput
                    ref={confirmarSenhaRef}
                    id="cadastro_confirmar_senha"
                    type="password"
                    labelText="Confirmar seu senha"
                    placeholder="Repita a senha criada acima"
                    required
                />

                <UIButton className={styles.cadastroButton} type="submit">
                    Cadastrar
                </UIButton>
            </form>
        </main>
    );
}
export default Cadastro;