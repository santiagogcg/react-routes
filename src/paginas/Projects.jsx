import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from '../data/projects'




function Projects() {



    return (
        <>

            <h1>PROYECTOS</h1>
            {projects.map((project, index) => {
                return (
                    <ul key={index}>
                        <li>{project.id}</li>
                        <p>{project.name}</p>
                        <p>{project.image}</p>
                        <p>{project.description}</p>
                        <p>{project.url}</p>


                    </ul>
                )
            })}



            <Link to={'/home'}>HOME</Link>



        </>



    )


}

export default Projects