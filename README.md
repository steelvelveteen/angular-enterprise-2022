# AngularEnterprise2022

## Relgas, convenciones y mejores prácticas para el desarrollo en Angular (Typescript) y C# .NET Core
### Consideraciones generales

El objectivo de este documento sirve para establecer la consistencia deseada cuando se escribe código tanto en Typescript como en C#
a las que nos debemos adherir. Si todos seguimos estas reglas al escribir código propio podemos esperar esa misma consistencia cuando editamos código
que ha sido escrito por otro/a desarrollador/a.

### Typescript
Preferencia de ecmascript6 sobre esmascript5. Uso prevalente de arrow functions sobre funciones normales. Por ejemplo:
```typescript
getDealerId = (dealerId: number): void => {};
```
a diferencia de:
```typescript
get(id) {}
```
Excepciones: Angular suele dar problemas en los *Life cycles* si se usa arrow functiones con lo cual es mejor dejarlos como normales aunque estableciendo el tipo de return:
```typescript
ngOnInit(): void {}
```
- Como se puede ver, siempre se debe establecer el tipo en los parámetros y el tipo de return.
- Definir nombres significativos sin importar la longitud. Un simple *get* puede tener muchos significados y es demasiado genérico.
