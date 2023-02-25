export const handler = async(event) => {
    const result = "Thanks for Visiting to Pradip Nemane Website  says "+ event.queryStringParameters.keyword
   const response = {
       statusCode: 200,
       body: JSON.stringify(result),
   };
   return response;
};