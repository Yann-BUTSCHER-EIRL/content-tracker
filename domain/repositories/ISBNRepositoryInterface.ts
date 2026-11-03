import type { ISBN } from "@/domain/entities/ISBN";

export interface ISBNRepositoryInterface {
    getISBNs: () => Promise<ISBN[]>;
    getISBNById: (id: string) => Promise<ISBN | null>;
    addISBN: (ISBN: ISBN) => Promise<void>;
    updateISBN: (ISBN: ISBN) => Promise<void>;
    deleteISBN: (id: string) => Promise<void>;
}