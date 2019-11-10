export class PromisedVK {
    public static getLoginStatus() {
        return new Promise<boolean>((resolve, reject) => {
            VK.Auth.getLoginStatus((result) => resolve(result.status === "connected"));
        });
    }
}