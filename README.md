# AngularEnterprise2022

## Reglas, estilo, convenciones y mejores prácticas para el desarrollo en Angular (Typescript) y C# .NET Core

### Consideraciones generales

El objetivo de este documento sirve para establecer la consistencia deseada cuando se escribe código
tanto en Typescript como en C# a las que nos debemos adherir. Si seguimos estas reglas al escribir
código propio podemos esperar esa misma consistencia cuando editamos código que ha sido escrito por otro/a desarrollador/a.
Cuando es inevitable desarrollar un código complejo siempre habrá que comentar con detalle ese código. No os ha pasado que revisitáis vuestro propio código despues de tan solo unas semanas y no sabéis que es lo que hace? Siempre nos ha pasado.

### Angular / Typescript
Nos ayudaremos del uso de un formateador prettier y su archivo de configuración que está por definir.

- Indentado de 2 espacios
- Linea en blanco separando métodos.
- Nombrado de variables: significativas y usando siempre camelcase.
- Interfaces, Types: PascalCase
- Constantes: UPPERCASE
- Enums: 
```typescript
  Roles.Admin
  Roles.Managert
```
- Agrupado de miembros del componente (private, public, @Input, @Output, @ViewChild, etc.). Por ejemplo:

```typescript
private dealerId: number;
private dealerName: string;

fullName: string;
age: string;
companyAddress: string;

@Input() id: number;
@Input() data: Data;

@ViewChild('Grid'): GridComponent;
```

Preferencia de ecmascript6 sobre versiones antiguas de Javascript. Uso prevalente de *arrow functions* sobre funciones normales. Por ejemplo:
(Nótese que las _arrow functions_ terminan con un punto y coma siempre)

```typescript
getDealerId = (dealerId: number): void => {};
```

a diferencia de:

```typescript
get(id) {}
```

Excepciones: Angular suele dar problemas en los _Life cycles_ si se usa *arrow functions* con lo cual es mejor dejarlos como normales aunque estableciendo el tipo de return que en la gran mayoría de los casos será un void.

```typescript
ngOnInit(): void {}
```

- Como se puede ver, siempre se debe establecer el tipo en los parámetros y el tipo de return evitando el _any_.
- Definir nombres significativos sin importar la longitud. Un simple _get_ puede tener muchos significados y es demasiado genérico.
- Un metodo solo debe tener un único cometido y una única razón para ser modificada, esta es la _Single Responsibility Principle_ del _SOLID_
- Los miembros o propiedades en un componente de Angular son por defecto _public_ con lo que no es necesario agregar el modifier como ya se ha visto en el ejemplo más arriba en los agrupados.
- Los _Life Cycles_ siempre deben ir en primer lugar en el componente, justo después del constructor a excepción del _ngOnDestroy_ que deberá ir siempre al final del todo. Por lo tanto, se organiza el codigo en este orden:
  - Life cycles
  - La lógica que solo refiere a la plantilla HTML del component.
  - Código que solo se usa en componente
  - y finalmente el life cycle _ngOnDestroy_
- Código que no tenga que ver con el renderizado de la plantilla se deberá refactorizar y escribir en el correspondiente _service_
- Avisos de errores tslint (eslint). Si tslint dice que la línea en cuestión excede 140 characteres (o el establecido como límite) o cualquier otro aviso, modifícalo para satisfacer tslint. Si hemos implementado reglas de t/eslint son para seguir las pautas ahí definidas. Añadir un *// tslint disable next line ...* es profanar este documento.
