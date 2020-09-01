export class EmployeeData{
    empNo : string;
    empName : string;
    empAddress : string;

    constructor(empNo?: string, empName?: string , empAddress?: string){
        this.empNo = empNo;
        this.empName = empName;
        this.empAddress = empAddress;
    }
}