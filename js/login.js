function login(){
    document.getElementById('loginForm').addEventListener('submit', function(event){
        event.preventDefault();

        const formData = {
            username: document.getElementById('userid1').value,
            password: document.getElementById('pwd1').value
        };
        console.log(formData);

        // 替换成你的 FastAPI 后端的 URL
        const loginUrl = 'http://124.71.65.28:7777/api/v1/admin/user/user_add';

        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // let res = response.json();
            // console.log(res)
            // console.log(response.headers)
            return response.json();
        })

        .then(data1 => {
            const username = data1;
            console.log('username:', username);
            
            console.log('Success:', data1);
            console.log(data1.code);
            if (data1.code=='200') {
                alert('欢迎进入一夜终极狼人杀')
                window.location.href='game.html';
                window.event.returnValue=false;
            }
            else{
                alert('密码错误')
            }
            //这里可以添加登录成功后的逻辑，比如跳转到另一个页面

        } )

        .catch(error => {
            console.error('Error:', error);
            // 这里可以添加错误处理逻辑，比如显示错误消息
        });
    });
}