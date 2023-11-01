//Imports used for this component
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Card, Container, Button,  Typography, CardHeader } from "@mui/material"; 
//Functiion for this component
export default function MonsterDetails() {
    //Saves off the id number of the monster
    const id = Number(useParams().id);
    //Instanciates dispatch and history for use
    const dispatch = useDispatch();
    const history = useHistory();
    //Grabs the state for the monster details
    const monster = useSelector((store) => store.monsterdetails)
    //useEffect that fetchs the monster details with the matching id
    useEffect(() => {
        dispatch({ type: 'FETCH_MONSTER_DETAILS', payload: id })
    }, [])

    //Console logs for testing
    console.log(id)
    console.log(monster)
    //Elements used for this component, maps over the monster data and breaks apart the data for display on the DOM
    return (
        <div>
           

            {monster.map(monster => {
                return (
                    <Container key={monster.id} style={{border: "2px double black", width: "80%", backgroundColor: "rgb(128, 150, 191, .5)", padding: "10px"}}>
                    <Card style={{padding: "10px", width: "90%", margin: "auto", backgroundColor: "rgb(226, 232, 243, .7)", marginTop: "20px", marginBottom: "20px" }}>
                    <CardHeader  title = {monster.name}></CardHeader>
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