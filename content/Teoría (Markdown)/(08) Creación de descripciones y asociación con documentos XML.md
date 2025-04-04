2. Extensibilidad de los Esquemas - Tipos Derivados y Esquemas para Múltiples Documentos
2.1 Introducción a la Extensibilidad en XML Schema (Diapositiva 1)
¿Por qué es importante la extensibilidad?
A medida que las aplicaciones crecen, los esquemas XML deben adaptarse sin romper la compatibilidad con documentos anteriores.

Ejemplo de problema:

Un sistema tiene un esquema XML que define Vehiculo con marca y modelo.

Más tarde, se necesita agregar numPuertas para coches, pero las motos no tienen ese atributo.

Para solucionar esto sin modificar el esquema base, XML Schema permite la extensión y restricción de tipos.

📌 Curiosidad:
La extensibilidad en XML es similar a las actualizaciones de videojuegos. Se agregan nuevas funciones sin alterar las mecánicas básicas.

Pregunta tipo test:
¿Por qué es importante la extensibilidad en XML?
1️⃣ Para que los esquemas sean más rígidos.
2️⃣ Para permitir cambios sin afectar versiones anteriores.
3️⃣ Para eliminar datos innecesarios.
4️⃣ Para evitar la validación de documentos XML.

(Respuesta: 2️⃣)

2.2 Extensión de Tipos en XML Schema (Diapositiva 2)
Cuando queremos ampliar un tipo de dato existente, usamos <xs:extension>.

Ejemplo:
Definimos un Vehiculo, y luego lo extendemos para crear un Coche:

xml
Copiar
Editar
<xs:complexType name="Vehiculo">
    <xs:sequence>
        <xs:element name="marca" type="xs:string"/>
        <xs:element name="modelo" type="xs:string"/>
    </xs:sequence>
</xs:complexType>

<xs:complexType name="Coche">
    <xs:complexContent>
        <xs:extension base="Vehiculo">
            <xs:sequence>
                <xs:element name="numPuertas" type="xs:int"/>
            </xs:sequence>
        </xs:extension>
    </xs:complexContent>
</xs:complexType>
Aquí, Coche hereda de Vehiculo y añade numPuertas.

📌 Comparación con la vida real:
Esto es como una suscripción de Netflix 🎥. Todos los planes incluyen series y películas (Vehículo), pero el plan premium añade contenido en 4K (numPuertas).

2.3 Restricción de Tipos en XML Schema (Diapositiva 3)
Si en lugar de ampliar, queremos limitar un tipo existente, usamos <xs:restriction>.

Ejemplo:
Limitamos la temperatura a un rango entre -50 y 50 grados:

xml
Copiar
Editar
<xs:simpleType name="Temperatura">
    <xs:restriction base="xs:int">
        <xs:minInclusive value="-50"/>
        <xs:maxInclusive value="50"/>
    </xs:restriction>
</xs:simpleType>
📌 Comparación con la vida real:
Esto es como los límites de velocidad en carreteras 🚗. Puedes conducir, pero dentro de un rango permitido.

2.4 Esquemas para Múltiples Documentos - Uso de include e import (Diapositiva 4)
Para dividir esquemas en archivos reutilizables, usamos:

xs:include → Usa esquemas del mismo namespace.

xs:import → Permite importar esquemas de otro namespace.

Ejemplo con include:

xml
Copiar
Editar
<xs:include schemaLocation="definiciones_comunes.xsd"/>
Ejemplo con import:

xml
Copiar
Editar
<xs:import namespace="http://ejemplo.com/personas"
           schemaLocation="personas.xsd"/>
📌 Curiosidad:
Esto es como una biblioteca de códigos de programación. Puedes importar funciones sin escribirlas desde cero.

2.5 Uso de redefine para Modificar Esquemas (Diapositiva 5)
Si necesitamos modificar tipos ya definidos en otro esquema, usamos xs:redefine.

Ejemplo:

xml
Copiar
Editar
<xs:redefine schemaLocation="base.xsd">
    <xs:complexType name="Persona">
        <xs:complexContent>
            <xs:extension base="Persona">
                <xs:sequence>
                    <xs:element name="profesion" type="xs:string"/>
                </xs:sequence>
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
</xs:redefine>
📌 Comparación con la vida real:
Esto es como un mod de un videojuego 🎮. Cambias elementos de la versión original sin modificar el código base.

