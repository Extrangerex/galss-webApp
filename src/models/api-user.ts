

namespace Api.Models {
    export class User {
        id?: number;
        type?: number;
        model?: Model;
        seeker?: Seeker;
        profilePhoto?: Photo;
        anonymous?: boolean;
        lastLocation?: UserLatLng;
        profileStatus?: string;
        country?: Country;
        currentLocation?: City;
        deviceToken?: FcmUserDeviceToken[];
    }

    export enum UserTypes {
        model, seeker
    }
}