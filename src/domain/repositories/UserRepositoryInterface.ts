import type { User } from "@/src/domain/entities/User";

export interface UserRepositoryInterface {
    getUsers: () => Promise<User[]>;
    getUserById: (id: string) => Promise<User | null>;
    addUser: (User: User) => Promise<void>;
    updateUser: (User: User) => Promise<void>;
    deleteUser: (id: string) => Promise<void>;
}