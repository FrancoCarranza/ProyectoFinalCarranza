import { useState } from "react";
import VentasContainer from "./VentasContainer";
import "./CheckOutForm.css"

function CheckOutForm(){

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mail, setMail] = useState("");

    return(
        <div className="comprar">
            <h2 className="titulo-comprar" >Completa tus datos para finalizar la compra</h2>
            <div className="formulario">
                <form className="form">
                    <label className="campo">
                        <p className="titulo-campo">Nombre:</p>
                        <input className="input-campo"
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                        required
                        />
                    </label>
                    <label className="campo">
                        <p className="titulo-campo">Apellido:</p>
                        <input className="input-campo"
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        required
                        />
                    </label>
                    <label className="campo">
                        <p className="titulo-campo">Telefono:</p>
                        <input className="input-campo"
                        type="tel"
                        name="telefono"
                        placeholder="Teléfono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                        />
                    </label>
                    <label className="campo">
                        <p className="titulo-campo">Email:</p>
                        <input className="input-campo"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        required
                        />
                    </label>
                </form>
                <div className="boton-div">
                    <VentasContainer
                        nombre={nombre}
                        apellido={apellido}
                        telefono={telefono}
                        mail={mail}
                        setNombre={setNombre}
                        setApellido={setApellido}
                        setTelefono={setTelefono}
                        setMail={setMail}
                    />
                </div>
            </div>
            <h2>Por favor, completá los siguientes datos para procesar tu pedido.</h2>
        </div>
    )
}

export default CheckOutForm;