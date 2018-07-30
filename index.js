import fs from 'fs'
import path from 'path'
import '@babel/polyfill'
import inquirer from 'inquirer'
import del from 'del'
import mkdirp from 'mkdirp'
import pug from 'pug'

import data from './data.json'

inquirer
  .prompt([
    {
      type: 'list',
      name: 'data-source',
      message: 'Data file not detected. Set data file:',
      choices: ['Create new (default)', 'Select from project files'],
      default: 0,
    },
  ])
  .then((answers) => {
    if (answers['data-source'] === 'Create new (default)') {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'data-format',
          message: 'Select data format:',
          choices: ['CSV', 'JSON(default)', 'YAML'],
        },
      ])
    }
  })

const generateFiles = async () => {
  const dirname = path.resolve(__dirname, 'dest')
  await del(`${dirname}/**`)
  console.log('cleaned', dirname)
  data.files.forEach((file) => {
    mkdirp(dirname, (err) => {
      if (err) {
        console.error(err)
      }

      const html = pug.compileFile('./template.pug', { pretty: true })
      fs.writeFile(
        `./dest/${file.name}_${file.id}.html`,
        html({ ...file }),
        {
          encoding: 'utf8',
        },
        (error) => {
          if (err) {
            console.error(error)
          }
        },
      )
    })
  })
}
