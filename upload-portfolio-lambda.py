from __future__ import print_function
import boto3
import StringIO
import zipfile
import mimetypes

print('Loading function')


def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:eu-west-2:587769541530:deployPortfolioTopic')

    try:
        s3 = boto3.resource('s3')

        portfolio_bucket = s3.Bucket('portfolio.djc.cloud')
        build_bucket = s3.Bucket('portfoliobuild.djc.cloud')

        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm,
                    ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print ("Job Done!")
        topic.publish(Subject="porfolio deploy success", Message="portfolio deployed successfully")
    except:
        topic.publish(Subject="portfolio deploy failure", Message="portfolio not deployed successfully")
        raise
    return "It Worked"
## function = lambda_function.lambda_handler
