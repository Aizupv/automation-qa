const { default: axios } = require("axios");


describe('GET request test', () => {
    test('Status code is 200 ', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        expect(response.status).toEqual(200)

    })

    test('Number of posts = 100', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const posts = response.data;
        expect(posts).toHaveLength(100)

    })

    test('Get first post and verify', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        const post = response.data;
        expect(post.userId).toBe(1)
        expect(post.id).toBe(1)
        expect(post.title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
        expect(post.body).toContain("quia et suscipit\nsuscipit")
    })
})

describe('POST request test', () => {
    test('Post +1 new post and verify', async () => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'New one post',
            body: 'It`s new one post with full description',
            userId: 2
        })
        const postData = response.data
        expect(response.status).toBe(201)
        expect(postData.id).toBeGreaterThan(100)
        expect(postData.userId).toEqual(response.data.userId)
        expect(postData.body).toEqual(response.data.body)
        console.log(postData)
    })
})