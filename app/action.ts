"use server"
 export const FetchAnime = async ( page: number ) =>{
    const resopns = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)
    const data = await resopns.json();
    console.log(data)
    return data
 }