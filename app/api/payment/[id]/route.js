export const GET = (_, { params }) =>
  Response.json({ message: `GET Success ${params.id}` });

export const POST = (_, { params }) =>
  Response.json({ message: `POST Success ${params.id}` });
