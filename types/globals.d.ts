import { User } from "./types";

// Global Scope - We extend the type of CustomJwtSessionClaims based on our User type
declare global {
    interface CustomJwtSessionClaims extends User {}
}