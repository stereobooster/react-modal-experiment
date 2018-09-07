# Experiments with modal dialog

## `FullScreenOne`

Simple `<div>` and some CSS.

Issues: user can use <kbd>Tab</kbd> (or <kbd>⌃</kbd> and <kbd>⌄</kbd> in iOS) to move cursor out of modal.

Solution: use [Reach `Dialog`](https://ui.reach.tech/dialog). `Dialog` will set `aria-hidden` on all nodes at the `document.body` root except for the currently active dialog. This traps the virtual cursor inside the dialog.

Side note: I tried [react-focus-lock](https://github.com/theKashey/react-focus-lock), but it doesn't work in iOS (<kbd>⌃</kbd> and <kbd>⌄</kbd>).

## `FullScreenTwo`

Reach `Dialog` and some CSS.

Issue: sometimes user wants to scroll contet of the modal, but instead they will scroll content behind the modal.

Solution: use [`ScrollLocky`](https://github.com/theKashey/react-scroll-locky). `ScrollLocky` blocks any iterations with the rest of a page with the help of `react-locky` and "position:relative" on body.

## `FullScreenThree`

Reach `Dialog` and some CSS and `ScrollLocky`.

Issue: even so scroll is locked when user scrolls down and bottom chrome of the Mobile Safari get's hidden, but later it is possible to trigger appearance of bottom chrome and part of the modal will be hidden.

Solution: use [`mobile-safari-fullscreen`](https://github.com/stereobooster/mobile-safari-fullscreen) to always show bottom browser chrome.

## `FullScreenFour`

Reach `Dialog` and some CSS and `ScrollLocky` and `mobile-safari-fullscreen`.

Side note: `WindowSize` can be used instead `mobile-safari-fullscreen`. I would this is preferd option, this demo is more to show how much edgecase is possible.

```js
<WindowSize>
  {({ height }) => (
    <ul style={{ height }}>
      <li />
    </ul>
  )}
</WindowSize>
```

## About focus

[Different browser have different behaviour of focus](https://gist.github.com/cvrebert/68659d0333a578d75372). The most noticable is Mobile Safari which doesn't allow to focus on links and buttons.
