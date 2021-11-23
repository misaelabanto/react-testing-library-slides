# Configuración

React Testing Library viene configurado por defecto cuando se crea una nueva aplicación con 

`create-react-app`

Se importa el jest-dom:
```ts
// src/setupTests.ts
import '@testing-library/jest-dom'
```

Lo cual permite usar:
```ts
// test.ts
expect(element).toHaveTextContent(/Haz clic aquí/i);
```
