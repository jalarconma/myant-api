import axios from 'axios'
import { Request, Response, NextFunction } from 'express';

const authentication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const COGNITO_URL = `https://cognito-idp.${process.env.AWS_COGNITO_PROJECT_REGION}.amazonaws.com/`;

    if (req.headers.authorization === undefined) {
      throw new Error("No authorization header");
    }

    const accessToken = req.headers.authorization.split(" ")[1];

    const { data } = await axios.post(
      COGNITO_URL,
      {
        AccessToken: accessToken
      },
      {
        headers: {
          "Content-Type": "application/x-amz-json-1.1",
          "X-Amz-Target": "AWSCognitoIdentityProviderService.GetUser"
        }
      }
    )

    //req.user = data;
    console.log("user info: ", data);
    next();
  } catch (error) {
    console.log("auth error: ", error);
    return res.status(401).json({
      message: 'Auth failed'
    });
  }
};

export default authentication;