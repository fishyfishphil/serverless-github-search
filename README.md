# Github Search

## Install

1. Install serverless:
```bash
npm install serverless -g
```

2. [Configure AWS credential for serverless](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

3. Set the github personal access token in `serverless.yml`:3

4. Install the needed dependencies:

```bash
npm install
cd src
npm install
cd ..
```

5. Deploy the app:
```bash
serverless deploy
```

6. Update the endpoint in `vue/main.js`:13 with the created endpoint

7. Sync the files to S3
```bash
serverless s3sync
```
8. Go get the S3 bucket public URL from the AWS console.