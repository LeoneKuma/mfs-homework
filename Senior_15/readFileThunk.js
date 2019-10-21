
    const fs = require('fs');
    function readFileThunk() {
        var args = new Array(arguments.length);
        var ctx = this;
        for (var i = 0; i < args.length; ++i) {
            args[i] = arguments[i];
        }
        return function (done) {
            var called;

            args.push(function () {
                if (called) return;
                called = true;
                done.apply(null, arguments);
            });

            try {
                fs.readFile.apply(ctx, args);
            } catch (err) {
                done(err);
            }

        }
    }
    // fs.readFile("./data.js",(err,data)=>{console.log(data);});
    readFileThunk("./data.js")((err,data)=>{console.log(data);});
    

