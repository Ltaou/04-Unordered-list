const listItem = (content) => {
  return `<li class="list-group-item">${content}</li>`;
  // TODO: return the proper <li> HTML tag with its content (as a string)
};

const unorderedList = (items) => {
  return `<ul class="list-group">${items}</ul>`== `<ul class="list-group">${items}<li class="list-group-item">${items}</li><li class="list-group-item">${items}</li></ul>`;
  // TODO: return the proper <ul> markup (as a string)
};

module.exports = { listItem, unorderedList }; // Do not remove.
