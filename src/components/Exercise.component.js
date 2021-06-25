import React from "react";
import {Link} from "react-router-dom";

export default class ExerciseComponent extends React.Component {
    constructor(props) {
        super(props);

        this.setState({
            exercise: {
                username: "",
                description: "",
                duration: 0,
                date: new Date()
            },
            onDelete: null
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.exercise.username}</td>
                <td>{this.props.exercise.description}</td>
                <td>{this.props.exercise.duration}</td>
                <td>{this.props.exercise.date.substring(0,10)}</td>
                <td>
                    <Link to={"/edit/"+this.props.exercise._id}>edit</Link> | <a href="#" onClick={() => {this.props.deleteExercise(this.props.exercise._id) }}>delete</a>
                </td>
            </tr>
        )
    }
}