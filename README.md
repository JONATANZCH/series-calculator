# Series Calculator App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
```bash
Step 1. clone the repository:

git clone "URL"

Step 2. Install node dependencies:

### `npm install`

Step 3. In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```

### `npm test`
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

## Logic

Application to understand the numerical series.

```
series(n) = prime(n + 1) - 2 * triangular(n) + fibonacci(n + 1)
```

You can learn more in the [Número triangular](https://es.wikipedia.org/wiki/N%C3%BAmero_triangular).

You can learn more in the [Sucesión de Fibonacci](https://es.wikipedia.org/wiki/N%C3%BAmero_triangular).

You can learn more in the [Número primo](https://es.wikipedia.org/wiki/N%C3%BAmero_primo).

## Running testSeriesCalculator.ts

If you want to run the testSeriesCalculator.ts file manually to manipulate the number n and see the results in the console of each algebraic expression of the Theorem, you can do so with the following steps:

1. Open the src/testSeriesCalculator.ts file and set the value of n to the desired number:

```
const n = 47; // Set the desired value of n here
```

2. Run the script using the following command:
```
npm run start:test
```

## Teorema de la Serie Combinada

Sea 𝑛 un número entero positivo. Definimos la serie 𝑆(𝑛) como la combinación de las siguientes series numéricas: los números primos, los números triangulares y la sucesión de Fibonacci. La expresión algebraica para 𝑆(𝑛) está dada por:

```
S(n)=P(n+1)−2T(n)+F(n+1)
```
donde:

    * P(k) representa el k-ésimo número primo.
    * T(k) representa el k-ésimo número triangular, definido como T(k)= k(k+1)/2.
    * F(k)  representa el k-ésimo número de la sucesión de Fibonacci, donde F(0) = 0, F(1) = 1 y F(k) = F(k−1)+F(k−2) para k≥2.

Prueba del Teorema:
1. Definiciones Básicas:

- Números Primos: Un número primo es un número natural mayor que 1 que no tiene divisores positivos más que 1 y sí mismo.

- Números Triangulares: Los números triangulares son aquellos que forman un triángulo equilátero. El 𝑘-ésimo número triangular está dado por T(k)= k(k+1)/2.

- Sucesión de Fibonacci: La sucesión de Fibonacci es una secuencia de números donde cada número es la suma de los dos anteriores, comenzando con 0 y 1.

2. Cálculo de cada término:

- Calcular P(n+1): Encuentra el (n+1)-ésimo número primo.
- Calcular T(n): Utiliza la fórmula T(n)= 2n(n+1).
- Calcular F(n+1): Utiliza la fórmula recursiva de Fibonacci.

3. Sustitución en la Fórmula:

- Sustituye los valores obtenidos en la expresión S(n)=P(n+1)−2T(n)+F(n+1).

## Ejemplo

Para 𝑛=5:

- El 6-ésimo número primo P(6)=13.
- El 5-ésimo número triangular T(5)= 2/5⋅6=15.
- El 6-ésimo número de Fibonacci F(6)=8.

Entonces, la serie combinada para 𝑛=5

```
S(5)=P(6)−2T(5)+F(6)=13−2(15)+8=13−30+8=−9
```

#### Conclusión:

La fórmula S(n)=P(n+1)−2T(n)+F(n+1) proporciona una combinación específica de números primos, triangulares y de la sucesión de Fibonacci, y puede ser utilizada para obtener valores de esta serie para cualquier número entero positivo 𝑛.