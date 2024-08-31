# blockanim
blockAnim - Dumb, lightweight &amp; class based css animations for your website.
# blockAnim

**blockAnim** is a minimalist library designed to add elegant block animations to your website. With just 1kb of vanilla JS and 5kb of CSS, it brings your divs, images, and other elements to life in seconds.

## Features

- **Lightweight**: Only 1kb of JavaScript and 5kb of CSS.
- **Ease of Use**: Animate your blocks with simple class names.
- **Ready-to-Use**: Over 35 modern and fluid block animations.
- **Customization**: Easily add animation delays and repeats.

## How to Use

1. **Download and Include Locally**:
   - Download the source code from [GitHub](https://github.com/gc-guillaume/textanim).
   - Include the CSS and JS files in your project.

2. **Apply Classes**:
   - Add the `blockanim-{animation}` class to any HTML element to trigger animations.
   - Optional: Add delay and repeat parameters.

## Available Animations

Here’s a quick reference for the available animations and how to use them:

| **Class**                                    | **Requirement** | **Description**                                                                 | **Example**                                 |
|----------------------------------------------|-----------------|---------------------------------------------------------------------------------|---------------------------------------------|
| `blockanim-{animation}`                      | Required        | Triggers the animation on scroll. Choose from over 35 animations available.     | `blockanim-slide-up`                        |
| `blockanim-{animation}-{delay in ms}`        | Optional        | Adds a delay to the animation in milliseconds, useful for sequential animations. | `blockanim-slide-up-400`                    |
| `blockanim-{animation}-{repeat}`             | Optional        | Repeats the animation each time the element is visible in the viewport.         | `blockanim-slide-up-400-repeat`             |

## License

This project is licensed under the MIT License. Feel free to use it in your commercial projects!
