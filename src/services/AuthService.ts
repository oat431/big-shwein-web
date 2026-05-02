import api from "../utils/APIClient";
import type { LoginRequest, RegisterRequest, RevokeRequest } from "../types/AuthDto";
import type { LoginResponse, RegisterResponse, UserDetailResponse } from "../types/AuthType";
import type { ApiResponse } from "../types/ApiResponse";

export async function login(loginRequest: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>("/auth/login", loginRequest);
    return response.data;
}

export async function register(registerRequest: RegisterRequest): Promise<RegisterResponse> {
    const response = await api.post<RegisterResponse>("/auth/register", registerRequest);
    return response.data;
}

export async function getUserDetail(): Promise<UserDetailResponse> {
    const response = await api.get<UserDetailResponse>("/auth/detail");
    return response.data;
}

export async function revokeAccess(
    revokeRequest: RevokeRequest
): Promise<ApiResponse<string>> {
    const response = await api.post<ApiResponse<string>>("/auth/revoke", revokeRequest);
    return response.data;
}

export async function verifyEmail(token: string): Promise<ApiResponse<string>> {
    const response = await api.get<ApiResponse<string>>("/auth/verify-email", {
        params: { token },
    });
    return response.data;
}
