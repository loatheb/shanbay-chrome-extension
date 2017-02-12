export $$ = document.querySelectorAll.bind(document);

export $ = document.querySelector.bind(document);

export slice = Function.prototype.apply.bind(Array.prototype.slice);
