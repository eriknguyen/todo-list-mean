'use strict';

import mongoose from 'mongoose';

var Schema = mongoose.Schema;

/**
 * Todo Schema
 */
var TodoSchema = new Schema({
	title: String,
	completed: Boolean,
	createdAt: Date,
	updatedAt: Date,
	test: Boolean
});

// keep track of when todos are updated and created
TodoSchema.pre('save', function(next, done) {
	if (this.isNew) {
		this.createdAt = Date.now();
	}
	this.updatedAt = Date.now();
	next();
});

export default mongoose.model('Todo', TodoSchema);
