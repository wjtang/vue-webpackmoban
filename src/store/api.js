 import axios from 'axios'
 import Qs from 'qs'
 const HOST = 'http://localhost:8002'
 const testdata = {id:0,text:'123'}
 export function fetchget(url) {
 	return new Promise((resolve,reject) =>{
 		axios.get(HOST + url)
 		.then(response => {
          resolve(response.data);
        })
 	})
 }
 export function fetchpost(url){
 	 return new Promise((resolve,reject) => {
 	 	axios.post((HOST + url),Qs.stringify(testdata))
 	 	.then(response =>{
           resolve(response.data);
 	 	})
 	 })
 }