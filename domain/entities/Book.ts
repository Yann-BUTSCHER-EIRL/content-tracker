import type { Author } from "@/domain/entities/Author";
import type { Tag } from "@/domain/entities/Tag";
import type { Genre } from "@/domain/entities/Genre";

export type Book = {
    id: string;
    title: string;
    authors: Author[];
    genres: Genre[];
    tags: Tag[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
};