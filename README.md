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

## Estructura de componentes

- `App`  
- `NavBar` con `CartWidget`  
- `ItemListContainer` con `ItemList` y `Item`  
- `ItemDetailContainer` con `ItemDetail` y `ItemCount`  
- `Cart` con `CartItem`  
- `CheckoutForm`  

## Consideraciones finales

El proyecto respeta las buenas prácticas de React, con separación clara de componentes contenedores y de presentación. Se realizaron pruebas para asegurar que la navegación es fluida y sin recargas. Las credenciales de Firebase se manejan con variables de entorno para proteger la información sensible.

---

Cualquier consulta o sugerencia, estoy disponible para responderla.

---

**Autor:** Franco Carranza  
**Fecha:** 2025  