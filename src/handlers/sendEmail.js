import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'eu-west-1' });

async function sendEmail(event, context) {
  const params = {
    Source: 'sn.itpro@gmail.com',
    Destination: {
      ToAddresses: ['sn.itpro@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from Sébastien',
        },
      },
      Subject: {
        Data: 'Test email',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const handler = sendEmail;


