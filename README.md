# Github Search

## Install

1. Install serverless:
```bash
npm install serverless -g
```

2. [Configure AWS credential for serverless](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

3. Install the needed dependencies:

```bash
npm install
cd src
npm install
cd ..
serverless deploy
```

4. Set the github personal access token in `serverless.yml`:3

5. Update the endpoint in `vue/main.js`:13 with the created endpoint

6. Sync the files to S3
```bash
serverless s3sync
```
