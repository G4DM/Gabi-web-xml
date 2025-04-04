# Espacios de nombres

## ***¿Qué son los espacios de nombres?***
Los espacios de nombres en XML sirven para evitar conflictos de nombres cuando se combinan documentos de diferentes fuentes. Se definen mediante la declaración xmlns, que asocia un prefijo con una URI única.

Una vez definido, un espacio de nombres se puede utilizar en los elementos y atributos XML para diferenciarlos de otros con el mismo nombre pero pertenecientes a diferentes contextos.

## 1. Definición de espacios de nombres
Un espacio de nombres en XML es una forma de identificar de manera única los elementos y atributos dentro de un documento XML. Se utiliza para evitar que haya elementos con el mismo nombre pero con significados diferentes, especialmente cuando se integran múltiples XML de diferentes fuentes o esquemas.

Los espacios de nombres se definen utilizando una sintaxis especial en XML. El formato típico de un espacio de nombres es:

```
<catalog xmlns:book="http://example.com/books">
    <book:title>XML Guide</book:title>
</catalog>
```

Donde prefijo es un identificador único que se utiliza para hacer referencia al espacio de nombres dentro del documento, y URI del espacio de nombres es una cadena que identifica de manera única el espacio de nombres. Aquí, book: es el prefijo asociado con el espacio de nombres http://example.com/books.

En resumen, los espacios de nombres ayudan a organizar y evitar conflictos en documentos XML al proporcionar identificadores únicos para los elementos y atributos.

## 2. Referencia de espacios de nombres
En XML, un espacio de nombres se define mediante un prefijo asociado con una URI (Uniform Resource Identifier). La URI no necesariamente tiene que ser una URL válida, aunque normalmente se usa una URL como estándar W3C. El propósito de esta URI es actuar como un identificador único.​

Se utilizan URLs como identificadores en los espacios de nombres XML porque las URLs son únicas y ayudan a evitar conflictos de nombres. Si cada desarrollador usa su propio dominio o subdominio, se minimiza el riesgo de que dos partes diferentes usen el mismo nombre de espacio de nombres por accidente.

**Ejemplo:**
```
http://ejemplo.com/libros
http://ejemplo.com/usuarios
```

## 3. Prefijos en espacios de nombres
El prefijo es un alias que se asocia a un espacio de nombres en un documento XML. Es una forma abreviada de referirse a la URI en lugar de escribir la URI completa cada vez.​

Un prefijo se declara en el atributo xmlns:prefijo, y luego se usa como prefijo en los nombres de los elementos o atributos.

**Ejemplo:**
```
<libro xmlns:lib="http://www.ejemplo.com/libros">
  <lib:titulo>Introducción a XML</lib:titulo>
</libro>
```
Se ha definido el prefijo lib para el espacio de nombres http://www.ejemplo.com/libros. El elemento titulo ahora está prefijado como lib:titulo.

Los prefijos en elementos ayudan a distinguir estructuras similares dentro de un XML.​ 

## 4. Uso de espacios de nombres en atributos
Los espacios de nombres también pueden ser usados en atributos, no solo en elementos. Esto es útil cuando se tienen elementos o atributos que deben diferenciarse según el contexto en que se usan.

Los prefijos en atributos se usan cuando el atributo pertenece a un espacio de nombres diferente al del elemento que lo contiene.

**Ejemplo:**


```
<?xml version="1.0" encoding="UTF-8"?>
<producto xmlns:p="http://www.ejemplo.com/productos"
          xmlns:desc="http://www.ejemplo.com/descripciones">

  <p:item desc:info="Edición limitada">
    <p:nombre>Smartphone X</p:nombre>
    <p:precio moneda="USD">799</p:precio>
  </p:item>

</producto>
```

Espacios de nombres definidos:

p → Para la información del producto.

desc → Para información descriptiva.

Uso en atributos:

desc:info="Edición limitada" → Aquí el prefijo desc indica que el atributo info pertenece al espacio de nombres http://www.ejemplo.com/descripciones.

moneda="USD" → No tiene prefijo porque pertenece al espacio de nombres predeterminado.

## 5. Posibles Conflictos y Resolución
Cuando trabajas con varios espacios de nombres, es importante evitar conflictos de prefijos y de nombres. Si hay elementos o atributos con el mismo nombre, aunque tengan diferentes espacios de nombres, el prefijo ayuda a diferenciarlos.

Si dos espacios de nombres se definen en el mismo documento XML pero con el mismo prefijo, eso crearía ambigüedad, por lo que cada espacio de nombres debe ser asignado a un prefijo único.


