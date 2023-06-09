import { useTodosQuery } from "../api/hooks"

const Todos = () => {
    const { data } = useTodosQuery()
    return (
        <>
            <p>Loaded {data?.length} items</p>
        </>
    )
}

export default Todos