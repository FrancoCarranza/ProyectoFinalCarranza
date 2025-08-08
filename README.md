# Proyecto Final - React Store

## Descripción

Este proyecto es una Single Page Application (SPA) de e-commerce desarrollada con React. Permite navegar por un catálogo de productos, ver detalles, agregar productos al carrito y realizar compras. La aplicación está conectada a Firebase Firestore, que se usa como base de datos para almacenar productos y registrar las órdenes de compra.

## Tecnologías utilizadas

- React (con hooks y React Router)  
- Firebase Firestore para base de datos en la nube  
- Context API para manejo global del estado del carrito  
- CSS para estilos personalizados  
- Font Awesome para íconos  

## Funcionalidades principales

- Listado dinámico de productos obtenidos desde Firestore.  
- Vista detallada de cada producto con selección de cantidad (validada contra stock).  
- Carrito de compras con resumen de productos, cantidades y totales.  
- Navegación SPA entre catálogo, categorías, detalle, carrito y checkout.  
- Registro de órdenes de compra en Firestore, mostrando al usuario el ID de la orden generada.  
- Renderizados condicionales para estados de carga, carrito vacío y productos sin stock.  
- Validaciones en el formulario de checkout para asegurar datos correctos.  
- Apartado sencillo de contacto para comunicación con el sitio. 

## Estructura de componentes

- `App`  
- `NavBar` 
- `Buttons` 
- `ItemListContainer` con `Item`
- `ItemDetailContainer` con `ItemCount`  
- `Cart`  
- `CheckoutForm`  
- `Contact`

## Cómo ejecutar el proyecto localmente

Sigue estos pasos para clonar, instalar y correr la aplicación en tu máquina:  

1. Clonar el repositorio:
    git clone https://github.com/FrancoCarranza/ProyectoFinalCarranza.git
2. Entra a la carpeta del proyecto:
    cd ProyectoFinalCarranza
3. Instala las dependencias:
    npm install
4. Ejecuta la aplicación en modo desarrollo:
    npm start  <!-- o npm run dev si usás Vite -->
5. Abrir en el navegador la URL:
    http://localhost:3000


## Consideraciones finales

El proyecto respeta las buenas prácticas de React, con separación clara de componentes contenedores y de presentación. Se realizaron pruebas para asegurar que la navegación es fluida y sin recargas. Las credenciales de Firebase se manejan con variables de entorno para proteger la información sensible.

---

Cualquier consulta o sugerencia, estoy disponible para responderla.

---

**Autor:** Franco Carranza  
**Fecha:** 2025  