export class User {
    id: string;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;

    public constructor (
        id: string,
        username: string,
        password: string,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date | null,
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
};