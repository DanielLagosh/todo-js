import '../css/funciones.css';
//import webpacklogo from '../assets/img/messi_gordo.jpg';


export const saludar = ( nombre ) => {

    console.log('h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${ nombre } !!`;

    document.body.append( h1 );

    // img

    //const img = document.createElement('img');
    //img.src = webpacklogo;
    //document.body.append( img );
};