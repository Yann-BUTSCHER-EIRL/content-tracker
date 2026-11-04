import { Book } from "@/src/domain/entities/Book";
import { Publisher } from "@/src/domain/entities/Publisher";
import { ISBN } from "@/src/domain/entities/ISBN";
import { GoogleBook } from "@/src/domain/entities/GoogleBook";

export class Publication {
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

    public constructor (
        id: string,
        book: Book,
        publisher: Publisher,
        isbns: ISBN[],
        publishedAt: Date,
        pageCount: number,
        coverImageUrl: string | null,
        synopsis: string | null,
        googleBook: GoogleBook | null,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date | null,
    ) {
        this.id = id;
        this.book = book;
        this.publisher = publisher;
        this.isbns = isbns;
        this.publishedAt = publishedAt;
        this.pageCount = pageCount;
        this.coverImageUrl = coverImageUrl;
        this.synopsis = synopsis;
        this.googleBook = googleBook;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
};