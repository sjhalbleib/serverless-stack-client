const config = {
  STRIPE_KEY: "pk_test_51HuAFIBLPRR0Do7XHo7dnL2hUmLM4kgTD7mJ9es3OypyUe7aG6v6bHTaSGas8FsHv7IN7BSmuyLzd45pHb7YwQPV00Wn7VdXjX",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "arn:aws:s3:::serverlessstacknotesbucket",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://pk3rgv7yfl.execute-api.us-east-2.amazonaws.com/prod/notes",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_hLgbSNtwV",
    APP_CLIENT_ID: "732c4fau146sqfik34ei7qqgsr",
    IDENTITY_POOL_ID: "SeanServerlessStackNotesApp",
  },
};

export default config;