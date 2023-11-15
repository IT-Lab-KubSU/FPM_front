export interface IDepartmentsDTO{
    [key: string]: IDepartmentsDT[];
}
export interface IDepartmentsDT{
    title: string,
    text: string,
    image: string[],
    advantages: string[],
    task: IDepartments[]
}
export interface IDepartments{
    name: string,
    description: string
}