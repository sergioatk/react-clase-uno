import { Welcome } from './components/Welcome.js';

import { Tarjeta, BlogPost, autor, textoEnParrafos } from './tarea/Tarea1.js'

import { MatchNombre, PasswordInput } from './tarea/Tarea2.js'

// Tarea2.js , clase 1

ReactDOM.render(<PasswordInput
    minLength='8'
/>, document.getElementById('react-app'));

// ReactDOM.render(<MatchNombre
//     nombre="Sergio"
// />, document.getElementById('react-app'));



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
