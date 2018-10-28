## Requirements

Add Application setting:

    WEBSITE_NODE_DEFAULT_VERSION 8.11.1

Go to Kudu and run:

    npm install


## APIs

GET:

    curl <websitehost>
    curl <websitehost>/get?name=jery

POST:

    curl -d "name=jery&password=123456" <websitehost>/post
