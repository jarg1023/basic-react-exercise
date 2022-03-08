import { Part } from "./Part"

export const Content = (props) => {
    return (
        <>
            <Part part={props.parts.part1} exercises={props.exercises.exercises1}/>
            <Part part={props.parts.part2} exercises={props.exercises.exercises2}/>
            <Part part={props.parts.part3} exercises={props.exercises.exercises3}/>
        </>
    )
}
