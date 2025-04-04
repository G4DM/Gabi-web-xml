# Declaración de Tipos de Documento (DTD)

Un **DTD** (Document Type Definition) es un conjunto de reglas que define la estructura y elementos válidos de un documento XML. Proporciona una gramática para una clase de documentos XML, especificando:

- Qué elementos pueden aparecer en el documento
- Qué atributos pueden tener estos elementos
- Cómo se pueden anidar los elementos
- El orden de los elementos
- Si un elemento puede estar vacío

## Declaración DOCTYPE

La declaración DOCTYPE se utiliza para asociar un documento XML con su DTD. La sintaxis básica es:

```xml
<!DOCTYPE nombre_raíz TIPO "URI_DTD">
```

Donde:
- `nombre_raíz`: Debe coincidir con el elemento raíz del documento XML
- `TIPO`: Puede ser PUBLIC o SYSTEM
- `URI_DTD`: Ubicación del DTD

### Ejemplo de DOCTYPE

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "DTD/xhtml1-strict.dtd">
```

<details>
<summary>Más información sobre tipos de DOCTYPE</summary>

Un DOCTYPE puede ser:

1. **PUBLIC**: Utiliza un identificador público y opcionalmente una URL para localizar el DTD.
2. **SYSTEM**: Utiliza solo una URL para localizar el DTD.

El formato completo de la declaración es:

```xml
<!DOCTYPE nombre_raíz PUBLIC "ID-Público" "URI-DTD">
<!DOCTYPE nombre_raíz SYSTEM "URI-DTD">
```

</details>

## Declaración Standalone

La declaración **Standalone** en XML indica si el documento depende de información externa (como un DTD) para ser procesado correctamente.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE s1 PUBLIC "http://www.ibm.com/example.dtd" "example.dtd">
```

### Valores válidos para standalone

| Valor | Significado |
|-------|-------------|
| `yes` | El documento es independiente, no necesita referencias externas |
| `no`  | El documento depende de una DTD u otra información externa |

<details>
<summary>Explicación detallada de standalone</summary>

La declaración standalone tiene implicaciones en cómo un procesador XML maneja el documento:

- **standalone="yes"**: Indica que no hay definiciones externas que afecten al contenido del documento. El procesador no necesita leer ningún archivo externo para interpretar correctamente el documento.

- **standalone="no"**: Indica que hay definiciones externas (como DTDs) que afectan al contenido y el procesador debe leerlas para interpretar correctamente el documento.

Si se omite la declaración standalone, se asume por defecto "no".
</details>

## Importancia de los DTDs

Los DTDs proporcionan un mecanismo para validar documentos XML, asegurando que siguen una estructura específica. Esto es crucial para:

- Garantizar la integridad de los datos
- Facilitar el intercambio de información entre sistemas
- Establecer un estándar para un tipo específico de documento
