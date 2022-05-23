import Petcard from "./PetCard";
import * as petService from '../../services/petService.js';
import { useEffect, useState } from "react";

const Dashboard = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(res => {
                setPets(res);
            })
    });


    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <ul>
                {pets.map(x => <Petcard key={x._id} pet={x} />)}

            </ul>
            <p className="no-pets">No pets in database!</p>
        </section >
    )
}

export default Dashboard;