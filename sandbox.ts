// // reading files
// const decoder: TextDecoder = new TextDecoder('utf-8');
// const data = await Deno.readFile("data.txt");
// console.log(decoder.decode(data));

const data:string = await Deno.readTextFile("data.txt")
console.log(data)

// writing files
const encoder: TextEncoder = new TextEncoder();
const text: Uint8Array = encoder.encode('helloooooooooooooooooooo here we go')
await Deno.writeFile('data2.txt', text)

// rename file 
await Deno.rename('data2.txt', 'novaData.txt');
await Deno.remove('novaData.txt');

//fetching data
const res = await fetch('https://swapi.dev/api/films/');
const resJson =  await res.json();
console.log(resJson);

// Usando modulo uuid
import { v4 } from 'https://deno.land/std/uuid/mod.ts'

const uid = v4.generate();
console.log(uid);

// Usando server
import { serve } from "https://deno.land/std@0.153.0/http/server.ts";
serve((_req) => new Response("Hello, world"), { port: 3000 });