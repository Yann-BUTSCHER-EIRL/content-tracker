import { User } from "@/src/domain/entities/User";
import { Book } from "@/src/domain/entities/Book";

export class TrackedBook {
    id: string;
    user: User;
    book: Book;
    hasBeenRead: boolean;
    comment: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;

    public constructor (
        id: string,
        user: User,
        book: Book,
        hasBeenRead: boolean,
        comment: string | null,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date | null,
    ) {
        this.id = id;
        this.user = user;
        this.book = book;
        this.hasBeenRead = hasBeenRead;
        this.comment = comment;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
};