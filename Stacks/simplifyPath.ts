function simplifyPath(s: string): string {
  const stack = [];
  const upLevelStack = [];
  let pathString = "";
  let finalPath = "";

  // Build Stack
  for (let i = 0; i < s.length; i++) {
    const text = s[i];

    if (text === "/") {
      if (pathString.length) stack.push(pathString);

      pathString = "";
    } else {
      pathString += text;
    }
  }

  if (pathString.length) stack.push(pathString);

  // Rebuild Path
  while (stack.length) {
    const path = stack.pop();

    switch (path) {
      // /home/foo  ..
      case "..":
        upLevelStack.push("..");
        break;
      case ".":
        break;
      default:
        finalPath = "/" + path + finalPath;

        if (upLevelStack.length) {
          finalPath = removeLastPath(finalPath);
          upLevelStack.pop();
        }
    }
  }

  return finalPath || "/";
}

function removeLastPath(s: string): string {
  let idx;

  for (let i = s.length - 1; i >= 0; i--) {
    const txt = s[i];

    if (txt === "/") {
      idx = i;
      break;
    }
  }

  return s.slice(0, idx);
}

// Brainstorm

// => Use a stack to store the locations between "/"
// => Loop through once to build stack O(n)
// => Pop off the stack and rebuild the the path

// => ".." codes to go back
// => "." do nothing

// "/home"
console.log(simplifyPath("/home/"));

// "/"
console.log(simplifyPath("/../"));

// "/home/foo"
console.log(simplifyPath("/home//foo"));
