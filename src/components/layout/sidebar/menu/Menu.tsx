import React, {FC} from "react";
import {Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
// @ts-ignore
import {Link, useHistory} from "react-router-dom";
import {menu} from "./dataMenu";


export const Menu:FC = () => {
    const history =useHistory();
    return (
        <Card
            variant={"outlined"}
            sx={{
                padding: 1,
                backgroundColor: '#f1f7fa',
                border: 'none',
                borderRadius: 3,
                marginTop:5,
                marginBottom:10,
            }}>
            <List>
                {menu.map(item => (
                    <ListItem key={item.link} disablePadding>
                        <ListItemButton onClick={() => history.push(item.link)}>
                            <ListItemIcon
                            sx={{
                                minWidth:36,
                            }}>
                                <item.icon/>
                            </ListItemIcon>
                            <ListItemText primary={item.title}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Card>
    )
}
