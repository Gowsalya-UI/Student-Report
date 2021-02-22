export interface StudentPassedDetails {
    students: Students[]
}

export interface Students {
    studentId: Number,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    age:Number,
    emailAddress: string,
    grade:string,
    english: Number,
    maths:Number,
    science:Number,
    socialStudies:Number
}
