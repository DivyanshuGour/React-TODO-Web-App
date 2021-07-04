import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function Todos({ todo, time }) {
    return (
        <center>
            <ListItem style={{ width: 1000, paddingtop: 15, alignItems: "center" }}>
                <ListItemText primary={todo} />
                <h4>{time}</h4>
            </ListItem>
        </center>
    );
}


