# Introducción

Estos ejercicios están diseñados para ayudarte a comprender y practicar los conceptos fundamentales del lenguaje XML. A lo largo de los ejercicios, trabajarás con la estructura básica de archivos XML, la identificación y corrección de errores, el uso de atributos, la validación de documentos bien formados, y otros aspectos clave como la anidación de elementos y el manejo de caracteres especiales. Al completar estos ejercicios, podrás desarrollar una comprensión sólida de cómo crear, estructurar y validar archivos XML en diversas situaciones.

>[!IMPORTANT]
>A lo largo de los ejercicios verás que tendrás que **validarlos**, para eso realizar eso, puedes utilizar [la siguiente página.](https://www.xmlvalidation.com/)

# Ejercicio 1: Crear un archivo XML básico
**Objetivo:** Crear un archivo XML con estructura básica.

**Tarea:**
1. Crea un archivo XML que contenga una lista de libros. Cada libro debe tener los siguientes elementos:
   - título
   - autor
   - fecha
2. Asegúrate de que el archivo esté bien formado (validador XML).

> [!NOTE]
> Asegúrate de utilizar un validador XML para confirmar que el archivo está bien formado.

# Ejercicio 2: Identificar errores en XML
**Objetivo:** Detectar errores de sintaxis en un archivo XML.

**Tarea:**
1. Observa el siguiente código XML y encuentra los errores de sintaxis. Luego, corrige los errores.

```
<productos>
  <producto>
     <nombre>Televisión</nombre>
     <precio>500/precio>
   </producto>
   <producto>
    <nombre>Teléfono</nombre>
    <percio>300</precio>
  <producto>
</produtos>
```

> [!TIP]
> El código tiene varios errores que deberás corregir para que sea válido.

# Ejercicio 3: Uso de atributos en XML
**Objetivo:** Usar atributos en elementos XML.

**Tarea:**
1. Crea un archivo XML que contenga información de al menos 2 estudiantes con los siguientes atributos:
   - id (número único de identificación).
   - edad (edad del estudiante).
2. Usa estos atributos dentro de los elementos estudiante.

> [!IMPORTANT]
> Recuerda que los atributos deben ser definidos dentro de las etiquetas de los elementos.

# Ejercicio 4: Crear una jerarquía con XML
**Objetivo:** Crear una jerarquía de elementos XML.

**Tarea:**
1. Crea un archivo XML que contenga 2 jugadores con los siguientes elementos:
   - nombre
   - apellidos
   - posición
   - número
   - edad
   - equipo

> [!TIP]
> Considera usar elementos anidados para representar la jerarquía de los jugadores.

# Ejercicio 5: Declaración XML
**Objetivo:** Entender la declaración XML.

**Tarea:**
1. Crea un archivo XML con una declaración de codificación de texto que no sea UTF-8 y valida que sea bien formada.

> [!NOTE]
> Asegúrate de declarar correctamente la codificación al inicio del archivo XML.

# Ejercicio 6: Validación de un documento bien formado
**Objetivo:** Asegurarse de que un XML esté bien formado.

**Tarea:**
1. Crea un archivo XML con tus tres películas favoritas, separado por película que contenga los subelementos título, director, fecha y género.
2. Asegúrate de que esté bien formado (validador XML).

> [!IMPORTANT]
> Verifica que el archivo se valide correctamente con un validador XML.

# Ejercicio 7: Anidación de elementos
**Objetivo:** Entender cómo anidar correctamente los elementos XML.

**Tarea:**
1. Crea un archivo XML para un menú de restaurante con los siguientes elementos:
   - menú
   - platillo (con subelementos nombre, precio, descripción).

> [!TIP]
> Recuerda que los elementos dentro del menú deben estar correctamente anidados y cerrados.

# Ejercicio 8: Uso de caracteres especiales
**Objetivo:** Usar caracteres especiales en XML.

**Tarea:**
1. Crea un archivo XML con información sobre productos (puede ser pack que contengan varias cosas, por ejemplo). Usa entidades XML para representar los siguientes caracteres: `&`, `<`, `>`, `"`, `'`.

> [!IMPORTANT]
> Los caracteres especiales deben ser representados con entidades XML.

# Ejercicio 9: Validar atributos de un elemento
**Objetivo:** Validar que los atributos estén correctamente definidos.

**Tarea:**
1. Crea un archivo XML con una lista de personas. Cada persona debe tener un atributo edad y sexo, además de los elementos nombre y apellido.
2. Asegúrate de que los atributos estén bien definidos y en su lugar adecuado.

> [!TIP]
> Verifica que los atributos `edad` y `sexo` estén dentro de las etiquetas correctas.

# Ejercicio 10: Crear un archivo XML con múltiples niveles
**Objetivo:** Crear un archivo XML con varios niveles de elementos.

**Tarea:**
1. Crea un archivo XML con la siguiente estructura:
   - Un elemento raíz `empresa` que contenga al menos 4 empleados (`empleado`), cada uno con:
     - nombre
     - cargo
     - departamento
     - salario

> [!IMPORTANT]
> Asegúrate de que la jerarquía de elementos esté bien definida, con un solo elemento raíz.
