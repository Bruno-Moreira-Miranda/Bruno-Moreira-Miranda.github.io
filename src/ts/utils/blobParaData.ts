function blobParaData(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();

        leitor.readAsDataURL(blob);

        leitor.onload = () => {
            resolve(leitor.result as string);
        };
        leitor.onerror = error => reject(error);
    });
}
export default blobParaData;