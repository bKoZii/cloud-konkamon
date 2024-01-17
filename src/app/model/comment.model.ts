export class Comment {
    key?: string | null;
    datePosted?: number = Date.now();
    content?: string;
    username?: string;
    published?: boolean;
}
