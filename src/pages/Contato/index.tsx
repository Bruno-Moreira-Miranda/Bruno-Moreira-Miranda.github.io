import { FormEvent, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import useSetTitle from "Hooks/useSetTitle";
import useSetBodyClass from "Hooks/useSetBodyClass";

import { UITextarea, UITextInput } from "components/UI/inputs";
import { UIButton } from "components/UI/buttons";

import mascaraTelefone from "ts/validacao-campos/mascara-telefone";
import { AppPaths } from "Routes/AppRoutes";

import styles from "./Contato.module.css";

function Contato() {
    useSetTitle("Contato");
    useSetBodyClass(styles.contato_bg);

    const navegacao = useNavigate();

    const nomeRef = useRef({} as HTMLInputElement);
    const telefoneRef = useRef({} as HTMLInputElement);
    const nomeAnimalRef = useRef({} as HTMLInputElement);
    const mensagemRef = useRef({} as HTMLInputElement);

    useLayoutEffect(() => {
        mascaraTelefone(telefoneRef.current);
    });

    interface FormContatoSubmit {
        form: HTMLFormElement
        inputs: {
            nome: HTMLInputElement
            telefone: HTMLInputElement
            nomeAnimal: HTMLInputElement
            mensagem: HTMLInputElement
        }
    }

    function onSubmitHandler(event: FormEvent) {
        event.preventDefault();
        event.stopPropagation();

        const form = event.target as HTMLFormElement;

        form.reportValidity();
        form.normalize();

        const data: FormContatoSubmit = {
            form,
            inputs: {
                nome: nomeRef.current,
                telefone: telefoneRef.current,
                nomeAnimal: nomeAnimalRef.current,
                mensagem: mensagemRef.current
            }
        };

        onSubmit(data);
    }

    function onSubmit({ form, inputs }: FormContatoSubmit) {
        const { nome, telefone, nomeAnimal, mensagem } = inputs;

        navegacao(AppPaths.home, { replace: true });
    }

    return (
        <main className={classNames(styles.contato, "container-main", "padding-v-primario")}>
            <h1 className={classNames(styles.titulo, "texto-primario", "texto-center")}>
                Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:
            </h1>

            <form
                onSubmit={onSubmitHandler}
                noValidate
                className={styles.formulario}>
                <UITextInput
                    type="text"
                    id="contato-nome"
                    labelText="Nome"
                    placeholder="Insira seu nome completo"
                    aparencia="primario"
                    minLength={2}
                    maxLength={100}
                    required
                />

                <UITextInput
                    ref={telefoneRef}
                    type="tel"
                    id="contato-numero"
                    labelText="Numero"
                    placeholder="Insira seu telefone e/ou whatsapp"
                    aparencia="primario"
                    required
                />

                <UITextInput
                    type="text"
                    id="contato-nome-animal"
                    labelText="Nome do animal"
                    placeholder="Por qual animal você se interessou?"
                    aparencia="primario"
                    minLength={2}
                    required
                />

                <UITextarea
                    id="contato-mensagem"
                    labelText="Mensagem"
                    placeholder="Escreva sua mensagem"
                    aparencia="primario"
                    maxLength={150}
                    required
                />

                <UIButton type="submit">
                    Enviar
                </UIButton>
            </form>
        </main>
    );
}
export default Contato;