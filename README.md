# vue-admin-flask-example

>[vue-admin](https://github.com/taylorchen709/vue-admin)和flask前后端分离的小例子

## 本地预览

>按照下面命令
等待浏览器打开 http://localhost:8080

```
D:\Github\vue-admin-flask-example
$ npm install
D:\Github\vue-admin-flask-example
$ virtualenv venv

//进入venv\Scripts目录
D:\Github\vue-admin-flask-example\venv\Scripts
$ activate
D:\Github\vue-admin-flask-example
(venv) $ pip install -r requirements.txt
D:\Github\vue-admin-flask-example
(venv) $ python manage.py

//开启另一个终端
D:\Github\vue-admin-flask-example
$ npm run dev
```

## API汇总：

### 登录

```
var params = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };

export const requestLogin = params => {
    return axios({
        method: 'POST',
        url: `${base}/login`,
        auth: params
    })
    .then(res => res.data);
};

return jsonify({'code': 200, 'msg': "登录成功", 'token': token.decode('ascii'), 'name': g.admin.name})
```

### 修改密码

```
let params = Object.assign({}, this.setpwdForm);

export const setpwd = params => {
    return axios.post(`${base}/setpwd`, params);
};

return jsonify({'code': 200, 'msg': "密码修改成功"})
```

### 用户获取

```
let params = { page: this.page, name: this.filters.name };

export const getUserListPage = params => {
    return axios.get(`${base}/users/listpage`, { params: params });
};

return jsonify({
        'code': 200,
        'total': total,
        'page_size': page_size,
        'infos': [u.to_dict() for u in Infos]
    })
```

### 删除用户

```
let params = { id: row.id };

export const removeUser = params => {
    return axios.get(`${base}/user/remove`, { params: params });
};

return jsonify({'code': 200, 'msg': "删除成功"})
```

### 批量删除

```
let para = { ids: ids };

export const batchRemoveUser = params => {
    return axios.get(`${base}/user/bathremove`, { params: params });
};

return jsonify({'code': 200, 'msg': "删除成功"})
```

### 获取柱状图数据

```
export const getdrawPieChart = () => {
    return axios.get(`${base}/getdrawPieChart`);
};

return jsonify({'code': 200, 'profess_value': profess_value, 'grade_value': grade_value, 'grade_data': grade_data})
```

### 获取饼状图数据

```
export const getdrawLineChart = () => {
    return axios.get(`${base}/getdrawLineChart`);
};

return jsonify({'code': 200, 'value': data_value, 'total': total})
```

![vue](https://s1.ax1x.com/2018/02/10/9GuZ8g.png)
![vue2](https://s1.ax1x.com/2018/02/10/9GuVPS.png)

PS:(很多错误响应的api没处理,不影响正常操作)