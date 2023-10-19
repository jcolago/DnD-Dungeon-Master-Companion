import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

export default function PlayerDetails() {
    const id = useParams().id;
    const dispatch = useDispatch();
    const history = useHistory();

    const player = useSelector((store) => store.)

}