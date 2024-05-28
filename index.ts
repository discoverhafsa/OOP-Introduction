import inquirer from "inquirer";

class student {
    name:string
    constructor(n:string){
    this.name=n
}
}

class person {
    students: student[]= []
    static student: any;
    addstudent(obj:student){
    this.students.push(obj)
    }
}

const persons = new person()
const programStart = async (persons:person)=>{
    do{
    console.log("Welcome");
    const ans = await inquirer.prompt(
        [
            {
                name:"select",
                type:"list",
                message:"would you like to interact with?",
                choices: ["staff", "student", "exit"]
            }
        ]
    )
    if(ans.select == "staff"){
        console.log("you are allowed to the staff room, please fell free to ask any question")
    } 
    else if(ans.select == "student"){
        const ans = await inquirer.prompt({
            name:"student",
            type: "input",
            message: "entre the students name you want to meeet"
        })
        const students = persons.students.find (val=> val.name == ans.student)
        if(!students){
            const name = new student(ans.student)
            persons.addstudent(name)
            console.log(`Hello i am ${name.name}. Nice to meet you!`);
            console.log("New student added");
            console.log("current student list");
            console.log(persons.students);
        } else {
            console.log(`Hello i am ${students.name}. Nice to meet you!`);
            console.log("existing student list");
            console.log(persons.students);
        }
    } else if (ans.select == "exit"){
        console.log("Exiting the program");
    }
}while(true)
}
programStart(persons);