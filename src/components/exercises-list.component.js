import React, {Component} from "react";
import axios from "axios";
import ExerciseComponent from "./Exercise.component";

export default class ExercisesListComponent extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {
            exercises: []
        };
    }

    deleteExercise(id) {
        axios.delete("http://10.0.0.169:5000/exercises/"+id)
            .then(res => console.log(res));

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    exerciseList() {
        return this.state.exercises.map(exercise => {
            return <ExerciseComponent exercise={exercise} deleteExercise={this.deleteExercise} key={exercise._id}/>;
        })
    }

    componentDidMount() {
        axios.get("http://10.0.0.169:5000/exercises/")
            .then(res => {
                this.setState({
                    exercises: res.data
                })
            })
            .catch(error => console.log(error));
    }

    render() {
        return(
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}