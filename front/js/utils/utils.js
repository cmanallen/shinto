/**
 * Generic utility file
 */

Array.prototype.swap = function(a, b) {
	this[a-1]['position'] = b;
	this[b-1]['position'] = a;
}