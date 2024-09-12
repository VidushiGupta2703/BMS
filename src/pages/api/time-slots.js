// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
}

const a = [{id: 10, name: '10pm'}, {id: 7, name: '7pm'}, {id: '10a', name: '10am'}, {id: 12, name: '12pm'}]
export default function handler(req, res) {
    res.status(200).json(a);
}
