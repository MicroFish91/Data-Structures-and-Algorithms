class TrieNode {
  public letters: { [letter: string]: TrieNode };
  public endOfWord: boolean;

  constructor() {
    this.letters = {};
    this.endOfWord = false;
  }
}

class Trie {
  public root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];

      if (!current.letters[letter]) {
        current.letters[letter] = new TrieNode();
      }

      current = current.letters[letter];
    }

    current.endOfWord = true;
  }

  contains(word: string): boolean {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];

      if (!current.letters[letter]) {
        return false;
      }

      current = current.letters[letter];
    }

    return current.endOfWord;
  }

  listAll(): string[] {
    const list = [];

    buildWord("", this.root, null);

    function buildWord(
      currentWord: string,
      currentNode: TrieNode,
      letter: string
    ) {
      if (letter) {
        currentWord += letter;
        currentNode = currentNode.letters[letter];

        if (currentNode.endOfWord) {
          list.push(currentWord);
        }
      }

      const keys = Object.keys(currentNode.letters);

      for (let i = 0; i < keys.length; i++) {
        const newLetter = keys[i];
        buildWord(currentWord, currentNode, newLetter);
      }
    }

    return list;
  }
}

const trie = new Trie();

trie.insert("hello");
trie.insert("hell");
trie.insert("apple");

console.log(trie.listAll());
