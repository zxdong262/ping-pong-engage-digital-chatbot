/**
 * exmaple ping-pong bot file
 * reply to ping with pong
 */

const cheerio = require('cheerio')
const _ = require('lodash')

exports.name = 'ping-pong bot'

exports.description = 'Simple example engage digital chatbot that will repond with "pong" to message "ping"'

exports.homepage = 'https://github.com/zxdong262/ping-pong-engage-digital-chatbot'

function isPing (event) {
  let $ = cheerio.load(_.get(event, 'resource.metadata.body'))
  let txt = $('body').text().trim()
  console.log('txt:', txt)
  return txt.includes('ping')
}

function isTwitterMention (event) {
  let type = _.get(event, 'resource.type')
  if (type !== 'twtr/tweet') {
    return false
  }
  let $ = cheerio.load(_.get(event, 'resource.metadata.body'))
  let txt = $('body').text().trim()
  return /@[\d\w]+/.test(txt)
}

function isSelf (event) {
  return _.get(event, 'resource.metadata.status') === 'user_initiated'
}

exports.onEvent = async ({
  event,
  client,
  handled // hanlded by prev skills
}) => {
  if (handled) {
    return
  }
  console.log(event)
  if (!isSelf(event) && isPing(event)) {
    let res = {
      body: 'pong'
    }
    if (isTwitterMention(event)) {
      res.private = 1
    }
    await client.reply(event, res)
    return true
  }
}
