export const $$ = document.querySelectorAll.bind(document);

export const $ = document.querySelector.bind(document);

export const slice = Function.prototype.apply.bind(Array.prototype.slice);
