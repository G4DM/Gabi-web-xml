# Documentación de especificaciones

## ***¿Qué es la documentación de especificaciones?***
La documentación de especificaciones XML se refiere a los estándares y guías técnicas que definen cómo estructurar, validar y manipular documentos en XML (Extensible Markup Language).

Las especificaciones se agrupan en 5 grandes categorías según su función dentro de XML. Las especificaciones oficiales están publicadas y pueden consultarse en la página del W3C.

## 1. Especificaciones fundamentales
Son las especificaciones esenciales sobre cómo se estructura y procesa XML:​

- ​XML 1.0: Define la sintaxis básica del lenguaje.​

- XML 1.1: Una versión con mejoras menores, poco utilizada.​

- Espacios de nombres: Permite evitar conflictos de nombres cuando se combinan distintos vocabularios XML.

XML 1.1 fue introducida en 2004 e incluye mejoras como mayor compatibilidad con caracteres de Unicode, mayor flexibilidad en nombres, o mejor manejo de los finales de línea. ​

​Sin embargo, tiene problemas de retrocompatibilidad con XML 1.0, por lo que no ha sido adoptada ampliamente. XML 1.0 sigue siendo el estándar más utilizado.

## 2. Especificaciones para validación
Estas son las especificaciones que definen como se estructuran los datos XML:​

- DTD (Document Type Definition): La forma más antigua de definir la estructura de un XML.​

- XML Schema (XSD - XML Schema Definition): Lenguaje más avanzado que DTD para definir la estructura y tipos de datos en XML.​

- RELAX NG: Alternativa a XSD, más sencilla y flexible. RelaxNG tiene una sintaxis más clara y menos redundante, y permite reutilizar definicones sin problemas. ​

XSD es el estándar de W3C y está integrado en la mayoría de herramientas de XML.

**Ejemplo de definición RELAX NG:**
```
<grammar xmlns="http://relaxng.org/ns/structure/1.0">
    <start>
        <element name="libro">
            <element name="titulo">
                <text/>
            </element>
            <element name="autor">
                <text/>
            </element>
        </element>
    </start>
</grammar>
```

| Característica        | RELAX NG | XML Schema (XSD) |
|----------------------|----------|------------------|
| **Simplicidad**      | Más simple y fácil de leer | Más complejo y verboso |
| **Sintaxis**         | Disponible en XML y Compact (RNC) | Solo XML |
| **Definición de Tipos** | Basado en patrones | Basado en tipos de datos de XML Schema |
| **Extensibilidad**   | Más flexible para definir reglas | Estricto y basado en una jerarquía de tipos |
| **Soporte de Espacios de Nombres** | Opcional y más flexible | Obligatorio y más rígido |
| **Reutilización de Definiciones** | Más fácil mediante referencias y patrones | Puede ser más complicado con `xs:include` y `xs:import` |
| **Validación**       | Menos restrictivo, más declarativo | Más estricto en validaciones |
| **Herramientas y Adopción** | Menos adoptado pero soportado en varias herramientas | Amplio soporte en editores XML y lenguajes como Java |
| **Ejemplo de Uso**   | Mejor para documentos con estructuras flexibles | Mejor para bases de datos XML y documentos con validación estricta |

## 3. Especificaciones para consultas y navegación
Estas especificaciones permiten acceder, extraer y manipular datos de los documentos XML:​

- ​XPath: Lenguaje para seleccionar nodos dentro de un documento XML.​
- XQuery: Lenguaje avanzado de consultas para extraer datos de XML (parecido a SQL pero para XML).​

**Ejemplo de XML:**
```
<biblioteca>
    <libro>
        <titulo>1984</titulo>
        <autor>George Orwell</autor>
    </libro>
    <libro>
        <titulo>Un mundo feliz</titulo>
        <autor>Aldous Huxley</autor>
    </libro>
</biblioteca>
```

| **Consulta XPath** | **Descripción** | **Resultado Esperado** |
|--------------------|----------------|------------------------|
| `/biblioteca/libro` | Selecciona todos los libros dentro de `<biblioteca>`. | Todos los elementos `<libro>`. |
| `/biblioteca/libro/titulo` | Obtiene los títulos de todos los libros. | `<titulo>1984</titulo>`, `<titulo>Un mundo feliz</titulo>`, etc. |
| `/biblioteca/libro[1]/titulo` | Obtiene el título del primer libro. | `<titulo>1984</titulo>` |
| `/biblioteca/libro[titulo='1984']/autor` | Obtiene el autor del libro "1984". | `<autor>George Orwell</autor>` |
| `//libro` | Selecciona todos los elementos `<libro>` sin importar su ubicación en el XML. | Todos los elementos `<libro>`. |

**Ejemplo de XQuery:**
```
for $l in /biblioteca/libro
where $l/autor = "George Orwell"
return $l/titulo
```

## 4. Especificaciones para transformación
Permiten convertir documentos XML a otros formatos como HTML, JSON, CSV o incluso otros XML.​

- XSLT (Extensible Stylesheet Language Transformations): Permite transformar XML en otros formatos como HTML, JSON, etc.​
- XSL-FO (XSL Formatting Objects): Usado para formatear XML y generar documentos impresos o PDFs.

**Ejemplo de XML de entrada:**
```
<biblioteca>
    <libro>
        <titulo>1984</titulo>
        <autor>George Orwell</autor>
    </libro>
    <libro>
        <titulo>Un mundo feliz</titulo>
        <autor>Aldous Huxley</autor>
    </libro>
</biblioteca>
```

**Ejemplo de XSLT. XML a HTML:**
```
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:template match="/">
    <html>
      <body>
        <h2>Lista de libros</h2>
        <ul>
          <xsl:for-each select="biblioteca/libro">
            <li><xsl:value-of select="titulo"/> - <xsl:value-of select="autor"/></li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
```

**Ejemplo de XSL-FO para transformar a PDF:**
```
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:template match="/">
    <fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format">

      <fo:layout-master-set>
        <fo:simple-page-master master-name="pagina"
          page-height="29.7cm" page-width="21cm"
          margin-top="2cm" margin-bottom="2cm"
          margin-left="2.5cm" margin-right="2.5cm">
          <fo:region-body/>
        </fo:simple-page-master>
      </fo:layout-master-set>

      <fo:page-sequence master-reference="pagina">
        <fo:flow flow-name="xsl-region-body">

          <fo:block font-size="14pt" font-weight="bold" text-align="center">
            Biblioteca
          </fo:block>

          <xsl:for-each select="biblioteca/libro">
            <fo:block font-size="12pt" font-weight="bold" margin-top="10pt">
              <xsl:value-of select="titulo"/>
            </fo:block>
            <fo:block font-size="10pt" font-style="italic">
              <xsl:value-of select="autor"/>
            </fo:block>
          </xsl:for-each>

        </fo:flow>
      </fo:page-sequence>

    </fo:root>
  </xsl:template>
</xsl:stylesheet>
```

Si necesitas generar PDFs desde XML, XSL-FO es la mejor opción.
Si quieres combinarlo con HTML, XSLT puede ayudarte.

## 5. Especificaciones de aplicaciones
Son especificaciones que tienen varios usos en diferentes industrias y tecnologías:  

- SOAP (Simple Object Protocol): Protocolo basado en XML para comunicación entre sistemas (usado en servicios web).  
- SVG (Scalable Vector Graphics): Lenguaje XML para gráficos vectoriales.  
- RSS y Atom: Formatos XML para sindicación de contenido en la web (feeds de noticias).  
- MathML: Lenguaje XML para representar expresiones matemáticas.  
- VoiceXML: Lenguaje XML para aplicaciones de voz e interacción con asistentes virtuales.  

Las especificaciones de aplicaciones se organizan en distintos sectores según su propósito:  

- Mensajería y comunicación: SOAP, XMPP  
- Publicaciones y documentos: DITA, XHTML  
- Finanzas y negocios: XBRL, UBL  
- Ciencias y salud: HL7, CML  
- Gráficos y multimedia: SVG, SMIL  
- Datos y metadatos: RDF, OWL  

​Si necesitas compartir datos estructurados, XML tiene una especificación para casi cualquier industria, cada una con su propia sintaxis y propósito especializado.
