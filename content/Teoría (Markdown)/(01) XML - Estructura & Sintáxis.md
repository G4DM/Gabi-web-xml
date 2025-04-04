# XML - Estructura y sintaxis

## Índice
#### - [¿Qué es XML?](#qué-es-xml)
#### - [Historia de XML: Cómo empezó y porque](#historia-de-xml-cómo-empezó-y-porque)
#### - [Diferencias entre XML y HTML](#diferencias-entre-xml-y-html)
#### - [Estructura (Tree)](#estructura-tree)
#### - [Sintaxis](#sintaxis)
#### - [Webgrafía](#webgrafía)

---

## ¿Qué es XML?

XML es el acrónimo de "eXtensible Markup Language", que en español significa Lenguaje de Marcas Extensible. Se trata de un lenguaje de marcado con una estructura similar a HTML, pero con un enfoque diferente. Mientras que HTML está diseñado para mostrar información en un navegador web, XML se centra en almacenar y transportar datos de una manera estructurada y legible tanto para humanos como para máquinas.

XML es un lenguaje altamente flexible y autodescriptivo, lo que significa que los datos contenidos en un documento XML pueden entenderse sin necesidad de programas adicionales o formatos predefinidos. Su principal ventaja es que permite definir etiquetas personalizadas para organizar la información de acuerdo con las necesidades específicas de cada usuario o aplicación.

Gracias a su estructura jerárquica basada en nodos y elementos anidados, XML es ampliamente utilizado en el intercambio de datos entre sistemas, en la configuración de aplicaciones y en la representación de información estructurada en diversos dominios, como bases de datos, servicios web y documentos de configuración.

A continuación, exploraremos la historia de XML, su evolución y su impacto en el mundo de la tecnología.

## Historia de XML: Cómo empezó y porque

XML (Extensible Markup Language) nació en la década de 1990 como una solución para estructurar datos de manera universal y compatible entre diferentes plataformas. Su origen se remonta a SGML (Standard Generalized Markup Language), un estándar creado en los años 70 por Charles Goldfarb, Ed Mosher y Ray Lorie en IBM. SGML no era un lenguaje en sí mismo, sino una especificación para definir lenguajes de marcado, de los cuales HTML fue una de sus aplicaciones más conocidas.

HTML, aunque ampliamente adoptado, se volvió problemático debido a la falta de disciplina en su implementación, la fragmentación entre navegadores y la mezcla de contenido con presentación. Esto dificultó su uso para estructurar datos de manera eficiente.

En respuesta a estas limitaciones, un grupo liderado por Jon Bosak, Tim Bray y James Clark desarrolló XML, con la idea de ofrecer un estándar flexible para almacenar y compartir datos estructurados en cualquier plataforma. XML fue respaldado por el W3C y adoptado rápidamente por la industria, incluyendo a Microsoft, que lo utilizó como base para su estrategia de interoperabilidad con .NET. Aunque XML no pertenece a ninguna empresa, su utilidad ha sido clave para conectar sistemas y facilitar el intercambio de información en múltiples sectores.

## Diferencias entre XML y HTML

Aunque XML y HTML son muy parecidos, se diseñaron para cosas distintas y distintas metas en mente:
  - El diseño de XML está centrado en **TRANSPORTAR** datos, teniendo en consideración y centrándose en que son los datos.
  - En cambio HTML se ha diseñado para **MOSTRAR** los datos, teniendo en consideración y centrándose en como los datos se ven.
  - Las etiquetas XML no están predefinidas como lo son en HTML, es decir, las etiquetas de HTML están predefinidas para un uso en concreto (H1, Title, ...), mientras que las de XML son personalizables según la necesidad del usuario.

## Estructura (Tree)

XML organiza la información en una estructura jerárquica en forma de árbol, donde un elemento raíz contiene a los demás elementos anidados. Cada elemento puede tener subelementos, atributos y contenido de texto, lo que permite representar datos de manera clara y estructurada. Los componentes principales de la estructura son los siguientes:

  - Elemento raíz
  - Elementos secundarios
  - Relaciones entre elementos
  - Estructura en árbol


Visualización en árbol:
```
empresa
└── departamento
    └── empleado
        ├── nombre
        └── edad
```
    
Ejemplo de estructura en árbol:
```
<empresa>  <!-- Elemento raíz -->
    <departamento>  <!-- Hijo de empresa -->
        <empleado>  <!-- Hijo de departamento -->
            <nombre>Juan</nombre>  <!-- Hijo de empleado -->
            <edad>30</edad>
        </empleado>
    </departamento>
</empresa>
```

## Sintaxis

La sintaxis de XML define las reglas que deben seguirse para escribir documentos XML correctamente. Estas reglas aseguran que los datos sean bien estructurados, legibles y procesables por diferentes sistemas.

📌 Puntos clave de la sintaxis:
  - Todas las etiquetas deben cerrarse correctamente.
  -  Deben estar correctamente anidadas (sangría).
  -  Distingue entre mayúsculas y minúsculas (case-sensitive).
  -  Los atributos deben estar entre comillas.

Ahora, vamos a explicarlo en detalle. 🚀

### Declaración del documento XML (Prolog)

El documento comienza con una **declaración XML,** que indica (como mínimo) la versión y la codificación del texto.

```
<?xml version="1.0" encoding="UTF-8"?>
```

  - version="1.0" -> Indica la versión de XML utilizada en el archivo.
  - encoding="UTF-8" -> Especifica que codificación de caracteres va a utilizar el archivo.

### Elementos/etiquetas y atributos

De manera similiar a HTML, en XML los elementos/etiquetas son la base del lenguaje y a diferencia de HTML, en XML **siempre deben de tener una etiqueta de apertura y otra de cierre.** Esto en HTML no es obligatorio (aunque recomendable) y también tiene elementos de una sola etiqueta, cosa que en XML también se tendrían que cerrar.

> [!CAUTION]
> Siempre se tendrán que cerrar todas las etiquetas en XML.

✔️ Correcto:
```
<nombre>Juan</nombre>
```

❌ Incorrecto:

```
<nombre>Juan  <!-- Falta etiqueta de cierre -->
```

ℹ️ También pueden autocerrarse (con un espacio y barra al final) si no contienen contenido (una sola etiqueta):

```
<imagen src="foto.jpg"/>
```

### Anidación de elementos

La anidación de elementos se refiere a cómo los elementos de un documento XML pueden contener otros elementos dentro de ellos, creando una estructura jerárquica o en forma de árbol. Esta jerarquía permite organizar y representar datos de forma clara y estructurada.

En XML, los elementos se organizan de manera anidada mediante las etiquetas de apertura y cierre. Los elementos internos están contenidos dentro de los elementos externos.

Además de la declaración del documento XML, deben contener (por lo menos) un elemento principal (root element) que es el padre de todos los otros elementos:

```
<principal>
  <hijo>
    <subhijo>....</subhijo>
  </hijo>
</principal>
```
```
<root>
  <child>
    <subchild>....</subchild>
  </child>
</root>
```

Conceptos clave a tener en consideración:
  - **La estructura jerárquica:** La anidación establece una jerarquía en la que un elemento puede ser padre de otros elementos.
  - **Relaciones padre-hijo:** Un elemento padre puede contener elementos hijos.
  - **Obligatorio cierre de etiquetas:** Los elementos deben cerrarse adecuadamente, asegurando que las etiquetas de apertura y cierre estén balanceadas.

### Sensible a mayúsculas y minúsculas (case-sensitive)

XML es un lenguaje que es **case-sensitive,** esto significa que distingue entre mayúsculas y minúsculas. Es decir, aunque dos etiquetas tengan el mismo texto, si alguna letra es distinta (mayúscula o minúsucla), lo interpretará como otro elemento totalmente distinto.

Ejemplo:
```
<nombre>Juan</nombre> <!-- Elemento 1 -->
<NombrE>Juan</NombrE> <!-- Elemento 2 -->
```

Aunque ambos elementos contengan el texto "Juan", son elementos distintos dado que las etiquetas son realmente distintas, a pesar de contener el mismo texto en las etiquetas.

### Atributos en XML

Los atributos son pares de clave-valor que se añaden a las etiquetas de los elementos para proporcionar información adicional sobre el contenido de dichos elementos. Al igual que en HTML, los atributos se escriben dentro de la etiquet de apertura y después del nombre del elemento:

```
<persona nombre="Juan" edad="30" ciudad="Madrid">
    <direccion>Calle Falsa 123</direccion>
</persona>
```
- Aquí, los atributos son del elementos <persona>, y por como se puede apreciar, están (y deben estar) entre comillas (ya sean dobles ["] o simples [']).

Conceptos clave a tener en consideración:
  - Los atributos son opcionales en XML, es decir, un elemento puede no tener atributos y solo contener contenido dentro de las etiquetas de apertura y cierre.
  - Los atributos **_no_** se pueden anidar. Si se necesitan varios atributos, se añaden todos en la etiqueta de apertura.
  - Al igual que el nombre del elemento, el nombre de los atributos también es case-sensitive, por lo que debe ser consistente.

### Comentarios en XML

Los comentarios en XML se utilizan para agregar notas dentro del código sin que afecten el procesamiento del documento. Los comentarios se encierran entre \<!-- y -->, de la misma manera que en HTML.

```
<!-- Este es un comentario que no afecta al contenido -->
<persona>
    <nombre>Juan</nombre>
    <edad>30</edad>
</persona>
```

### Espacios en blanco y saltos de línea en XML

En XML, los espacios en blanco y saltos de línea **dentro de las etiquetas** no afectan el procesamiento del documento. Son simplemente ignorados por el procesador XML, lo que significa que puedes utilizarlos para hacer tu código más legible.

Sin embargo, los espacios **dentro del contenido de las etiquetas** sí son significativos. Por ejemplo, un espacio dentro de un valor de atributo o texto de un elemento es parte del contenido.

> [!IMPORTANT]
> En XML, los espacios en blanco (son los espacios, tabulaciones y saltos de línea) se respetan, pero se manejan de manera especial dependiendo del contexto.
>
> 

Ejemplo donde NO importa:
```
<persona>
    <nombre>Juan</nombre>
    <apellido>Pérez</apellido>
</persona>
```

Ejemplo donde SÍ importa:
```
<nombre>Juan Pérez</nombre> <!-- El espacio entre "Juan" y "Pérez" es importante -->
```

## Webgrafía

> [!NOTE]
> - General - https://www.w3schools.com/xml/
> - Introducción e Historia - https://www.itwriting.com/xmlintro.php
> - Estructura - https://en.wikipedia.org/wiki/XML_tree
> - Estructura y Reglas - https://www.geeksforgeeks.org/how-to-define-structure-of-xml-document/


> [!TIP]
> Para verificar siempre que vuestro archivo XML esté exento de fallos y errores, se recomienda pasarlo por un validador, hay varios:
> - https://www.xmlvalidation.com/
> - https://www.truugo.com/xml_validator/
