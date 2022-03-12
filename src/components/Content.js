import { Part } from "./Part"

export const Content = (props) => {
    return (
        <>
            <Part part={props.parts.part1} exercises={props.parts.part1.exercises}/>
            <Part part={props.parts.part2} exercises={props.parts.part2.exercises}/>
            <Part part={props.parts.part3} exercises={props.parts.part3.exercises}/>
        </>
    )
}
