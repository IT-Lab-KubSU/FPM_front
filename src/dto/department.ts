export interface IDepartmentDTO{
    slug: string,
    title: string,
    text: string,
    image: string[],
    advantages: string[],
    task: ITask[]
}
export interface ITask{
    name: string,
    description: string
}