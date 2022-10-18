## Eslint, prettier and Airbnb code styleguide. 
## Setup and configuration

---

</br>
</br>

Add angular eslint schematics
```
	ng add @angular-eslint/schematics
```
This will add the *lint* step to the angular.json project file, it will add a *.eslintrc.json* file and update the *package.json* file. Verify that this is done.
Run to test:

```javascript
	ng lint
```

Next, run
```
	npm info "eslint-config-airbnb-base@latest" peerDependencies
```
which will tell you what dependencies you'll need to install: *eslint-plugin-import*

Go ahead and install them by running:
```
	npm install eslint-config-airbnb-base eslint-plugin-import
```
Modify .eslintrc.json *extends* property and add the following:
```
	airbnb-base
```
It should look like this:
```json
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "airbnb-base"
      ],
```
Now this is only for javascript. To make it used on Typescript we need to install another package:
```
	npm install -D eslint-config-airbnb-typescript
```
and then in the eslintrc.json *extends* add
```json
	"airbnb-typescript/base"
```

Test running ```ng lint```

You can turn off some of the rules in the .eslintrc.json file under rules:
Let's turn off 'Missing trailing comma' by adding:
```json
	"@typescript-eslint/comma-dangle": "off"
```

## Adding Prettier to the project
Install pacakges:
```bash
	npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```
Update the *extends* section in .eslintrc.json file:
```json
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "airbnb-base",
        "airbnb-typescript/base",
        "prettier",
        "plugin:prettier/recommended",
      ],
```
In VSCode open settings and set Prettier: Config Path to '.prettier.json'

- Ordering imports:
```bash
	npm install --save-dev prettier-plugin-organize-imports
```