interface IDirectionDTO {
    buttonText: string,
    directions: IDirection[]
}

interface IDirection {
    title: string,
    subjects: string,
    text: string,
    image: string
}