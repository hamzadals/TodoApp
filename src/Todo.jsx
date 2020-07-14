import React from 'react';
import { List,ListItem,ListItemText, ListItemAvatar } from '@material-ui/core';
 const Todo =(props) =>{
   return(
<List>
<ListItem>
<ListItemAvatar></ListItemAvatar>
<ListItemText primary={props.todo} secondary="important!" />
</ListItem>

</List>
   );
 }

 export default Todo