const { exec } = require('child_process')
const { join } = require('path')
const fs = require('fs')
const { log, error } = console

const fromNodeModules = join(__dirname, 'node_modules')

const targetBaseFolder = 'dist'
const targetNodeModules = join(
  __dirname,
  '..',
  targetBaseFolder,
  'node_modules'
)

const execPromise = cmd =>
  new Promise((resolve, reject) => {
    const cmdProg = exec(cmd)

    cmdProg.stdout.on('data', data => log(data))
    cmdProg.stderr.on('data', data => error(data))

    cmdProg.on('close', resolve)
    cmdProg.on('error', reject)
  })

execPromise(`mkdir -p ../${targetBaseFolder}`)
  .then(() => {
    log('dist folder ok')
    return execPromise(
      `rsync -auP --exclude=node_modules/ --exclude=.git/ ./ ../${targetBaseFolder}/`
    )
  })
  .then(() => {
    log('cp files ok')
    if (fs.existsSync(targetNodeModules)) {
      log('already has node_modules link')
    } else {
      return execPromise(`ln -s ${fromNodeModules} ${targetNodeModules}`)
    }
  })
  .then(() => {
    log('symbol link [node_modules] done')
  })
  .catch(err => {
    throw err
  })
