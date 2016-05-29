/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/todos              ->  index
 * POST    /api/todos              ->  create
 * GET     /api/todos/:id          ->  show
 * PUT     /api/todos/:id          ->  update
 * DELETE  /api/todos/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Todo from './todo.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Finds a Todo by ID and store it in the request
export function todo(req, res, next, id) {
  Todo.findById(id, function(err, todo) {
    if (err) return next(err);
    if (!todo) return next(new Error('Failed to load todo ' + id));
    req.todo = todo;
    next();
  });
}

// Query a list of Todos
export function query(req, res) {
  Todo.find().sort('-createdAt').exec(function(err, todos) {
    if (err) return res.json(500, err);
    res.json(todos);
  });
}

// Gets a list of Todos
export function index(req, res) {
  /*return Todo.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));*/
}

// Gets a single Todo from the DB
export function show(req, res) {
  /*return Todo.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));*/
  res.json(req.todo);
}

// Creates a new Todo in the DB
export function create(req, res) {
  /*return Todo.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));*/
  var todo = new Todo(req.body);

  todo.save(function(err) {
    if (err) return res.json(500, err);
    res.json(todo);
  });
}

// Updates an existing Todo in the DB
export function update(req, res) {
  /*if (req.body._id) {
    delete req.body._id;
  }
  return Todo.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));*/
  Todo.update({
    _id: req.todo._id
  }, req.body, {}, function(err, updatedTodo) {
    if (err) return res.json(500, err);
    res.json(updatedTodo);
  });

}

// Remove a Todo
export function remove(req, res) {
  var todo = req.todo;

  todo.remove(function(err) {
    if (err) return res.json(500, err);
    res.json(todo);
  });
}

// Deletes a Todo from the DB
export function destroy(req, res) {
  return Todo.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}