// @ts-ignore
import {Link} from "react-router-dom";
import {UserItems} from "./UserItems";
import {Menu} from "./menu";


export const Sidebar =() =>{
    return (
        <div>
            <UserItems/>
            <Menu/>
        </div>
    )
}
