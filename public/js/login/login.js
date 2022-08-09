const $user1 = document.getElementById('user1')
const $user2 = document.getElementById('user2')

const userTest = user => {
    document.getElementById('username').value = user.innerText
    document.getElementById('password').value = 123456
}

$user1.addEventListener('click', () => userTest($user1))
$user2.addEventListener('click', () => userTest($user2))
