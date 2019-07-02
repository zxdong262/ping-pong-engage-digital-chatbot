
# ping-pong-engage-digital-chatbot

Simple example engage digital chatbot that will repond with 'pong' to message 'ping', created with [RingCentral engage Digital chatbot framwork](https://github.com/ringcentral/engage-digital-chatbot-js).

## Youtube video

[https://youtu.be/HDDGUFIzNxQ](https://youtu.be/HDDGUFIzNxQ)

## Quick start

Let's start a simple chatbot server.

```bash
# get the code
git clone git@github.com:zxdong262/ping-pong-engage-digital-chatbot.git
cd ping-pong-engage-digital-chatbot

# install dependecies
npm i

# start proxy server, this will make your local bot server can be accessed by RingCentral service
npm run ngrok

# will show
Forwarding                    https://xxxx.ap.ngrok.io -> localhost:4100
# Remember the https://xxxx.ap.ngrok.io, we will use it later
```

Follow [steps to prepare email source and webhook for chatbot](https://github.com/ringcentral/ringcentral-engage-chatbot-js/blob/master/docs/prepare-email-source-and-webhook.md) to prepare the email source and webhook.

```bash
# create env file
cp .env.sample .env
# then edit .env, set proper setting according to the tip in .env

# run local dev server
npm start

```

### Test bot

- Send a email with "ping" to your predefined email source address, then bot will auto reply with `pong`.
- You may edit `src/server/index.js` to set your own reply logic.

## Build

```bash
npm run build
```

## Run production code

```bash
# after npm run build
npx ringcentral-engage-chatbot dist/server/index.js
```

## Build and deploy to AWS Lambda

[https://github.com/ringcentral/ringcentral-engage-chatbot-js/blob/master/docs/deploy-to-lambda.md](https://github.com/ringcentral/ringcentral-engage-chatbot-js/blob/master/docs/deploy-to-lambda.md)

## License

MIT
