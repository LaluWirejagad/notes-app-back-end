const handlers = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: handlers.addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: handlers.getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handlers.getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handlers.editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handlers.deleteNoteByIdHandler,
  },
];

module.exports = routes;
