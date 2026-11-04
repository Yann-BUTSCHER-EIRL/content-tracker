import type { TrackedBook } from "@/src/domain/entities/TrackedBook";

export interface TrackedBookRepositoryInterface {
    getTrackedBooks: () => Promise<TrackedBook[]>;
    getTrackedBookById: (id: string) => Promise<TrackedBook | null>;
    addTrackedBook: (TrackedBook: TrackedBook) => Promise<void>;
    updateTrackedBook: (TrackedBook: TrackedBook) => Promise<void>;
    deleteTrackedBook: (id: string) => Promise<void>;
}