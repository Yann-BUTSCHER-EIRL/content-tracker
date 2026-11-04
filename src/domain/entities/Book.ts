import { Author } from "@/src/domain/entities/Author";
import { Tag } from "@/src/domain/entities/Tag";
import { Genre } from "@/src/domain/entities/Genre";

export class Book {
    id: string;
    title: string;
    authors: Author[];
    genres: Genre[];
    tags: Tag[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;

    public constructor(
        id: string,
        title: string,
        authors: Author[],
        genres: Genre[],
        tags: Tag[],
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date | null,
    ) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.genres = genres;
        this.tags = tags;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    };
};