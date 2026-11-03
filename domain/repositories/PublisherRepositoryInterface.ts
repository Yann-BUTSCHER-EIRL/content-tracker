import type { Publisher } from "@/domain/entities/Publisher";

export interface PublisherRepositoryInterface {
    getPublishers: () => Promise<Publisher[]>;
    getPublisherById: (id: string) => Promise<Publisher | null>;
    addPublisher: (Publisher: Publisher) => Promise<void>;
    updatePublisher: (Publisher: Publisher) => Promise<void>;
    deletePublisher: (id: string) => Promise<void>;
}