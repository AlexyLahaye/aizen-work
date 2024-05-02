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

export async function LoadPost() {
  return fetch('https://dummyjson.com/posts?limit=18')
    .then(res => res.json())
    .then(data => {return data.posts});
}

export default {};