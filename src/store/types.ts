
export interface QueryArgs {
    page?: number;
}

export interface FieldArgs {
    id: string;
}


export interface QueryFnResponse<Response, Meta = NonNullable<unknown>> {
    data?: Response | undefined
    error: unknown
    meta?: Meta
}
