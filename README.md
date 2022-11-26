# AngularEnterprise2022

## Reglas, estilo, convenciones y mejores prácticas para el desarrollo en Angular (Typescript) y C# .NET Core

### Consideraciones generales

El objetivo de este documento sirve para establecer la consistencia deseada cuando se escribe código
tanto en Typescript como en C# a las que nos debemos adherir. Si seguimos estas reglas al escribir
código propio podemos esperar esa misma consistencia cuando editamos código
que ha sido escrito por otro/a desarrollador/a.

### Typescript

- Indentado de 2 espacios
- Linea en blanco separando metodos.
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

Preferencia de ecmascript6 sobre versiones antiguas de Javascript. Uso prevalente de arrow functions sobre funciones normales. Por ejemplo:
(Notese que las _arrow functiones_ terminan on un punto y coma siempre)

```typescript
getDealerId = (dealerId: number): void => {};
```

a diferencia de:

```typescript
get(id) {}
```

Excepciones: Angular suele dar problemas en los _Life cycles_ si se usa arrow functiones con lo cual es mejor dejarlos como normales aunque estableciendo el tipo de return:

```typescript
ngOnInit(): void {}
```

- Como se puede ver, siempre se debe establecer el tipo en los parámetros y el tipo de return evitando el _any_.
- Definir nombres significativos sin importar la longitud. Un simple _get_ puede tener muchos significados y es demasiado genérico.
- Un metodo solo debe tener un único cometido y una uúnica razon para modificarse, esta es la _S_ de los principios _SOLID_
- Los miembros o propiedades en un componente de Angular son por defecto _public_ con lo que no es necesario agregar el modifier. Ordenamos los _private_ y luego los _public_.
- Los _Life Cycles_ siempre deben ir en primer lugar en un component, justo despues del constructor a excepcion del _ngOnDestroy_ que debera ir siempre al final del todo. Por lo tanto, se organiza el codigo en este orden:
  - Life cycles
  - Logica que solo refiere a la plantilla HTML del component
  - Codigo que solo se usa en component, con su correspondiente modifier _private_
  - y finalmente el life cycle _ngOnDestroy_
- Codigo que no tenga que ver con el renderizado de la plantilla se debera refactorizar y escribir en el correspondiente _service_
