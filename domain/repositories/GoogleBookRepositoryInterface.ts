import type { GoogleBook } from "@/domain/entities/GoogleBook";

export interface GoogleBookRepositoryInterface {
    getGoogleBooks: () => Promise<GoogleBook[]>;
    getGoogleBookById: (id: string) => Promise<GoogleBook | null>;
    addGoogleBook: (GoogleBook: GoogleBook) => Promise<void>;
    updateGoogleBook: (GoogleBook: GoogleBook) => Promise<void>;
    deleteGoogleBook: (id: string) => Promise<void>;
}