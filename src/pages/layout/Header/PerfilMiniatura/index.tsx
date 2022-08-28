import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import AppRoutes, { AppPaths } from "Routes/AppRoutes";
import PerfilIcon from "components/UI/Icons/Perfil";

import { useGetUserID } from "context/user-context";
import UsersService from "services/users-service";
import If from "components/utils/If";

import styles from "./PerfilMiniatura.module.css";

interface Props {
    className: string
}

function PerfilMiniatura({ className }: Props) {
    const [perfilImg, setPerfilImg] = useState("");
    const userId = useGetUserID();

    useEffect(() => {
        userId && UsersService.obterUsuario(userId)
            .then(user => {
                setPerfilImg(user?.img || "");
            });
    }, [userId]);

    return (
        <Link className={classNames(styles.perfil_miniatura, className)}
            to={AppPaths.perfil}
            title="Ver perfil"
        >
            {
                perfilImg
                    ? <img src={perfilImg} alt="" />
                    : <PerfilIcon />
            }
        </Link>
    );
}
export default PerfilMiniatura;