# AngularEnterprise2022

## Reglas, estilo, convenciones y mejores prácticas para el desarrollo en Angular (Typescript) y C# .NET Core

### Consideraciones generales

El objetivo de este documento sirve para establecer la consistencia deseada cuando se escribe código
tanto en Typescript como en C# a las que nos debemos adherir. Al seguir estas pautas al escribir
código propio podemos esperar esa misma consistencia cuando editamos código que ha sido escrito por otro/a desarrollador/a.
Cuando desarrollamos código complejo siempre habrá que comentar con detalle ese código.
Usaremos como referencia el 'Google TypeScript guide'

https://google.github.io/styleguide/tsguide.html

## Angular / TypeScript

Nos ayudaremos del uso de un formateador prettier y su archivo de configuración que está por definir.

- Indentado de 2 espacios
- Linea en blanco separando métodos.
- Nombrado de variables: significativas y usando siempre camelcase.
- Interfaces, Types: PascalCase
- Constantes: UPPERCASE
- Enums:

```typescript
Roles.Admin;
Roles.Managert;
```

- Agrupado de miembros del componente (public, private, @Input, @Output, @ViewChild, etc.). Por ejemplo:

```typescript
fullName: string;
age: string;
companyAddress: string;

private dealerId: number;
private dealerName: string;

@Input() id: number;
@Input() data: Data;

@ViewChild('Grid'): GridComponent;
```

Preferencia de ecmascript6 sobre versiones antiguas de Javascript. Uso prevalente de _arrow functions_ sobre funciones normales. Por ejemplo:
(Nótese que las _arrow functions_ terminan con un punto y coma siempre)

```typescript
getDealerId = (dealerId: number): void => {};
```

a diferencia de:

```typescript
get(id) {}
```

Excepciones: Angular suele dar problemas en los _Life cycles_ si se usa _arrow functions_ con lo cual es mejor dejarlos como normales aunque estableciendo el tipo de return que en la gran mayoría de los casos será un void.

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

```typescript
public class SomeComponent implementes OnInit, AfterViewInit, OnDestroy {
  memberOne: string;
  memberTwo: number;
  memberThree: SomeObject;

  private memberFour: string;

  @Input() someInput;

  @Output() onSomeEvent = new EventEmitter<boolean>();

  @ViewChild() childRef: ElementRef / SomeOtherComponent;

  constructor(private someService: SomeService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  methodOne = (): void => {}

  methodTwo = (someVar: number): boolean => {}

  private methodThree = (): void => {}

  ngOnDestroy(): void {}
}
```

- Código que no tenga que ver con el renderizado de la plantilla se deberá refactorizar y escribir en el correspondiente _service_
- Avisos de errores tslint (eslint). Si tslint dice que la línea en cuestión excede 140 characteres (o el establecido como límite) o cualquier otro aviso, modifícalo para satisfacer tslint. Si hemos implementado reglas de t/eslint son para seguir las pautas ahí definidas. Añadir un _// tslint disable next line ..._ es profanar este documento.

### Nombrando variables: definiendo e inicializando variables

Uso de camelCase para variables y definiendo su tipo correspondiente. En caso de que ésta se inicialice no será necesario establecer su tipo, TypeScript se encargará de inferirlo.

```typescript
memberOne: string;
memberTwo = 68999;
```

Nombrando servicios: un servicio AppService sera inyectado como sigue:

```typescript
constructor (private appService: AppService) {}
```

la variable sera exactamente igual que el servicio pero en camelCase
Ejemplo incorrecto:

```typescript
private service: AppService
```

### Creando ficheros

Un archivo de TypeScript se nombrará como sigue:
`entity.ts` y no `entityModel.ts`. El primero es un fichero y el segundo es una variable. En el primer caso, se entenderá que el fichero estará localizado en una carpeta denominada _models_. Asi, siguiendo este patrón tendremos el dominio de la aplicación organizada por carpetas, por ejemplo,

```typescript
*models* (interfaces)
  entity.ts
  other-entity.ts
  some-function.ts

*enums*
  first.ts

*types*
```

Se podría añadir sufijo por tipo para saber el contenido sin abrir el fichero
