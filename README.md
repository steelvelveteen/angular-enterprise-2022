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

## Step 3

- Add user and admin modules under feature with routing

```
	ng g m feature/user --routing
	ng g m feature/admin --routing
```

- Add user-dashboard component under user module and admin-dashboard component under admin module

```
	ng g c feature/user/user-dashboard
	ng g c feature/admin/admin-dashboard
```

- Under each of these dashboards add home and profile components. Adjust routing on app.module to load these user and admin modules lazyily with loadChildren.
- Adjust each corresponding routing (user-routing.module.ts and admin-routing.module.ts).

## Step 4

- Create an auth service that will determine whether a user is logged in or not.
- Create an auth guard

```
	ng g guard auth/auth
```

This guard will determine if user is logged in by calling the auth.service.ts

- On app-routing.module apply the `canActivate: [AuthGuard] for user and admin. Should redirect to login page if not logged in


### Angular HTTP Interceptors
## Setup http client and request
For this section I'll need to make an API request to somewhere to get something back. So, I'll need a dumb component - **users-fake** - and implement an http request to call 

> `https://jsonplaceholder.typicode.com/users`

Create the component under the main module app.module.ts:
```bash
	ng g c users-fake --skipTests -is
```

We'll add a users service in this directory from where we'll make the api call:
```bash
	ng g s users-fake/users --skipTests
```

Add the HttpClientModule into the app.module.ts imports array.  ** NOTE ** I had to manually import the module.

In UsersService write the method getAllUsers using the http client to fetch users and call this service method from the users-fake component.

Add a route to this component in app-routing.module.ts.

## The Interceptor setup
Generate the interceptor and name it headers
```bash
	ng g interceptor headers
```

Add the interceptor into the app.module.ts file under providers:
```
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
  ],
```
Now to the actual interceptor. The intercept method has an incomming request parameter that you'll need to clone to be able to modify its headers
```javascript
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders: {
        API_KEY: '123apikey',
      },
    });
    // eslint-disable-next-line no-console
    console.log(req);

    // return next.handle(request);
    return next.handle(req);
  }
```

### Routing with params
Create a new component UserFakeSingleComponent and add its own service to avoid other changes in the usersService that we already created before.
Add a new route path below the users-fake route to accept a user id.