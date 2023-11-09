import { useContext } from "react"
import { PageContext } from "@stores/page"

export default function Page() {
    const { page } = useContext(PageContext);

    return <h1>Page {page}</h1>
}