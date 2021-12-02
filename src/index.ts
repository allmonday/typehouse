export const getKeys = Object.keys as <T extends object>(
    obj: T
) => Array<keyof T>

export type Nullable<T> = {
    [K in keyof T]: T[K] | null
}

export type Multiple<T> = {
    [K in keyof T]: T[K][]
}

export function notEmpty<TValue> (
    value: TValue | null | undefined
): value is TValue {
    return value !== null && value !== undefined
}
