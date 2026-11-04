import type { Tag } from "@/src/domain/entities/Tag";

export interface TagRepositoryInterface {
    getTags: () => Promise<Tag[]>;
    getTagById: (id: string) => Promise<Tag | null>;
    addTag: (Tag: Tag) => Promise<void>;
    updateTag: (Tag: Tag) => Promise<void>;
    deleteTag: (id: string) => Promise<void>;
}