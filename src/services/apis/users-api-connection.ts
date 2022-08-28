import { IUser, IUserID } from "interfaces/i-user";

type PostUser = Omit<IUser, "id">

class UsersApiConnection {
    public static readonly baseURL = "http://localhost:8080/user";

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

    public static post(cadastroInfo: PostUser) {
        const bodyContent = JSON.stringify(cadastroInfo);

        const requestConfig: RequestInit = {
            method: "POST",
            mode: "cors",
            body: bodyContent,
            headers: {
                "Content-Type": "application/json"
            }
        };

        const response = fetch(`${this.baseURL}/`, requestConfig);

        return response;
    }

    public static patch(userID: IUserID["id"], alts: Partial<IUser>) {
        const bodyContent = JSON.stringify(alts);

        const requestConfig: RequestInit = {
            method: "PATCH",
            mode: "cors",
            body: bodyContent,
            headers: {
                "Content-Type": "application/json"
            }
        };

        const URI = this._obterURI(userID);

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

export default UsersApiConnection;
export type { PostUser };