import type { Genre } from "@/src/domain/entities/Genre";

export interface GenreRepositoryInterface {
    getGenres: () => Promise<Genre[]>;
    getGenreById: (id: string) => Promise<Genre | null>;
    addGenre: (Genre: Genre) => Promise<void>;
    updateGenre: (Genre: Genre) => Promise<void>;
    deleteGenre: (id: string) => Promise<void>;
}