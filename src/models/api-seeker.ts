namespace Api.Models {
    export class Seeker {
        id?: number;
        fullName?: string;
        bornDate?: string;
        city?: number;
        seekerFavorites?: SeekerFavorites[];
    }

    export class SeekerFavorites {
        id?: number;
        model?: Model;
        createdDate?: string;
    }
}