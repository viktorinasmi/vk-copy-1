import {IUser} from "../../../addPost/types";

export const users:IUser[] = [
    {
        _id: 'one',
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
        name: 'Дмитрий Лыжкин',
        isInNetwork: true,
    },
    {
        _id: 'two',
        avatar: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
        name: 'Геннадий Плешков',
        isInNetwork: false,
    },
    {
        _id: 'three',
        avatar: "https://media.nngroup.com/media/people/photos/2022-portrait-page-3.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg",
        name: 'Анатолий Иванов',
        isInNetwork: false,
    },
    {
        _id: 'four',
        avatar: "https://media.nngroup.com/media/people/photos/20211213_Vegas-tanner.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg",
        name: 'Иван Сапожников',
        isInNetwork: true,
    },
]
