import { Inquirer } from "inquirer";
import { TaskCollection } from "./model/TaskCollection";
import { task } from "./exampleData";

const collection = new TaskCollection('fazt', task)
collection.getTaskItems(false).forEach(item=>{
    item.printDetails()
})