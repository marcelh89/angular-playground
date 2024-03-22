# WizardForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `npx json-server server/db.json` to start mock server (optional but form submit will fail)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Features:
- multistep form
- Angular Validation
- dynamic inputs, Angular Reactive forms
- Json based configuration
- json-server (CRUD testing)
- OpenAPI (test)
- https://material.angular.io


## Further help

### Run Mock Server
`npx json-server server/db.json`

see http://localhost:3000/partner (in browser)
data is stored inside json file in server/db.json
https://github.com/typicode/json-server provides full CRUD API
POST example see `server/create-partner.http`

### Open API - generate api from spec file
`openapi-generator-cli generate -i src/assets/openapi/api-spec.yaml -g typescript-angular -o src/app/api`
