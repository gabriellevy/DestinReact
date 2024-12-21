import {Perso} from "../types/Perso.ts";
import {Box, Button, List, ListItem, ListItemText, Paper, Typography} from "@mui/material";
import {age, jourStr} from "../types/Date.ts";

interface InfosMondeProps {
    perso: Perso;
}

export default function InfosMonde({ perso }: Readonly<InfosMondeProps>) {
    return (
        <List dense>
            <ListItem>
                <ListItemText primary="Lieu" secondary={perso.lieu} />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="Date"
                    secondary={`${jourStr(perso.date)}`}
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="débug date"
                    secondary={`${perso.date}`}
                />
            </ListItem>
        </List>
    );
}