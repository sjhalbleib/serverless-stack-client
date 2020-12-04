const config = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-api-prod-serverlessdeploymentbucket-zr4b4egb9p1s/serverless/notes-api/prod/1606951525115-2020-12-02T23:25:25.115Z/",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://pk3rgv7yfl.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2:d5950aff-1aa4-49ff-94c3-20d92935a9f8",
    APP_CLIENT_ID: "732c4fau146sqfik34ei7qqgsr",
    IDENTITY_POOL_ID: "SeanServerlessStackNotesApp",
  },
};

export default config;