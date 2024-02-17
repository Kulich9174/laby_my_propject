import { TScheduleOfWarehousesStreet, TContactWarehouse } from "../type/contactType";

export const sheduleOfMoscowPetr : TScheduleOfWarehousesStreet = {
    idCity: 1,
    idStreet:1,
    adress : 'ул. Петра Сокола, 14',
    workWeekdays : 'Пн-Пт - с 9:00 до 18:00',
    workHolidays : 'Сб-Вс - выходной',

}
export const contactWarehousePtr : TContactWarehouse [] = [
    {
        idCity:1,
        idStreet:1,
        idContact:1,
        phone:'+5718555987',
        name:'Олег',
    },
    {
        idCity:1,
        idStreet:1,
        idContact:2,
        phone : '+5749036726',
        name : 'Леся',
    }
]


export const sheduleOfMoscowLenin : TScheduleOfWarehousesStreet = {
    idCity: 1,
    idStreet:2,
    adress : 'ул. Ленина, 18',
    workWeekdays : 'Пн-Пт - с 9:00 до 18:00',
    workHolidays : 'Сб-Вс - выходной',
}
export const contactWarehouseLenin : TContactWarehouse[] = [
    {
        idCity:1,
        idStreet:2,
        idContact:1,
        phone : '+5749037834',
        name : 'Женя',
    }
]

export const sheduleOfMoscow : TScheduleOfWarehousesStreet[] = [
    sheduleOfMoscowPetr,
    sheduleOfMoscowLenin,
]
