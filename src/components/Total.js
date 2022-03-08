const sum = (a, b, c) => {
    return a + b + c
}

export const Total = (props) => {
    let total = sum(
        props.exercises.exercises1,
        props.exercises.exercises2,
        props.exercises.exercises3
    )

    return (
        <p>
            Number of exercises {total}
        </p>
    )
}
