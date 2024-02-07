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