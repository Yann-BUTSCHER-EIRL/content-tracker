import type { Author } from "@/src/domain/entities/Author";

export interface AuthorRepositoryInterface {
    getAuthors: () => Promise<Author[]>;
    getAuthorById: (id: string) => Promise<Author | null>;
    addAuthor: (author: Author) => Promise<void>;
    updateAuthor: (author: Author) => Promise<void>;
    deleteAuthor: (id: string) => Promise<void>;
}