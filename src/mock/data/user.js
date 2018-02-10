import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    grade: Mock.Random.integer(0,2100),
    phone: Mock.Random.integer(13100000000,13199999999),
    email: '328588917@qq.com',
    group: '后端前端',
    power: Mock.Random.cparagraph(),
    pub_data: Mock.Random.date()
  }));
}

export { LoginUsers, Users };
