# Fullscreen mobile modal. How hard can it be?

[Post on dev.to](https://dev.to/stereobooster/fullscreen-mobile-modal-how-hard-can-it-be-7mj).

Imagine you need to implement a mobile-friendly form, beyond traditional inputs you need to implement fullscreen infinite calendar and a fullscreen combo box. Let's talk about "fullscreen". How hard you expect it would be? Should be not hard - just use fullscreen div with z-index and fixed position. Right? That what I thought.

## Attempt number 1

[Online example](https://stereobooster.github.io/react-modal-experiment/)

Let's use `div` which will cover all screen

```css
.FullScreenOne {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  background: #fff;
}
```

It works, except user can use <kbd>Tab</kbd> (or <kbd>⌃</kbd> and <kbd>⌄</kbd> in iOS) to move cursor out of modal.

<img width="30%" src="https://thepracticaldev.s3.amazonaws.com/i/dbt6moogpv3kqup2k0we.gif">

## Attempt number 2

[Online example](https://stereobooster.github.io/react-modal-experiment/v2/)

Use [Reach `Dialog`](https://ui.reach.tech/dialog) (in addition to previous solution). `Dialog` will set `aria-hidden` on all nodes at the `document.body` root except for the currently active dialog. This traps the virtual cursor inside the dialog.

~~Side note: I tried [react-focus-lock](https://github.com/theKashey/react-focus-lock), but it doesn't work in iOS (I mean for <kbd>⌃</kbd> and <kbd>⌄</kbd>).~~

It works, except when the user wants to scroll the content of the modal, but instead, they will scroll content behind the modal.

<img width="30%" src="https://thepracticaldev.s3.amazonaws.com/i/4muntjp2tbz2t3ytny8m.gif">

## Attempt number 3

[Online example](https://stereobooster.github.io/react-modal-experiment/v3/)

Use [`ScrollLocky`](https://github.com/theKashey/react-scroll-locky) (in addition to previous solution). `ScrollLocky` blocks any interactions with the rest of a page with the help of `react-locky` and `position: relative` on the body.

It works, except when the user scrolls down and bottom chrome of the Mobile Safari get's hidden, but later it is possible to trigger the appearance of bottom chrome and part of the modal will be hidden.

<img width="30%" src="https://thepracticaldev.s3.amazonaws.com/i/p9r323f5k3l3oeqx9m21.gif">

## Attempt number 4

[Online example](https://stereobooster.github.io/react-modal-experiment/v4/)

Use [`mobile-safari-fullscreen`](https://github.com/stereobooster/mobile-safari-fullscreen) (in addition to previous solution). It will always force to show the bottom of browser chrome when modal is opened.

<img width="30%" src="https://thepracticaldev.s3.amazonaws.com/i/3okfqyjq22n4wkk4dxqq.gif">

Side note: `WindowSize` can be used instead `mobile-safari-fullscreen`. I would say this is the preferred solution, this demo is more to show how much edge case is possible.

```js
<WindowSize>
  {({ height }) => (
    <ul style={{ height }}>
      <li />
    </ul>
  )}
</WindowSize>
```

## Conclusion

This kind of small details is what makes frontend development hard and interesting same time. If you liked this post read [my post about the UX of images on the web](https://github.com/stereobooster/react-ideal-image/blob/master/introduction.md).

**PS** [Different browser have the different behavior of focus](https://gist.github.com/cvrebert/68659d0333a578d75372). The most noticeable is Mobile Safari which doesn't allow to focus on links and buttons `¯\_(ツ)_/¯`.

Check out [this GitHub repo](https://github.com/stereobooster/react-modal-experiment) for the full code for this post.

Follow me on [twitter](https://twitter.com/stereobooster) and [github](https://github.com/stereobooster).