# Ludan Modal

Live example: [https://ludan-modal.firebaseapp.com/](https://ludan-modal.firebaseapp.com/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Tests

Run `ng test`

## Usage

Check out `app.component.ts`

```typescript
  <button (click)="openModal()">Open a modal</button>
  <ludan-modal [modalId]="'exampleModal'"> hello </ludan-modal>
```

## Deploy on firebase

```
npm build
firebase deploy
```

## Release npm package

```
npm build ngx-ludan-modal
cd dist/ngx-ludan-modal
npm publish
```
