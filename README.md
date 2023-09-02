# GifExpertApp

Este es mi repositorio del proyecto de GifExpertApp de React

Para que me funcionara en React 18 solo tuve que seguir las instrucciones originales del prof pero despues hago lo siguiente:

Ajustes extras del curso para el correcto funcionamiento del testing de GifExpertApp:

Elimino el jest.config.js

En lugar de crear el archivo babel.config.js yo creo: babel.config.json con su contenido en formato json.

{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
Crear archivo .babelrc

{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}```
