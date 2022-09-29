import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Avatar from '@mui/material/Avatar'

export default function ChatList({ previousMessages }) {
  if (previousMessages) {
    return (
      <List sx={{ mb: 2 }} id='scrollList'>
        {previousMessages.map(({ id, userName, message, avatar }) => (
          <React.Fragment key={id}>
            {id === 1 && <ListSubheader sx={{ bgcolor: 'background.paper' }}>Today</ListSubheader>}
            {id === 3 && <ListSubheader sx={{ bgcolor: 'background.paper' }}>Yesterday</ListSubheader>}
            <ListItem button>
              <ListItemAvatar>
                <Avatar alt='Profile Picture' src={avatar} />
              </ListItemAvatar>
              <ListItemText primary={userName} secondary={message} />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    )
  }
}
