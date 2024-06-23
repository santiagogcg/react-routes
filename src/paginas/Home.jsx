
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";




function Home() {





    return (
        <>
            <h1>Bienvenido a mi PortFolio</h1>
            <h2>Soy Santi y estoy encantado de compartir contigo todos mis proyectos y curriculum</h2>

            <Link to={'/projects'}>Enlace a proyectos</Link><br></br>

            <Link to={'/resume'}>Enlace a curriculum</Link>


        </>




    )

}







export default Home 