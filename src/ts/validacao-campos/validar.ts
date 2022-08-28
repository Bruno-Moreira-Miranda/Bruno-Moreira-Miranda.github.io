interface CampoValObject {
    input: HTMLInputElement
    validacao: () => boolean
    errorMensage: string
}

interface CampoValObjectAsync {
    input: HTMLInputElement
    validacao: () => Promise<boolean>
    errorMensage: string
}

function validarCampo({ input, validacao, errorMensage }: CampoValObject): boolean {
    const valido = validacao();

    if (valido) input.setCustomValidity("");
    else input.setCustomValidity(errorMensage);

    return valido;
}

async function validarCampoAsync({ input, validacao, errorMensage }: CampoValObjectAsync): Promise<boolean> {
    const valido = await validacao();

    if (valido) input.setCustomValidity("");
    else input.setCustomValidity(errorMensage);

    return valido;
}

export { validarCampo, validarCampoAsync};
export type { CampoValObject, CampoValObjectAsync };