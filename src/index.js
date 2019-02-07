const { GraphQLClient } = require('graphql-request')
const serverless = require('serverless-http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
app.post('/find', function (req, res) {
    returnPullRequests(req.body.user).then(response => {
        res.set('Access-Control-Allow-Origin', '*')
        res.json(response)
    })
})

module.exports.handler = serverless(app);


async function returnPullRequests(user) {
    const queryString = `
    {
        user(login: "${user}") {
          pullRequests(first: 100) {
            edges {
                node {
                    repository {
                        nameWithOwner
                    }
                    title
                    url
                    createdAt
                    additions
                    deletions
                    changedFiles
                  }
            }
          }
        }
      }
  `

    const returned = await sendGraphQL(queryString)

    return await filterPullRequests(returned)
}

function filterPullRequests(returned) {
    const rawPullRequests = returned.user.pullRequests.edges
    let pullRequests = []

    for (pullRequest of rawPullRequests) {
        pullRequests.push(pullRequest.node)
    }

    pullRequests.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt)
    })

    return pullRequests
}

async function sendGraphQL(queryString) {

    const endpoint = 'https://api.github.com/graphql'

    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
    })

    return await graphQLClient.request(queryString)
}