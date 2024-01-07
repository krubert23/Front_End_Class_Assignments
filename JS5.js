//This menu will make an array of students and their grades
//I used the this command so the code will know that I'm talking
//about a specific student
class Student {
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }
   // describe(){
    //    return `${this.name} is in grade: ${this.grade}`;
   // }
}
//My describe code will tell the user the student's name and grade.
//This next class will create an array full of each students information
class Class {
    constructor(name) {
       // this.name = name;
        this.students = [];
    }
    addStudent(student) {
        if(student instanceof Student) {
this.students.push(student);
        }
        else{throw new Error (`You can only add an instance of student. Argument is not a student ${student}`);}
    }
    describe(){
        return `${this.name} has ${this.students.length} students in their class`;
    }
}

class Menu {
    constructor(){
        this.classes = [];
        this.selectedClass = null;
    }
    start {
        let selection = this.showMainMenuOptions();
        while(selection != 0) {
            switch(selection) {
                case '1: '
                this.createClass();
                break;
                case '2: '
                this.viewClass();
                break;
                case '3: '
                this.deleteClass();
                break;
                default:
                    selection = 0;
            } 
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

showMainMenuOptions() {
    return prompt (`
    0) exit
    1) create new event
    2) view week schedule
    3) delete event`);
}

showClassMenuOptions(classInfo) {
    return prompt(`
    0) back
    1) create student
    2) delete student
    -------------------
    ${classInfo}`);
}

createClass() {
let name = prompt(`Enter name for new student: `);
this.class.push(new Class(name));
}

viewClass() {
    let index = prompt(`Enter the index of the class you wish to view: `);
    if(index > -1 && index < this.classes.length) {
        this.selectedClass = this.class[index];
        let description = 'Class name: ' + this.selectedClass.name + `\n`;
        for(let i = 0; i < this.selectedClass.students.length; i++) {
            description += i + ') ' + this.selectedClass.students[i].name + ' - ' + this.selectedClass.students[i].grade + `\n`;
        }
        let selection = this.showScheduleMenuOptions(description);
        switch (selection) {
            case '1: '
            this.createStudent();
            break;
            case '2: '
            this.deleteStudent();
            break;
        }
    }
}
create Student() {
    let name = prompt(`Enter name for new student: `);
    let grade = prompt(`Enter grade for new student: `);
    this.selectedClass.students.push(new Student(name, grade));
}

delete Student() {
    let index = prompt(`Enter the index of the student you wish to delete: `);
    if(index > -1 && index < this.selectedClass.students.length) {
        this.selectedClass.students.splice(index, 1);
    }
}
deleteClass() {
    let index = prompt(`Enter the index of the class you wish to delete: `)
    if(index > -1 && index < this.classes.length) {
        this.classes.splice(index, 1);}}

    }