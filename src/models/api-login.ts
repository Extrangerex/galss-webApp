

namespace Api.Models {
    export class Login {
        userId?: number;
        userTypeId?: number;
        loginToken?: LoginToken;
        isFirstLogin?: boolean;
    }
    
    export class LoginToken {
        emailAddress?: string;
        token?: string;
    }
}