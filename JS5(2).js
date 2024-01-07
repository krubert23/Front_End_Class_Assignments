//This menu will make an array of students and their grades
//I used the this command so the code will know that I'm talking
//about a specific student
class Student {
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }
}
//This next class will create an array full of each students information
class Menu {
    constructor(name) {
        this.students = [];
    }

//add students
//prompt for a student name
//prompt for a grade
//create student and push them into array
addStudent(){
    let studentName = prompt(`Enter student name: `);
    let studentGrade = prompt(`Enter student grade: `);
    this.students.push(new Student(studentName, studentGrade));
}


//delete students
deleteStudent(){
    let studentIndex = prompt("Enter student index to DELETE: ");
    this.students.splice(studentIndex, 1);
}



//view students
viewStudents(){
    let displayStudents = '';
    for(let i = 0; i < this.students.length; i++) {
        displayStudents += `${i}) ${this.students[i].name}, ${this.students[i].grade}`
    }
    alert(`
    Student List:


    ${displayStudents} \n
    `);
}

//see a menu
showMainMenu(){
    return prompt(`
    Menu
    0) exit
    1) create student
    2) delete student
    3) view all students 
    `)
}

//start the menu
start(){
    let selection = this.showMainMenu();

    while(selection != 0) {
        switch(selection){
            case "1": 
            this.addStudent();
            break;
            case "2":
            this.deleteStudent();
            break;
            case "3":
            this.viewStudents();
            break;
            default:
            selection = 0;
        }
        selection = this.showMainMenu();
    }
    alert(`Goodbye!`);
}

}

let menu = new Menu();

menu.start();

