interface Props {
    condicao: unknown
    children: JSX.Element
}

function If({ condicao,  children}: Props) {
    return condicao ? children: null;
}
export default If;