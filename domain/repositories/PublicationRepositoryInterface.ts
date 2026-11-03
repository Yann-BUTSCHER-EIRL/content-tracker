import type { Publication } from "@/domain/entities/Publication";

export interface PublicationRepositoryInterface {
    getPublications: () => Promise<Publication[]>;
    getPublicationById: (id: string) => Promise<Publication | null>;
    addPublication: (Publication: Publication) => Promise<void>;
    updatePublication: (Publication: Publication) => Promise<void>;
    deletePublication: (id: string) => Promise<void>;
}