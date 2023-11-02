#! /user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    constructor(caller) {
        this.name = caller;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (person) => {
    do {
        console.log(chalk.bold.italic.bgYellow("Welcome My Dear"));
        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: chalk.bgGreen.bold("Who do you want to talk to..?"),
            choices: ["self", "student"]
        });
        if (ans.select == "self") {
            console.log(chalk.bgBlue.italic.bold("Hello I am talking to myself"));
            console.log(chalk.bgBlue.italic.bold("and I am feeling good."));
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: chalk.bgWhiteBright.bold.italic.red("Which student do u want to talk to..?"),
                name: "student"
            });
            const student = persons.students.find(val => val.name = ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.bgBlue.italic(`Hello I am ${chalk.green.bold(name.name)}, and I am fine!`));
                console.log(persons.students);
            }
            if (student) {
                console.log(chalk.bgBlue.italic(`Hello I am ${chalk.green.bold(student.name)}, and i m fine!.......`));
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
