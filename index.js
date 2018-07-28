import fs from "fs";
import path from "path";
import del from "del";
import mkdirp from "mkdirp";
import pug from "pug";
import "@babel/polyfill";
import data from "./data.json";

const generateFiles = async () => {
  const dirname = path.resolve(__dirname, "dest");
  await del(`${dirname}/**`);
  console.log("cleaned", dirname);
  data.files.forEach(file => {
    mkdirp(dirname, err => {
      if (err) {
        console.error(err);
      }

      const html = pug.compileFile("./template.pug", {pretty: true});
      fs.writeFile(
        `./dest/${file.name}_${file.id}.html`,
        html({...file}),
        {
          encoding: "utf8",
        },
        error => {
          if (err) {
            console.error(error);
          }
        },
      );
    });
  });
};

generateFiles();
