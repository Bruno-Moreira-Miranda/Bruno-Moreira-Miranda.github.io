abstract class ApiService {
    protected static _encontrou(response: unknown) {
        if(!response) return false;
        switch (typeof response) {
        case "string":
            return Boolean(response.length);
        case "object":
            return Array.isArray(response)
                ? Boolean(response.length)
                : Boolean(Object.values(response as any).length);
        default: throw new Error(`Formato não esperado ${typeof response}`);
        }
    }

    protected static async _converter<T>(response: Response): Promise<T> {
        return response.json();
    }

    protected static _requisicaoFalhou(response: Response) {
        if (!response.ok) {
            console.warn(`A Requisição de ${this.name} falhou
        HTTP status: ${response.status}`);
            return true;
        }
        else return false;
    }
}
export default ApiService;