

namespace Api.Models {
    export class ChatMessage {
        id?: number;
        chatId?: number;
        chatSubject?: string;
        userId?: number;
        userName?: string;
        message?: string;
        read?: boolean;
        readDate?: string;
        creationDate?: string;
    }

    export class ChatMember {
        id?: number;
        chatId?: number;
        user?: User;
        isCreator?: boolean;
    }

    export class Chat {
        id?: number;
        subject?: string;
        status?: number;
        chatMembers?: ChatMember[];
        creationDate?: string;
        lastMessage?: string;
        updatedDate?: string;
    }
    
}