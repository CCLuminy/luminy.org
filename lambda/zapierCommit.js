
const Octokit = require('@octokit/rest'),
    owner = 'CCLuminy',
    repo = 'luminy.org';
    branch = 'content'

exports.handler = async (event, context, callback) => {
    try {
        const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
        if (!event.body) {
            return {
                statusCode: 500,
                body: 'rien dans event.body'
            };
        }
        const body = JSON.parse(event.body);
        const newItem = {};
        newItem.link = body.link;
        newItem.message = body.message;
        newItem.picture = body.picture;
        if (!newItem.link) {
            return {
                statusCode: 500,
                body: 'pas de link'
            };
        }
        if (!newItem.message) {
            return {
                statusCode: 500,
                body: 'pas de message'
            };
        }
        if (!newItem.picture) {
            return {
                statusCode: 500,
                body: 'pas de picture'
            };
        }
        let path = '_pages/agenda.md';
        return octokit.repos
            .getContents({
                owner,
                repo,
                path,
                branch
            })
            .then((res) => {
                console.log(res);
                let buff = Buffer.from(res.data.content, 'base64');
                let pageRaw = buff.toString('utf-8');
                // let linksJSON = JSON.parse(linksRaw);
                let message = 'Nouveau post facebook';
                let content = '';
                let sha = res.data.sha;
                // linksJSON.links.push(newItem);
                // linksRaw = JSON.stringify(linksJSON);
                buff = Buffer.from(pageRaw + newItem.link + '\n');
                content = buff.toString('base64');
                return octokit.repos
                    .createOrUpdateFile({
                        owner,
                        repo,
                        path,
                        message,
                        content,
                        sha,
                        branch
                    })
                    .then((res) => {
                        return {
                            statusCode: 200,
                            body: '{"success":"true"}'
                        };
                    });
            });
    } catch (err) {
        [];
        return { statusCode: 500, body: err.toString() };
    }
};
