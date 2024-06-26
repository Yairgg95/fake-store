import { Link } from "react-router-dom"

export default function HomePage () {
    return (
        <>
        <div className="flex justify-center items-center flex-col w-full min-h-dvh ">
        <h1 className="text-4xl font-bold text-center p-4">Fake Store</h1>
        <p className="text-center" > This is the home Page</p>
        <div className="flex flex-col items-center">
            <Link className="rounded p-4 bg-teal-500 hover:bg-teal-300 m-4 w-full max-w-sm text-center" to="/login">Login</Link>
            <Link className="rounded p-4 bg-teal-500 hover:bg-teal-300 m-4 w-full max-w-sm text-center" to="/Productos">Prodcutos</Link>
            <Link className="rounded p-4 bg-teal-500 hover:bg-teal-300 m-4 w-full max-w-sm text-center" to="/Productos/123">Producto</Link>
        </div>
    </div>
    </>
    )
}