import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { experiences, studies } from "../data/resume";




function Resume() {

    return (<>

        <h1>EXPERIENCIA</h1>
        {experiences.map((experience, index) => {
            return (
                <ul key={index}>
                    <li>{experience.id}</li>
                    <p>{experience.title}</p>
                    <p>{experience.institution}</p>
                    <p>{experience.date}</p>



                </ul>
            )
        }
        )

        }



        <h1>ESTUDIOS</h1>


        {studies.map((experience, index) => {
            return (
                <ul key={index}>
                    <li>{experience.id}</li>
                    <p>{experience.title}</p>
                    <p>{experience.company}</p>
                    <p>{experience.date}</p>



                </ul>


            )
        })}




        <Link to={'/home'}>HOME</Link>
    </>)


}







export default Resume