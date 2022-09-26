# Set up of a large Angular Enterprise project

## Step one

- Remove all boilerplate from app.component.html file
- Add universal resetting in style.scss file

```css
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
```

- Import Inter font for global usage

```css
@import url("https://rsms.me/inter/inter.css");

html,
body {
  padding: 0;
  margin: 0;
  font-family: "Inter", -apple-system, SegoeUI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
```

- Add Angular material to the project; say Yes to all the prompts that come up

```bash
	ng add @angular/material
```

- Installing @angular/material will add more boilerplate to the style.scss file. Comment it out
- Test the application and verify that Inter font is used

## Step two

- Add core, shared, auth, services and feature modules. No routing required for these

```bash
	ng g m core
	ng g m shared
	ng g m feature
	...
```

- Under the shared module, add these directories: directives, pipes, ui, constants and enums, and create a sample file for each. running the `ng g d` will create the directory

```
	ex: mkdir ./src/app/shared/ui -- for reusable components
	ng g d shared/directives/sample
```

- Create header, footer and sidebar components under core
- Add auth, Core, Shared, Services and Feature modules imports to the app.module.ts file
- Test: `ng build` and `ng serve`
