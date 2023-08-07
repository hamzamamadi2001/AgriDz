import clientPromise from '../../../helper/mongo';
import { NextResponse } from 'next/server'

export async function GET(req) {

   const { searchParams } = new URL(req.url)
  const wilaya = searchParams.get('wilaya')
  const type = searchParams.get('type')
  const name = searchParams.get('name')

   console.log(wilaya,type,name)
   try {
    const client = await clientPromise;
    const db = client.db("HamzaTest");
if(wilaya == "كل الولايات"){
const movies = await db
        .collection("movies").find({type: { $eq: type },name: { $eq: name }}).toArray()

    console.log(movies)
         

        return NextResponse.json(movies)
}
else{
  const movies = await db
        .collection("movies").find({wilaya: { $eq: wilaya },type: { $eq: type },name: { $eq: name }}).toArray()

    console.log(movies)
         

        return NextResponse.json(movies)
}

  
  
 
    
     

} catch (e) {
    console.error(e);
}
  
  
    
  }
 
