A simple example Node file generator that can generate a list of files from data in a json file.

TODO: CLI Tool

```bash
Data file not detected. Set data file:
-- Select from project files
-- Create new

Select data format:
-- CSV
-- JSON (default)
-- YAML

New data file generated in `data` directory.

Template not detected. Set template:
-- Select from project files
-- Create new

Select templating language:
-- EJS
-- Handlebars (default)
-- Pug
-- Mustache

Set a name format for the output files:
(Example: [name]/[name]_[id]. Properties must exist for each entry in the data file for interpolation. If a string is provided for the filename, the outputted files will be suffixed with an integer by default).

Set an extension.
(Example: html)

New template generated in `template` directory.

Data file set to `./data/data.json`.
Template file set to `./template/[name]/[name]_[id].hbs`.
Extension set to `html`.

Change settings?
-- Yes
-- No (default)

Which do you want to reset?
-- data file
-- template
-- extension

Generate static files in `dest` directory?
-- Yes (default)
-- Later
```
