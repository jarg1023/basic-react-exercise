import { Part } from "./Part"

export const Content = (props) => {
    return (
        <>
            {props.parts.map(part => (
                <Part part={part.name} exercises={part.exercises} />
            ))}
        </>
    )
}
