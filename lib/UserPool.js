// UserPool.js
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'eu-north-1_l5Qf8QPGL', // Replace with your User Pool ID
  ClientId: '10lb71klvc58oak732emm3qurm', // Replace with your App Client ID
};

const userPool = new CognitoUserPool(poolData);

export default userPool;