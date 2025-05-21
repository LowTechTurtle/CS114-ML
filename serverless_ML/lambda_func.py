import os
import io
import boto3
import json
import csv

# Grab environment variables
ENDPOINT_NAME = os.environ['ENDPOINT_NAME']
runtime= boto3.client('runtime.sagemaker')

def lambda_handler(event, context):
    print("Received event: " + json.dumps(event, indent=2))
    
    # Expecting request as a python dictionary with {"data" : sample} format
    payload = event['data']
    print(payload)
    
    response = runtime.invoke_endpoint(EndpointName=ENDPOINT_NAME,
                                       Body=payload,
                                       ContentType="text/csv"
                                       )
    print(response)
    result = response["Body"].read().decode("utf-8")
    print(result)
    pred = int(float(result))
    predicted_label = (f'Prediction score : {float(result)}, Prediction : Fraud' if pred == 1
                      else f'Prediction score : {float(result)}, Prediction : Not-Fraud'
                      )
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "https://d3t66p1ihxmak5.cloudfront.net",  # Replace * with your domain if needed
            "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods": "OPTIONS,POST"
        },
        "body": json.dumps({ "response": predicted_label })
    }

