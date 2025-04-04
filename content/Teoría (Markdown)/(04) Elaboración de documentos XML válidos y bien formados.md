# Elaboración de documentos XML válidos y bien formados

Cuando trabajamos con XML, es importante asegurarnos de que los documentos sean bien formados y, en algunos casos, también válidos. Veamos qué significa cada uno y cómo garantizarlo.

## 1. Documento XML Bien Formado
Un documento XML es bien formado cuando sigue las reglas básicas de sintaxis de XML. Estas son algunas de las reglas clave:

✅ **Debe tener un único elemento raíz**

```xml
<!-- Incorrecto (sin un único elemento raíz) -->
<libro></libro>
<autor></autor>
```

✅ **Las etiquetas deben estar correctamente anidadas**

```xml
<!-- Incorrecto (etiquetas mal anidadas) -->
<b><i>Texto en negrita y cursiva</b></i>
```

✅ **Las etiquetas deben cerrarse correctamente**

```xml
<!-- Incorrecto (falta de cierre de etiqueta) -->
<titulo>Mi libro
```

✅ **Deben usarse comillas en los valores de los atributos**

```xml
<!-- Incorrecto (falta de comillas) -->
<persona edad=30>
```

## 2. Documento XML Válido
Un documento XML es válido cuando, además de ser bien formado, sigue una estructura definida por un DTD o XSD.

### Ejemplo con DTD (Definición de Tipo de Documento)
DTD define qué elementos y atributos son permitidos en un XML.

```xml
<!DOCTYPE persona [
    <!ELEMENT persona (nombre, edad)>
    <!ELEMENT nombre (#PCDATA)>
    <!ELEMENT edad (#PCDATA)>
]>
```

### Documento XML válido según el DTD

```xml
<persona>
    <nombre>Juan</nombre>
    <edad>30</edad>
</persona>
```

### Ejemplo con XSD (XML Schema Definition)
XSD es más potente que DTD porque permite definir tipos de datos.

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

### Documento XML válido según el XSD

```xml
<persona>
    <nombre>Ana</nombre>
    <edad>25</edad>
</persona>
```

## 3. Diferencias entre XML Bien Formado y XML Válido

| Característica | XML Bien Formado | XML Válido |
|--------------|----------------|------------|
| Cumple con la sintaxis XML | ✅ Sí | ✅ Sí |
| Sigue una estructura definida | ❌ No | ✅ Sí (con DTD o XSD) |
| Requerido para procesamiento XML | ✅ Sí | ⚠️ No siempre |

## Conclusión
Para crear documentos XML correctos:
✅ Asegúrate de que sean bien formados siguiendo las reglas de sintaxis XML.
✅ Si necesitas validación estructural, usa DTD o XSD.

Siguiendo estas reglas, garantizas que los documentos XML sean compatibles y procesables sin errores.
