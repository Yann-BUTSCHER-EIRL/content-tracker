export type User = {
    id: string;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
};