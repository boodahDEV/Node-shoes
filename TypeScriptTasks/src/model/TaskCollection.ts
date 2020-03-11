import { TaskItem } from "./TaskItem";

type TaskCounts = {
    total: number,
    incomplete:number
}

export class TaskCollection {
    taskMap = new Map<number, TaskItem>()
    nextID: number = 1;

    constructor(
       public userName: String,
       public taskItems: TaskItem [] = []
    ) {
        taskItems.forEach(item=>{
            this.taskMap.set(item.id, item)
        })
    } //end constructor

    addTask(task: string):number{
        while (this.getTaskById(this.nextID)) {
            this.nextID++;
        }

        this.taskMap.set(this.nextID, new TaskItem(this.nextID, task))
        return this.nextID
    }

    getTaskItems(includeComplete: boolean): TaskItem [] {
        return [...this.taskMap.values()].filter(task=>includeComplete || !task.complete);
    }

    getTaskById(id: number): TaskItem | undefined {
        return this.taskMap.get(id);
    }

    markComplete(id: number, complete: boolean): void {
        const taskItem = this.getTaskById(id)

        if(taskItem)
            taskItem.complete = complete
        
    }

    removeComplete(): void {
        this.taskMap.forEach(item =>{
            if(item.complete)
                this.taskMap.delete(item.id)
        })
    }

    getTaskCounts():TaskCounts {
        return {
            total: this.taskMap.size,
            incomplete: this.getTaskItems(false).length
        }
    }
}