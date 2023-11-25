export interface HealthResponse{
    message: string;
}

export interface User{
    email: string;
    full_name: string;
    id: number;
    permission: string;
    username: string;
}

export interface pusherResponse{
    message: LiftOperators
}

export interface LiftOperators{
    timestamp:string,
    operators: Operators[]
}

export interface Operators{
    id: number,
    type: string,
    name: string,
    state: string,
    throughput: number,
    queue_size: number,
    wind_speed: number,
}