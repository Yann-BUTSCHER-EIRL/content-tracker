export class Author {
    id: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;

    public constructor(
        id: string, 
        firstName: string,
        lastName: string,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date | null,
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    public get fullName() {
        return `${this.firstName} ${this.lastName}`; 
    }
};