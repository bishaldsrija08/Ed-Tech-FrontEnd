import { Status } from "@/lib/type/type";

export enum TeacherExpertise {
    Beginner = "beginner",
    Intermediate = "intermediate",
    Pro = "pro"
}

export interface IInstituteTeacherInitialDataTeacherCourse {
    courseName: string,
    coursePrice: string,
    courseThumbnail: string
}

export interface IInstituteTeacherInitialDataTeacher {
    teacherName: string,
    teacherEmail: string,
    teacherPhoneNumber: string,
    teacherExpertise: TeacherExpertise | null,
    teacherSalary: string,
    teacherJoinDate: string,
    teacherPhoto: string
}

export interface IInitalTeacherDataWithCourse extends IInstituteTeacherInitialDataTeacher {
    course?: IInstituteTeacherInitialDataTeacherCourse
}

export interface IInstituteTeacherInitialData {
    teacher: IInitalTeacherDataWithCourse,
    status: Status
}