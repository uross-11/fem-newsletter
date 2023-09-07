# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive mail a few minutes after succesfully submitting the form

### Screenshot

![desktop-preview](https://github.com/uross-11/fem-newsletter/assets/71189996/515ec131-b30a-4f5e-8eac-73195949179b)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/newsletter-form-that-actually-works-with-mailchimp-api-3wIbGCZQd5](https://www.frontendmentor.io/solutions/newsletter-form-that-actually-works-with-mailchimp-api-3wIbGCZQd5)
- Live Site URL: [https://fem-newsletter-navy.vercel.app/](https://fem-newsletter-navy.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chakra UI](https://chakra-ui.com/)
- [react-hook-form](https://www.react-hook-form.com/)
- [yup](https://github.com/jquense/yup)

### What I learned

- [Mailchimp API](https://mailchimp.com/developer/marketing/api/)
- Next.js:
  - You can have [API Routes](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#api-routes) in your Next.js app and abstract all the request/response fuzz away
  - [Loading page](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming) is straightforward and easy-to-use
- Chakra UI is really helpful, but if you want to customize it heavily, it will look something like this:

```jsx
<Link
  href="/"
  display="flex"
  justifyContent="center"
  alignItems="center"
  position="relative"
  borderRadius="0.5rem"
  h="3.5rem"
  mt="auto"
  mb={{ base: "10", lg: "unset" }}
  _hover={{
    _before: { opacity: 0 },
    boxShadow: "0px 16px 32px 0px rgba(255, 97, 85, 0.50)",
  }}
  _focusVisible={{
    _before: { opacity: 0 },
    boxShadow: "0px 16px 32px 0px rgba(255, 97, 85, 0.50)",
  }}
  bgGradient="linear(to-b, #FF6A3A 0%, #FF527B 100%)"
  overflow="hidden"
  _before={{
    position: "absolute",
    content: `""`,
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    bg: "fem.darkSlateGrey",
    transition: "220ms",
  }}
  _active={{
    _before: { opacity: 0 },
  }}
  color="white"
  w="full"
></Link>
```
