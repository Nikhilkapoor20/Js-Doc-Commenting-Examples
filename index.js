// @desc or @description Example

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @description Add two numbers.
 */
function add(a, b) {
    return a + b;
}

// @name ,@memberof, @function, @instance

  /**
   * @name Car
   * @constructor
   */
function Car() {
    /**
     * @name mytyres
     * @memberof Car
     * @function
     * @instance
     */
    this.mytyres = function () {
        /* nothing here */
    };
}

// @function example

/** @function bar */
function foo () {
    this.baz = 1;
}