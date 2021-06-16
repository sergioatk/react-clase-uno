import { Welcome } from './components/Welcome.js';

import { Tarjeta, BlogPost, autor, textoEnParrafos } from './tarea/Tarea1.js'

import { MatchNombre, PasswordInput, ValidationInput } from './tarea/Tarea2.js'

import { UncontrolledCheckbox, CheckboxList } from './tarea/Tarea3.js'

import{ ControlledCheckbox, CheckboxListWithState } from './tarea/Tarea4.js'

// Tarea2.js , clase 1

// ReactDOM.render(<CheckboxListWithState items={
//     {
//        uno: false,
//        dos: true,
//        tres: false,
//      }
//     } />, document.getElementById('react-app'));

// ReactDOM.render(<ControlledCheckbox
//     name='Pepito'
//     initialValue={true}
//     onChange={() => alert(`Hiciste click en el checkbox!`)}
// />, document.getElementById('react-app'));

// ReactDOM.render(<CheckboxList
//     items={{
//         uno: false,
//         dos: true,
//         tres: false
//     }}
    
// />, document.getElementById('react-app'));

// ReactDOM.render(<UncontrolledCheckbox
//     name='Detonar Dinamita'
//     initialValue=''
// />, document.getElementById('react-app'));


// ReactDOM.render(<ValidationInput
//     validation={(value) => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}
//     isPassword={false}
// />, document.getElementById('react-app'));


// ReactDOM.render(<PasswordInput
//     minLength='8'
// />, document.getElementById('react-app'));

ReactDOM.render(<MatchNombre
    validName="sergio"
/>, document.getElementById('react-app'));



// Tarea uno, clase 1

// ReactDOM.render(<BlogPost
//     titulo="Oda a las ardillas"
//     autor={autor}
//     parrafos={textoEnParrafos}
// />, document.getElementById('react-app'));


//ReactDOM.render(<Welcome nombre="Julián" />, document.getElementById('react-app'));

// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));
