import type { ApiResponse } from "./ApiResponse";

export interface LoginData {
    access_token: string;
    refresh_token: string;
}

export interface UserDetail {
    id: string;
    username: string;
    email: string;
    is_verified: boolean;
}

export type LoginResponse = ApiResponse<LoginData>;
export type RegisterResponse = ApiResponse<UserDetail>;
export type UserDetailResponse = ApiResponse<UserDetail>;
