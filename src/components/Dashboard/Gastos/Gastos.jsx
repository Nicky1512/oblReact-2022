import { useSelector } from "react-redux";

const Gastos = () => {

    const gastoTotal = useSelector((state) => state.gasto);
    

    return (
        <>
            <h1>Gastos</h1>
            <h2>$ {gastoTotal}</h2>
        </>
    )

}

export default Gastos;