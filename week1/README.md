# Week 1 - Computer Structure & Introduction to HTML

## HTML

HTML is used to organize information and display it as a web page. It is the markup language of the web!

## Lists

Discussed `<ul>` unordered lists, and `<ol>` ordered lists which can be used to stylize lists either with bullets or numbers

Talked about `<dl>` definition lists which can be used to stylize lists with a term and a definition.

## Tables

Discussed `<table>` tables, which can be used to stylize tables.

## Div and Span

`<div>` and `<span>` are container elements. They are basically boxes that can hold information or things. The main difference is that a `<div>` is a block element and a `<span>` is an inline element.

## Forms

`<from>` is a HTML element to collect input data. It provides facilities to input text, number, values, email, password, and control fields such as checkboxes, radio buttons, submits, buttons, etc.

## Iframes

An iFrame is an element that is useful for embeding abouther page within a page.

<details>
  <summary>Reason why Google cannot be embedded in an iframe</summary>

Google sets the HTTP response header `X-Frame-Options` to `SAMEORIGIN`.  
This means the page can only be displayed in a frame on the same domain as Google itself.  
As a result, if you try to embed it on another site using `<iframe>`, the browser blocks it for security reasons to prevent clickjacking attacks.

</details>

## Video $ Audio

Video and audio elements are used to embed videos and audio into a page.
