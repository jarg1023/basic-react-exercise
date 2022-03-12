export const Part = (props) => {
    console.table(props)
    return (
        <p>
            {props.part.name} {props.exercises}
        </p>
    )
}
