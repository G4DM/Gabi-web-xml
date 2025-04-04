# Métodos de definición de documentos XML

## ¿Qué son?
Son formas en que se pueden definir y estructurar los documentos XML para garantizar que sigan ciertas reglas y esquemas. Hay dos métodos principales:

## 1. DTD (Definición de Tipo de Documento)

- Es una forma antigua de definir la estructura de un documento XML.
- Especifica qué elementos y atributos están permitidos en un documento XML.
- No es compatible con XML Namespaces.
- Se define dentro del documento XML o en un archivo externo con extensión `.dtd`.
- Usa una sintaxis diferente a la de XML.

### Ejemplo de DTD:

```xml
<!DOCTYPE persona [
    <!ELEMENT persona (nombre, edad)>
    <!ELEMENT nombre (#PCDATA)>
    <!ELEMENT edad (#PCDATA)>
]>
```

📌 **Notas:**
- Todo lo que está dentro de los corchetes `[ ]` son las reglas del DTD.
- Define que el elemento `persona` debe contener los elementos `nombre` y `edad` en ese orden.
- `#PCDATA` (Parsed Character Data) significa que el contenido será texto legible.

## 2. XML Schema (XSD - XML Schema Definition)

- Es un estándar más avanzado y flexible que DTD.
- Usa una sintaxis basada en XML, lo que facilita su lectura y procesamiento.
- Soporta tipos de datos (números, fechas, booleanos, etc.).
- Es compatible con XML Namespaces.

### Ejemplo de XSD:

```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="persona">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="nombre" type="xs:string"/>
                <xs:element name="edad" type="xs:int"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

📌 **Notas:**
- Declara que este archivo es un XML Schema (XSD).
- El atributo `xmlns:xs` define el namespace de XML Schema.
- Define `persona` como un elemento complejo con `nombre` y `edad` dentro.
- `nombre` es de tipo `xs:string`, mientras que `edad` es de tipo `xs:int`.

## Diferencias clave entre DTD y XSD

| Característica | DTD | XSD |
|--------------|----|----|
| Sintaxis | Propia (no XML) | Basada en XML |
| Soporte de tipos de datos | ❌ No | ✅ Sí (números, fechas, etc.) |
| Namespaces | ❌ No | ✅ Sí |
| Expresividad | Limitada | Más flexible y detallada |

## Conclusión
Los métodos de definición de documentos XML son esenciales para validar la estructura y contenido de los documentos XML. Aunque DTD es más simple, XSD es más potente y recomendado para aplicaciones modernas.

## 📌 Cosas a saber: ¿Qué son los Namespaces en XML?
Los Namespaces (espacios de nombres) en XML sirven para evitar conflictos cuando se usan elementos y atributos con el mismo nombre pero que provienen de diferentes esquemas o contextos.
