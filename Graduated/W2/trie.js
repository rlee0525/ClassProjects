// space complexity
// n * 26 ^ n => 26 ^ n
class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in currentNode)) {
        currentNode[word[i]] = {};
      }

      currentNode = currentNode[word[i]];
    }
  }
}

let dictionary = new Trie();
dictionary.insert("hello");
dictionary.insert("helie");
console.log(dictionary.root["h"]["e"]);