type status = 'To do' | 'In progress' | 'Done';

export interface ITask {
    id: string;
    title: string;
    description: string;
    status: status;
}
