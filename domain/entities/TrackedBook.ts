import type { User } from "@/domain/entities/User";
import type { Book } from "@/domain/entities/Book";

export type TrackedBook = {
    id: string;
    user: User;
    book: Book;
    hasBeenRead: boolean;
    comment: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
};