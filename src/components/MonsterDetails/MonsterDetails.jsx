import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardHeader, Container, Button, Grid, OutlinedInput, Typography, Select, MenuItem, FormControl, InputLabel } from "@mui/material"; 

export default function MonsterDetails() {
    const id = Number(useParams().id);
    const dispatch = useDispatch();
    const history = useHistory();

    const monster = useSelector((store) => store.monsterdetails)

    useEffect(() => {
        dispatch({ type: 'FETCH_MONSTER_DETAILS', payload: id })
    }, [])


    console.log(id)
    console.log(monster)
    return (
        <div>
            <div>
                <Typography variant="h4">Monster Details</Typography>
            </div>

            {monster.map(monster => {
                return (
                    <Container style={{margin: "10px"}}>
                    <Card style={{padding: "10px", width: "60%", margin: "auto" }}>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Monster: {monster.name}</Typography>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Alignment: {monster.alignment}</Typography>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Armor Class: {monster.armor_class}</Typography>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Hit Points: {monster.hit_points}</Typography>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Speed: {monster.speed}</Typography>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Resistances: {monster.resistances}</Typography>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Proficiency Bonus: {monster.proficiency_bonus}</Typography>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Attacks: {monster.attacks}</Typography>
                        <Button variant="contained" onClick={() => history.push('/monsters')}>Monster List</Button>
                    </Card>
                    </Container>
                   )
             })}
        </div>
    )
}