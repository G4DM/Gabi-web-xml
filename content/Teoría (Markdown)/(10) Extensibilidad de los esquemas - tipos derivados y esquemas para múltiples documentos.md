3. Creación de Descripciones y Asociación con Documentos XML
3.1 Introducción a la Descripción de XML (Diapositiva 1)
Para que un documento XML sea comprensible y validable, se usa:

DTD (Document Type Definition)

XSD (XML Schema Definition)

📌 Comparación con la vida real:
Es como un contrato de alquiler 🏠. Ambas partes deben seguir una estructura acordada.

3.2 Validación con DTD (Diapositiva 2)
DTD es una forma básica de definir la estructura XML.

Ejemplo de DTD:

xml
Copiar
Editar
<!DOCTYPE libro [
    <!ELEMENT libro (titulo, autor, precio)>
    <!ELEMENT titulo (#PCDATA)>
    <!ELEMENT autor (#PCDATA)>
    <!ELEMENT precio (#PCDATA)>
]>
📌 Curiosidad:
DTD no permite definir números o fechas, todo es texto.

3.3 Validación con XSD (Diapositiva 3)
XSD permite definir tipos de datos específicos:

xml
Copiar
Editar
<xs:element name="precio" type="xs:decimal"/>
📌 Comparación con la vida real:
Es como llenar un formulario digital. No puedes escribir letras en un campo de teléfono 📱.

3.4 Asociación de XML con su Esquema (Diapositiva 4)
Para vincular un XML con su esquema, usamos:

xml
Copiar
Editar
<?xml version="1.0"?>
<libro xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:noNamespaceSchemaLocation="libro.xsd">
</libro>
📌 Curiosidad:
Esto es como hacer una receta de cocina 🍲. El esquema es la receta, y el XML son los ingredientes siguiendo esa estructura.

3.5 RDF y OWL - Metadatos en XML (Diapositiva 5)
Cuando queremos agregar significado a los datos, usamos RDF y OWL.

Ejemplo RDF:

xml
Copiar
Editar
<rdf:Description rdf:about="http://ejemplo.com/libro123">
    <dc:title>XML Avanzado</dc:title>
    <dc:creator>Juan Pérez</dc:creator>
</rdf:Description>
📌 Comparación con la vida real:
Es como una etiqueta de precio en una tienda 🏪. No solo muestra el producto, sino también su información clave.

