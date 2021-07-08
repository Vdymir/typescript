import { useForm } from '../hooks/useForm'

interface formData {
    nombre:string;
    email:string;
    number:number;
}

const Formulario = () => {

    const {form, handleChange } = useForm<formData>({
        nombre:'',
        email:'',
        number: 4,
    })

    const { nombre, email, number } = form;
    return (
        <form>
            <input 
                type="text" 
                name="nombre"
                placeholder="nombre"
                value= {nombre}
                onChange= { handleChange } />
            <input 
                type="email" 
                name="email"
                placeholder="email"
                value= {email}
                onChange= { handleChange } />
            <input 
                type="number" 
                name="numero"
                placeholder="tu numero"
                value= {number}
                onChange= { handleChange } />
        </form>
    )
}

export default Formulario
