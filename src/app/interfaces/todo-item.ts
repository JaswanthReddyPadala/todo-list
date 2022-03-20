export enum todoStatus {
    Pending="Pending",
    Completed="Completed"
}

export interface TodoItem {
    id:number,
    description: string,
    status: todoStatus
}
