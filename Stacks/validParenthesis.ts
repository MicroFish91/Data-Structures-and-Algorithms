function validParenthesis(s: string): boolean {
  const stack = [];
  const open = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const close = new Set(["}", ")", "]"]);

  for (let i = 0; i < s.length; i++) {
    const elem = s[i];

    if (elem in open) {
      stack.push(elem);
    }

    if (close.has(elem)) {
      const lastIn = stack.pop();

      if (open[lastIn] !== elem) {
        return false;
      }
    }
  }

  return stack.length ? false : true;
}

// false
console.log(validParenthesis("()[{}}"));
// true
console.log(validParenthesis("()[{}]"));
