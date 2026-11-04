import type { Book } from "@/src/domain/entities/Book";

export interface BookRepositoryInterface {
    getBooks: () => Promise<Book[]>;
    getBookById: (id: string) => Promise<Book | null>;
    addBook: (Book: Book) => Promise<void>;
    updateBook: (Book: Book) => Promise<void>;
    deleteBook: (id: string) => Promise<void>;
}