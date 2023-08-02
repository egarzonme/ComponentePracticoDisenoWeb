import './App.css';
import SelectBox from 'devextreme-react/select-box';
import 'devextreme-react/text-area';
import anglo from './anglo.png';
import Select from 'react-select';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? '2px solid #4a90e2' : '1px solid #ccc',
      borderRadius: '4px',
      boxShadow: state.isFocused ? '0 0 0 3px rgba(74, 144, 226, 0.3)' : 'none',
      '&:hover': {
        border: state.isFocused ? '2px solid #4a90e2' : '1px solid #ccc',
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#4a90e2',
      color: 'white',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
      ':hover': {
        backgroundColor: '#4a90e2',
        color: 'white',
      },
    }),
  };
  
  const [formData, setFormData] = useState({
    name_: '',
    last_name: '',
    date_birth: '',
    grade: '',
    gender: '',
    phone: '',
    addres: ''
  });


  const options = [
    { value: 'opcion1', label: 'Cajas en bloque y cajas en nube' },
    { value: 'opcion2', label: 'Cajas optimizadoras y cajas de mejoras' },
    { value: 'opcion3', label: 'Cajas en bloque y cajas en línea' },
    { value: 'opcion4', label: 'Cajas en línea y cajas optimizadoras' },
  ];

  const modelo = [
    { value: 'opcion1', label: 'El modelo define cómo funcionan juntas las diferentes partes de una caja' },
    { value: 'opcion2', label: 'El modelo aclara dudas de las cajas de fuera' },
    { value: 'opcion3', label: 'CCS es el modelo definido por httml' },
    { value: 'opcion4', label: 'El modelo enseña el manejo de cada caja' },
  ];
  const contenido = [
    { value: 'opcion1', label: 'El relleno es espacio en blanco alrededor del contenido' },
    { value: 'opcion2', label: 'El área donde se muestra el contenido, cuyo tamaño puede cambiarse utilizando propiedades como width y height' },
    { value: 'opcion3', label: 'Envuelve el contenido, el relleno y el borde como espacio en blanco entre la caja y otros elementos' },
    { value: 'opcion4', label: 'Es la caja que envuelve el contenido y el de relleno.' },
  ];
  const estandar = [
    { value: 'opcion1', label: 'Es el relleno es espacio en blanco alrededor del contenido; es posible controlar su tamaño usando la propiedad padding y otras propiedades relacionadas.' },
    { value: 'opcion2', label: 'Es cuando estableces los atributos width y height para una caja, defines el ancho y el alto del contenido de la caja' },
    { value: 'opcion3', label: 'Las cajas también tienen un tipo de visualización interna, que determina cómo se disponen los elementos dentro de esa caja.' },
    { value: 'opcion4', label: 'Si utilizas el modelo de cajas estándar, el tamaño del borde se añade a los elementos' },
  ];

  const invisible = [
    { value: 'opcion1', label: 'Borde' },
    { value: 'opcion2', label: 'Margen' },
    { value: 'opcion3', label: 'Contenido' },
    { value: 'opcion4', label: 'Imagen' },
  ];


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const envio = async (event) => {
    console.log(formData);
  };

  const handleGenderChange = (selectedOption) => {
    setFormData({
      ...formData,
      gender: selectedOption.value
    });
    setSelectedGender(selectedOption);
  };

  const handleGenderGrade= (selectedOption) => {
    setFormData({
      ...formData,
      grade: selectedOption.value
    });
    setSelectedGrade(selectedOption);
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setFormData({
      ...formData,
      date_birth: selectedDate
    });
  };


  return (
    <div id="root" className='bg-gray-200'>
      <div className='bg-gray-200 h-10'></div>
      <div className='flex flex-col justify-center items-center mt-16 mb-16'>
        <div className='grid  shadow-2xl rounded-xl bg-white w-3/4'>
          <div className=" rounded-lg flex items-center  justify-center bg-amber-100">
            <div>
              <h1 className="text-white font-bold aria-selected:first-letter: mt-10 text-center">            
              </h1>
            </div>
          </div>
          <div className="flex flex-col m-10">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl ml-10 text-center">
                BOX MODEL
            </h1>
            <p className='mt-8'>A continuación encontrara unas preguntas con multiples respuestas, pero solo una sera la correcta.
            </p>
            <div className="grid grid-cols-1 gap-6 mt-10">
              <div>
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                  Nombre completo
                </label>
                <input
                  name='name_'
                  value={formData.name_}
                  onChange={handleChange}
                  type='text'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
              <div>
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                En CSS en general, hay dos tipos de cajas
                </label>
                <Select
                  options={options}
                  styles={customStyles}
              
                />
              </div>
              <div>
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                ¿Qué es el modelo de cajas CSS?
                </label>
                <Select
                  options={modelo}
                  styles={customStyles}
                />
              </div>
                                <div>
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                   Que es el modelo de cajas estándar?
                </label>
                <Select
                  options={estandar}
                  styles={customStyles}
                />
              </div>
              <div>
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                Que es un espacio invisible que hay alrededor de la caja
                </label>
                <Select
                  options={estandar}
                  styles={customStyles}
                />
              </div>
              <div className='flex items-center m-9 justify-center'>
            <button className=' w-36 h-10 bg-red-500'
            onClick={envio}>
              <h3 className='text-white'>ENVIO</h3>
            </button>
          </div>
            </div>
          </div>

        </div>
      </div>
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto text-center">
          <p className="text-white">© BOX MODELS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
