# Hrnet Modal Plugin [![npm version](https://img.shields.io/npm/v/@aalexandree-g/hrnet-modal)](https://www.npmjs.com/package/@aalexandree-g/hrnet-modal)

A lightweight, accessible and reusable **React Modal component**, originally built for the **HRnet project (OpenClassrooms)**.

This plugin provides:
- A fully custom React modal (no jQuery, no external modal libraries)
- Keyboard accessibility (Escape key, focus management)
- Click-outside closing

## Installation

Using npm :

```bash
npm install @aalexandree-g/hrnet-modal
```

Using yarn :

```bash
yarn add @aalexandree-g/hrnet-modal
```

## Basic usage (with state)

```js
import { HrnetModal, useHrnetModal } from '@aalexandree-g/hrnet-modal'

export default function Example() {
  const { isOpen, open, close } = useHrnetModal()
  return (
    <>
      <button onClick={open}>Open modal</button>
      <HrnetModal
        isOpen={isOpen}
        title="Success"
        message="Employee has been added !"
        variant="success"
        onClose={close}
      />
    </>
  )
}

```
## Props

| Prop        | Type     | Default       | Description                     |
| ----------- | -------- | ------------- | ------------------------------- |
| `isOpen`       | boolean   | —          | Wether the modal is visible                   |
| `title`    | string / JSX | —             | Title displayed in the modal |
| `message`      | string / JSX   | —  | Optional message below the title                  |
| `variant` | "success" / "error"   | "success" | Visual styling of the modal               |
| `onClose` | function   | — | Called when the modal requests to close               |

## Hook : useHrnetModal()
| Return value | Type           | Description              |
| ------------ | ---------------- | ------------------------ |
| `isOpen`     | boolean           | Current open / close state |
| `open`       | function         | Opens the modal          |
| `close`      | function        | Closes the modal         |
