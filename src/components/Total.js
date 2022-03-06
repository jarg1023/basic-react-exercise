export const Total = (props) => {
    let total = props.exercises.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0)

    return (
        <p>
            Number of exercises {total}
        </p>
    )
}
