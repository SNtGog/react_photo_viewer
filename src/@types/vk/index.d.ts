interface VKUser {
    domain: string;
    first_name: string;
    href: string;
    id: string;
    last_name: string;
    nickname: string;
}

interface VKAuthResponse {
    status: 'connected' | 'not_authorized' | 'unknown';
    session: {
        expire: number;
        id: number;
        secret: string;
        sid: string;
        sig: string;
        user: object;

    };
}

interface Auth {

    login(callback: (response: VKAuthResponse) => void, settings?: number): void;

    getLoginStatus(callback: (response: VKAuthResponse) => void): void;

}

interface WidgetAuthData {
    first_name: string;
    hash: string;
    last_name: string;
    photo: string;
    photo_rec: string;
    session: {
        mid: number;
        sid: string;
        secret: string;
        expire: number;
        sig: string;
    }
    uid: 59718068
}

interface Widgets {
    Auth(vk_auth: string, options: {
        onAuth?: (data: WidgetAuthData) => void;
        authUrl?: string;
    }): void;
}

interface VkStatic {

    Auth: Auth;
    Widgets: Widgets;

    init(options?: {
        apiId: number
    }): void;

}

declare var VK: VkStatic;