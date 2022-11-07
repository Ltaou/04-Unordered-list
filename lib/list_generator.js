const listItem = (content) => {
  return `<li class="list-group-item">${content}</li>`;
  // TODO: return the proper <li> HTML tag with its content (as a string)
};

const unorderedList = (items) => {
  const content = items.map(item => listItem(item)).join('\n  ');
  return `<ul class="list-group">${content}</ul>`;
  // TODO: return the proper <ul> markup (as a string)
};

module.exports = { listItem, unorderedList }; // Do not remove.
