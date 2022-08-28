
function mascaraTelefone(input: HTMLInputElement) {
    const formato = /\D/g;

    let keyPress = "";

    input.onkeydown = event => keyPress = event.key;

    input.oninput = () => {

        const telefone = input.value.replaceAll(formato, "");
        input.setCustomValidity(telefone.length < 11?"Formato Inválido":"");

        if (keyPress !== "Backspace" && keyPress !== "Delete") {
            input.value = telefone;

            const numberParts: string[] = [];

            if (input.value.length >= 2) {
                const DD = input.value.substring(0, 2);
                numberParts.push(DD);
            }

            if (input.value.length >= 3) {
                const numero = input.value.substring(2, 11);
                numberParts.push(numero);
            }

            if (numberParts.length) {
                let telefone = "";
                const DD = numberParts.shift();
                let numero = numberParts.shift();

                if (numero && numero.length > 5) {
                    const numero1 = numero.substring(0, 5);
                    const numero2 = numero.substring(5, 9);
                    numero = `${numero1}-${numero2}`;
                }

                telefone += `(${DD}) `;
                telefone += numero || "";

                input.value = telefone;
            }
        }
    };
}
export default mascaraTelefone;