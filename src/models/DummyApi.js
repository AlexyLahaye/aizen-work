//**********************      LOGIN PART        ***************************/

export async function LoginApi(username, password) {
  return fetch('https://dummyjson.com/auth/login', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
  //'kminchelle','0lelplR'
  username: username,
  password: password,
  expiresInMins: 60,
})
})
.then(res => res.json())
.then(data => {return data});
}

//**********************      POSTS PART        ***************************/

export async function LoadPost() {
  return fetch('https://dummyjson.com/posts?limit=18')
    .then(res => res.json())
    .then(data => {return data.posts});
}

export async function AddPost(title, body){
  return fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: {title},
    body: {body},
    userId: 5,
  })
})
.then(res => res.json())
.then(console.log);
} 

export async function UpdatePost(idPost, title, body){
  fetch('https://dummyjson.com/posts/'+ idPost, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: title,
    body: body
  })
})
.then(res => res.json())
.then(console.log);
}

export async function DeletePost(idPost){
  return fetch('https://dummyjson.com/posts/'+ idPost, {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);
}

//******************          COMMENTS PART        ***************************/

export async function getAllComByIdPost(id){
  return fetch('https://dummyjson.com/comments/post/'+ id)
    .then(res => res.json())
    .then(data => {if(data.comments !== undefined) {return data.comments}});
}

export default {};