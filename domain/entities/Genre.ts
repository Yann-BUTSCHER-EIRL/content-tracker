export class Genre {
    id: string;
    label: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;

    public constructor(
        id: string,
        label: string,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date | null,
    ) {
        this.id = id;
        this.label = label;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
};