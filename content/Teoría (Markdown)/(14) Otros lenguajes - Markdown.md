# Markdown

## ***¿Qué es Markdown?***
Markdown es un lenguaje de marcado ligero que se utiliza para formatear texto en la web. Fue creado por John Gruber y Aaron Swartz en 2004 con el objetivo de ser fácil de leer y escribir. Markdown se convierte en HTML, lo que lo hace ideal para crear documentos y contenido web.

## **Conceptos Básicos de Markdown**
## 1. Encabezados
Los encabezados son fundamentales para organizar el contenido en secciones. Ayudan a estructurar el documento de manera clara y jerárquica.

**Ejemplo:**

```

# Encabezado de Nivel 1
## Encabezado de Nivel 2
### Encabezado de Nivel 3
#### Encabezado de Nivel 4
##### Encabezado de Nivel 5
###### Encabezado de Nivel 6
```
>\# Encabezado de Nivel 1 es el más importante.
>\## Encabezado de Nivel 2 es un sub-encabezado del nivel 1, y así sucesivamente.

## 2. Énfasis
El énfasis se usa para resaltar partes del texto, haciendo que ciertas palabras o frases destaquen.

**Ejemplo:**
```

*Texto en cursiva*
_Texto en cursiva_

**Texto en negrita**
__Texto en negrita__

***Texto en negrita y cursiva***
___Texto en negrita y cursiva___
```
>\*Texto en cursiva* o _Texto en cursiva_ para cursiva.

>\**Texto en negrita** o __Texto en negrita__ para negrita.

>\***Texto en negrita y cursiva*** o ___Texto en negrita y cursiva___ para ambos.

## 3. Listas
Las listas son esenciales para organizar información en puntos o ítems, facilitando la lectura y comprensión.

**Ejemplo de lista no ordenada:**

```
- Elemento 1
- Elemento 2
  - elemento 1
  - Sub-elemento 2
```
**Ejemplo de lista ordenada:**

```
1. Primer elemento
2. Segundo elemento
   1. Sub-elemento 1
   2. Sub-elemento 2
```
## 4. Bloques de código
Los bloques de código se utilizan para mostrar fragmentos de código con formato adecuado, lo cual es útil para ejemplos de programación o configuración.

**Ejemplo:**


```
\```lenguaje
// código aquí
\```
```
**Para XML:**

```
\```xml
<!DOCTYPE libro [
  <!ELEMENT libro (titulo, autor)>
  <!ELEMENT titulo (#PCDATA)>
  <!ELEMENT autor (#PCDATA)>
]>
\```
```
## 5. Enlaces
Los enlaces permiten dirigir a los lectores a otras páginas o recursos relevantes.

**Ejemplo:**

```
[Texto del enlace](https://ejemplo.com)
```
>\[Texto del enlace] es el texto que verá el lector.
>\(https://example.com) es la URL a la que se dirigirá el lector.

## 6. Imágenes
Las imágenes complementan el texto y pueden ser usadas para ilustrar conceptos, haciendo el contenido más atractivo.

**Ejemplo:**

```
![Texto alternativo](https://example.com/imagen.png)
```
>\![Texto alternativo] describe la imagen.
>\(https://example.com/imagen.png) es la URL de la imagen.

## 7. Tablas
Las tablas organizan datos en filas y columnas para una fácil lectura y comparación.

**Ejemplo:**

```
| Encabezado 1 | Encabezado 2 |
|--------------|--------------|
| Dato 1       | Dato 2       |
| Dato 3       | Dato 4       |
```
## 8. Citas
Las citas se utilizan para resaltar declaraciones importantes o citas textuales, proporcionando contexto o énfasis.

**Ejemplo:**

```
> Esto es una cita.
> 
> - Autor de la cita
```
