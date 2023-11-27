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

export interface pusherLiftsResponse {
    message: LiftOperators
}

export interface pusherErrorsResponse {
    message: ErrorMessage
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

export interface LiftControlMessage{
    id: number,
    opcode: number,
    description: string
}

export interface ErrorMessage{
    id:number,
    message:string,
    type:number,
    severity:string,

}