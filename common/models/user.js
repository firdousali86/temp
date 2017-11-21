"use strict";

module.exports = function(User) {
  User.greet = function(msg, cb) {
    cb(null, "Greetings... " + msg);
  };

  User.remoteMethod("greet", {
    accepts: { arg: "msg", type: "string" },
    returns: { arg: "greeting", type: "string" }
  });

  User.beforeRemote("**", function(ctx, user, next) {
    console.log(ctx.methodString, "was invoked remotely"); // customers.prototype.save was invoked remotely
    next();
  });
};
