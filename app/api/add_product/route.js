import clientPromise from '../../../helper/mongo';
export async function POST(req,res) {
   const data = await req.json()
   console.log(data)


  try {
    const client = await clientPromise;
    const db = client.db("HamzaTest");
 
    const movies = await db
        .collection("movies").insertOne(data, (error, result) => {
          if (error) {
            console.log('Error saving array:', error);
          } else {
            console.log('Array saved successfully:', result);
          }
        })
         

    return new Response({result :movies});
     

} catch (e) {
    console.error(e);
}
  
  return "good"
    
  }
 
