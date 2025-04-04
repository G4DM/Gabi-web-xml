# Etiquetas en XML

Las etiquetas constituyen la base de XML. Definen el alcance de un elemento en el documento y también se pueden utilizar para insertar comentarios, declarar ajustes y para insertar instrucciones especiales.

## Clasificación de etiquetas XML

Las etiquetas XML se pueden clasificar de la siguiente manera:

### 1. Etiquetas de inicio

Cada elemento no-vacío en XML es marcado por una etiqueta de inicio. 

**Ejemplo:**
```xml
<address>
```

### 2. Etiquetas de cierre

Cada elemento que tenga una etiqueta de inicio ha de terminar con una etiqueta de cierre.

**Ejemplo:**
```xml
</address>
```

### 3. Etiquetas vacías

Los elementos que no tienen contenido se denominan vacíos. Un elemento vacío puede ser representado de dos maneras:

1. Con una etiqueta de inicio seguida inmediatamente de una etiqueta de cierre:
```xml
<hr></hr>
```

2. Con una etiqueta de elemento vacío (forma abreviada):
```xml
<hr />
```

## Reglas de las etiquetas XML

### 1. Son case-sensitive (sensibles a mayúsculas y minúsculas)

Las etiquetas, tanto de inicio como de cierre, deberán ser escritas ambas de la misma manera.

**Incorrecto:**
```xml
<address>Valle de los Caídos</Address>
```

**Correcto:**
```xml
<address>Valle de los Caídos</address>
```

### 2. Deben cerrarse en orden anidado

Las etiquetas deben cerrarse en el orden inverso al que fueron abiertas, respetando el anidamiento.

**Ejemplo:**
```xml
<elemento_externo>
    <elemento_interno>
        Juanma Castaño
    </elemento_interno>
</elemento_externo>
```

<details>
<summary>Ejemplo extendido de anidamiento correcto e incorrecto</summary>

**Correcto:**
```xml
<persona>
    <nombre>Ana</nombre>
    <dirección>
        <calle>Gran Vía</calle>
        <número>123</número>
        <ciudad>Madrid</ciudad>
    </dirección>
</persona>
```

**Incorrecto:**
```xml
<persona>
    <nombre>Ana</nombre>
    <dirección>
        <calle>Gran Vía</calle>
        <número>123</número>
    </persona>
    <!-- ERROR: Se cierra persona antes que dirección -->
    <ciudad>Madrid</ciudad>
</dirección>
```
</details>

## Instrucciones de procesamiento

En XML, una instrucción de procesamiento sirve para indicar cierta información al programa que procese dicho documento. Las instrucciones se escriben empezando con `<?` y finalizando con `?>`.

**Ejemplo:**
```xml
<?xml-stylesheet type="text/css" href="estilo-animales.css"?>
```

Esta instrucción serviría para asociar un archivo CSS con el documento XML.

<details>
<summary>Otros ejemplos de instrucciones de procesamiento</summary>

**Declaración XML:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
```

**Instrucción para un procesador específico:**
```xml
<?php echo "Esto será procesado por PHP"; ?>
```

**Instrucción para Apache Cocoon:**
```xml
<?cocoon-process type="xslt" stylesheet="mi-transformacion.xsl"?>
```
</details>

## Referencias a entidades

En XML existen algunos caracteres que son especiales por el significado que tienen. Para utilizar estos caracteres en el contenido del documento, se deben usar referencias a entidades.

| Carácter | Descripción | Referencia |
|----------|-------------|------------|
| < | menor que | `&lt;` |
| > | mayor que | `&gt;` |
| " | comilla doble | `&quot;` |
| ' | comilla simple | `&apos;` |
| & | ampersand | `&amp;` |

### Explicación y casos de uso

- **`<` (menor que)**: Es problemático porque indica el comienzo de una etiqueta.

```xml
<!-- Incorrecto -->
<mensaje>Si 5 < 10 entonces...</mensaje>

<!-- Correcto -->
<mensaje>Si 5 &lt; 10 entonces...</mensaje>
```

- **`>` (mayor que)**: Este carácter sí puede utilizarse y no sería incorrecto, pero aun así se recomienda hacer uso de su referencia para mayor claridad y consistencia.

```xml
<!-- Recomendado -->
<mensaje>Si 10 &gt; 5 entonces...</mensaje>
```

- **`"` (comilla doble)**: Si el valor de un atributo se escribe entre comillas dobles, dicho valor no podrá contener este carácter sin usar su referencia.

```xml
<!-- Incorrecto -->
<dato caracter="comilla doble(")"/>

<!-- Correcto -->
<dato caracter="comilla doble(&quot;)"/>
```

- **`'` (comilla simple)**: De igual modo ocurre con la comilla simple:

```xml
<!-- Incorrecto -->
<dato caracter='comilla simple(')'/>

<!-- Correcto -->
<dato caracter='comilla simple(&apos;)'/>
```

- **`&` (ampersand)**: Se debe usar su referencia para evitar confusiones con el inicio de otras referencias de entidad.

```xml
<!-- Incorrecto -->
<empresa>Johnson & Johnson</empresa>

<!-- Correcto -->
<empresa>Johnson &amp; Johnson</empresa>
```

### Entidades predefinidas vs. personalizadas

Además de las entidades predefinidas, XML permite definir entidades personalizadas en la DTD del documento:

```xml
<!DOCTYPE documento [
    <!ENTITY copyright "© 2023 Mi Empresa. Todos los derechos reservados.">
]>
<documento>
    <pie>&copyright;</pie>
</documento>
```
