import React from "react";
import AWS from 'aws-sdk';
import * as Env from "../../environment";

export const downloadImage = (imageLinks) => {
    var albumBucketName = Env.S3_BUCKET;
    var bucketRegion = Env.REGION;
    var IdentityPoolId = Env.AWS_IDPOOL;

    AWS.config.update({
        region: bucketRegion,
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: IdentityPoolId
        })
    });

    const s3 = new AWS.S3();

    var download = s3.getObject({
        Bucket: albumBucketName,
        Key: imageLinks,
    });

    return download.promise();
}