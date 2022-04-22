import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"


describe('Prueba de componente AddCategory', () => { 
    const setCategories = () => {  }

    test('Debe mostrar el componenete correctamente', () => {
        const wrapper = shallow( <AddCategory setcategorias={setCategories} /> )
    })
 })