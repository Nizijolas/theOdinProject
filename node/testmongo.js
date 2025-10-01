import fs from "node:fs";
//sans acollade quand export par défault

var content = "Et voila\n";


fs.appendFile('./hey', content, { flag: 'a' },

    err => {
        if (err) {
            console.error(err);
        }
        else {
            console.log("Success ! ");
        }
    }
);
