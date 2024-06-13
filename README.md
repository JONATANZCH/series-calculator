# Series Calculator App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
Step 1. Clone the repository:

### `git clone "URL"`

Step 2. Install node dependencies:

### `npm install`

Step 3. In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test:jest || npm test`
```
* This project uses jest for testing.
```
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Ejecutar el archivo de console.logs `testSeriesCalculator.ts`

If you want to run the testSeriesCalculator.ts file manually to manipulate the number n and see the results in the console of each algebraic expression of the Theorem, you can do so with the following steps:

1. Open the src/testSeriesCalculator.ts file and set the value of n to the desired number:

```
const n = 47; // Set the desired value of n here
```

2. Run the script using the following command:
```
npm run start:test
```

## Logic

Application to understand the numerical series.

```
series(n) = prime(n + 1) - 2 * triangular(n) + fibonacci(n + 1)
```

You can learn more in the [Número triangular](https://es.wikipedia.org/wiki/N%C3%BAmero_triangular).

You can learn more in the [Sucesión de Fibonacci](https://es.wikipedia.org/wiki/N%C3%BAmero_triangular).

You can learn more in the [Número primo](https://es.wikipedia.org/wiki/N%C3%BAmero_primo).

## Teorema de la Serie Combinada

### Enunciado del Teorema:

Sea \( n \) un número entero positivo. Definimos la serie \( S(n) \) como la combinación de las siguientes series numéricas: los números primos, los números triangulares y la sucesión de Fibonacci. La expresión algebraica para \( S(n) \) está dada por:


\[ S(n) = P(n + 1) - 2T(n) + F(n + 1) \]

donde:

- \( P(k) \) representa el \( k \)-ésimo número primo.
- \( T(k) \) representa el \( k \)-ésimo número triangular, definido como \( T(k) = \frac{k(k + 1)}{2} \).
- \( F(k) \) representa el \( k \)-ésimo número de la sucesión de Fibonacci, donde \( F(0) = 0 \), \( F(1) = 1 \) y \( F(k) = F(k - 1) + F(k - 2) \) para \( k \geq 2 \).

### Prueba del Teorema:

#### Definiciones Básicas:

- **Números Primos**: Un número primo es un número natural mayor que 1 que no tiene divisores positivos más que 1 y sí mismo.
- **Números Triangulares**: Los números triangulares son aquellos que forman un triángulo equilátero. El \( k \)-ésimo número triangular está dado por \( T(k) = \frac{k(k + 1)}{2} \).
- **Sucesión de Fibonacci**: La sucesión de Fibonacci es una secuencia de números donde cada número es la suma de los dos anteriores, comenzando con 0 y 1.

#### Cálculo de cada término:

1. Calcular \( P(n + 1) \): Encuentra el \( (n + 1) \)-ésimo número primo.
2. Calcular \( T(n) \): Utiliza la fórmula \( T(n) = \frac{n(n + 1)}{2} \).
3. Calcular \( F(n + 1) \): Utiliza la fórmula recursiva de Fibonacci.

#### Sustitución en la Fórmula:

Sustituye los valores obtenidos en la expresión \( S(n) = P(n + 1) - 2T(n) + F(n + 1) \).

### Ejemplo:

Para \( n = 5 \):

- El \( 6 \)-ésimo número primo \( P(6) = 13 \).
- El \( 5 \)-ésimo número triangular \( T(5) = \frac{5 \cdot 6}{2} = 15 \).
- El \( 6 \)-ésimo número de Fibonacci \( F(6) = 8 \).

Entonces, la serie combinada para \( n = 5 \) es:
\[ S(5) = P(6) - 2T(5) + F(6) = 13 - 2(15) + 8 = 13 - 30 + 8 = -9 \]

### Conclusión:

La fórmula \( S(n) = P(n + 1) - 2T(n) + F(n + 1) \) proporciona una combinación específica de números primos, triangulares y de la sucesión de Fibonacci, y puede ser utilizada para obtener valores de esta serie para cualquier número entero positivo \( n \).
