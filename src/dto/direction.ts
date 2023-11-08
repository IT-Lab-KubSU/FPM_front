export interface IDirectionDTO {
    buttonText: string,
    directions: IDirection[]
}

export interface IDirection {
    title: string,
    subjects: string[],
    text: string,
    forms: string[],
    code: string,
    image: string
}