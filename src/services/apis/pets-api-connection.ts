class PetsApiConnection {
    public static readonly baseURL = "http://localhost:8080/pets";

    public static get(rawQuerys?: any) {

        const requestConfig: RequestInit = {
            method: "GET",
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Accept-Charset": "UTF-8"
            },
            cache: "no-cache"
        };

        const URI = rawQuerys
            ? this._obterURI(rawQuerys)
            : this.baseURL;

        const response = fetch(URI, requestConfig);

        return response;
    }

    private static _obterURI(rawQuerys: any) {
        switch (typeof rawQuerys) {
        case "object": {
            const query = this._converterParaQuery(rawQuerys);
            return `${this.baseURL}/${query}`;
        }
        default: {
            return `${this.baseURL}/${rawQuerys}`;
        }
        }
    }

    private static _converterParaQuery(rawQuerys: any): string {
        const keyValuePairs = Object.entries(rawQuerys);

        const querys = keyValuePairs.map(keyValuePair => "?".concat(keyValuePair.join("=")));

        const mergedQuerys = querys.join("&");

        return mergedQuerys;
    }
}
export default PetsApiConnection;