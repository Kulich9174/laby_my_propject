export interface TContact {
    id:number;
    name:string;
    photo:string;
    post :string;
    phoneNumber:string;
    mail:string;
}
export interface TContactList{
    contactOfUser:TContact[]
}

export interface TScheduleOfWarehousesStreet {
    idCity:number,
    idStreet:number,
    adress : string,
    workWeekdays : string,
    workHolidays : string,
}

export interface TScheduleOfWarehousesCityList {
    scheduleOfDepartmentCity : TScheduleOfWarehousesStreet[]
}


export interface TContactWarehouse {
    idCity:number,
    idStreet:number,
    idContact:number,
    phone : string,
    name : string,
}
export interface TContactWarehouseList {
    contactOfDepartment : TContactWarehouse[]
}