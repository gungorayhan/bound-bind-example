class Student {
    constructor(){

    }

    newStudent(){
        return "new student"
    }
}

class School {
   className="bindtry"
    constructor(){
        this.student= new Student() 
        
    }

    classAddStudent(){
        const student = this.student.newStudent()
        return student

    }

}

const school1 = new School()

//console.log(school1.classAddStudent()) // new student

function bindtry (){
    console.log(this.className)
}

//bindtry() // error className

const boundBindtry = bindtry.bind(school1)

boundBindtry() // bindtry