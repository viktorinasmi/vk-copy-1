import {Avatar, Box, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
// @ts-ignore
import {Link, useHistory} from "react-router-dom";
import {QuestionAnswer} from "@mui/icons-material";
import {users} from "./dataUsers";


export  const UserItems = () => {
    const history =useHistory();

    return (
        <Card
            variant={"outlined"}
            sx={{
                padding: 1,
                backgroundColor: '#f1f7fa',
                border: 'none',
                borderRadius: 3,
            }}>
            {users.map(user => (
            <Link
                key={user._id}
                to={`/profile/${user._id}`}
                style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: '#111',
                marginBottom: 12,
                    marginLeft:12,
            }}>
                <Box sx={{
                    position: 'relative',
                    marginRight: 2,
                    overflow: 'hidden',
                    width: 50,
                    height: 50,
                }}>
                    <Avatar
                        src={user.avatar}
                        alt="avatar"
                        sx={{
                            width: '48',
                            height: '48',
                            borderRadius: '50%',
                        }}
                    />
                    {user.isInNetwork &&
                    <Box sx={{
                        backgroundColor: '#4FB14F',
                        border: '2px solid #f1f7fa',
                        width: 10,
                        height:10,
                        position: 'absolute',
                        bottom: 8,
                        right:10,
                        borderRadius: 50,
                    }}/>
                    }
                </Box>
                <span style={{fontSize: 14}}>{user.name}</span>
            </Link>
            ))}
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => history.push('/messages')}>
                        <ListItemIcon>
                            <QuestionAnswer/>
                        </ListItemIcon>
                        <ListItemText primary='Сообщения'/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Card>
    )
}
