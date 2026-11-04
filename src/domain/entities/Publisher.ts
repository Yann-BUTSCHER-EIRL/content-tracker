export class Publisher {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;

    public constructor (
        id: string,
        name: string,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date | null,
    ) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
};