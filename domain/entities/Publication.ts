import type { Book } from "@/domain/entities/Book";
import type { Publisher } from "@/domain/entities/Publisher";
import type { ISBN } from "@/domain/entities/ISBN";
import type { GoogleBook } from "@/domain/entities/GoogleBook";

export type Publication = {
    id: string;
    book: Book;
    publisher: Publisher;
    isbns: ISBN[];
    publishedAt: Date;
    pageCount: number;
    coverImageUrl: string | null;
    synopsis: string | null;
    googleBook: GoogleBook | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
};