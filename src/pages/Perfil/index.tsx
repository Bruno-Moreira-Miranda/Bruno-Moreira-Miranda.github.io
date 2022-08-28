import classNames from "classnames";
import { UITextarea, UITextInput } from "components/UI/inputs";
import { FormEvent, useLayoutEffect, useRef, useState } from "react";

import useSetTitle from "Hooks/useSetTitle";
import useSetBodyClass from "Hooks/useSetBodyClass";
import { useGetUserID } from "context/user-context";

import { IUserID, IUserPerfil } from "interfaces/i-user";

import mascaraTelefone from "ts/validacao-campos/mascara-telefone";
import UsersService from "services/users-service";

import PerfilImgInput, { OnImgSubmitEvent } from "./PerfilImgInput";

import Users from "services/users-service";

import styles from "./Perfil.module.css";
import { UIButton } from "components/UI/buttons";

import imgPlaceholder from "assets/imagens/perfil.png";
import blobParaData from "ts/utils/blobParaData";

function Perfil() {
    useSetTitle("Perfil");
    useSetBodyClass(styles.perfil_bg);

    const userID = useGetUserID();

    const imagemRef = useRef({} as HTMLInputElement);
    const nomeRef = useRef({} as HTMLInputElement);
    const telefoneRef = useRef({} as HTMLInputElement);
    const cidadeRef = useRef({} as HTMLInputElement);
    const sobreRef = useRef({} as HTMLInputElement);

    const [imgPreview, setImgPreview] = useState(imgPlaceholder);

    useLayoutEffect(() => {
        if (userID) {
            Users.obterUsuario(userID)
                .then(user => {
                    user?.img && setImgPreview(user.img);
                    nomeRef.current.value = user?.nome || "";
                    telefoneRef.current.value = user?.telefone || "";
                    cidadeRef.current.value = user?.cidade || "";
                    sobreRef.current.value = user?.sobre || "";
                });
        }
    }, []);

    useLayoutEffect(() => {
        mascaraTelefone(telefoneRef.current);
    }, []);


    interface FormPerfilSubmit {
        form: HTMLFormElement
        inputs: {
            imagem: HTMLInputElement
            nome: HTMLInputElement
            telefone: HTMLInputElement
            cidade: HTMLInputElement
            sobre: HTMLInputElement
        }
    }

    async function onImgSubmitHandler(event: OnImgSubmitEvent) {
        const imgURLBase64 = await blobParaData(event.file);
        setImgPreview(imgURLBase64);
    }

    function onSubmitHandler(event: FormEvent) {
        event.preventDefault();
        event.stopPropagation();

        const form = event.target as HTMLFormElement;

        form.reportValidity();
        form.normalize();

        const data: FormPerfilSubmit = {
            form,
            inputs: {
                imagem: imagemRef.current,
                nome: nomeRef.current,
                telefone: telefoneRef.current,
                cidade: cidadeRef.current,
                sobre: sobreRef.current
            }
        };

        onSubmit(data);
    }

    async function onSubmit({ form, inputs }: FormPerfilSubmit) {
        const { imagem, nome, telefone, cidade, sobre } = inputs;

        const newInfo: IUserPerfil = {
            img: imgPreview,
            nome: nome.value,
            cidade: cidade.value,
            telefone: telefone.value,
            sobre: sobre.value
        };

        const sucedeu = await UsersService.atualizarPerfil(userID as IUserID, newInfo);

        if (sucedeu) alert("Perfil atualizado");
        else alert("Falha ao atualizar perfil");
    }

    return (
        <main className={classNames(styles.perfil, "container-main", "padding-v-primario")}>
            <h1 className={classNames(styles.titulo, "texto-primario", "texto-center")}>
                Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
            </h1>

            <form
                onSubmit={onSubmitHandler}
                noValidate
                className={styles.formulario}>
                <h2 className={styles.formulario__titulo}>
                    Perfil
                </h2>

                <PerfilImgInput
                    onImgSubmit={onImgSubmitHandler}
                    imgPreview={imgPreview}
                    ref={imagemRef}
                    id="perfil-img" />

                <UITextInput
                    ref={nomeRef}
                    type="text"
                    id="perfil-nome"
                    labelText="Nome"
                    placeholder="Joana Magalhães"
                    aparencia="primario"
                    minLength={2}
                    maxLength={100}
                    required
                />

                <UITextInput
                    ref={telefoneRef}
                    type="tel"
                    id="perfil-numero"
                    labelText="Telefone"
                    placeholder="55 11 XXXXXXXXX"
                    aparencia="primario"
                    required
                />

                <UITextInput
                    ref={cidadeRef}
                    type="text"
                    id="perfil-cidade"
                    labelText="Cidade"
                    placeholder="São Paulo"
                    aparencia="primario"
                    required
                />

                <UITextarea
                    ref={sobreRef}
                    id="perfil-sobre"
                    labelText="Sobre"
                    placeholder="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."
                    aparencia="primario"
                    maxLength={150}
                    required
                />

                <UIButton type="submit">
                    Salvar
                </UIButton>

            </form>
        </main>
    );
}
export default Perfil;