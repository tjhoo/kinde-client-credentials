## Before Kinde

1. Define environment variables in `.env.local`

   ```
   KINDE_SITE_URL=http://localhost:3000
   ```

1. Start Next.js in development mode

   ```
   $ npm run dev
   ```

1. Invoke the GET API request

   ```
   $ curl --request GET \
   --url $KINDE_SITE_URL/api/payment/100 \
   --header 'accept: application/json'
   {"message":"GET Success 100"}
   ```

1. Invoke the POST API request

   ```
   curl --request POST \
   --url $KINDE_SITE_URL/api/payment/379 \
   --header 'accept: application/json'
   {"message":"POST Success 379"}
   ```
