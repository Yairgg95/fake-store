const [count, setCount] = useState(0)
/* useEffect
se ejecuta al renderizar el componente
2.- al cambiar alguna de sus dependencias
Recibe 2 parametros (funcion y arreglo de dependencias [])
 */

// Se ejecuta al terminar de renderizar el componente
    useEffect(() => {
        console.log("termino de renderizar")
    }, [])

    useEffect(() => {
        console.log("use effect count", count)
    }, [count])

    useEffect(() => {
        console.log("si no tengo deps me ejecuto siempre que cambie el estado")
    })

    // loop infinito
    // useEffect(() => {
    //     setCount(count +1 )
    //     console.log("WOOOOOOOO")
    // }, [count])
    