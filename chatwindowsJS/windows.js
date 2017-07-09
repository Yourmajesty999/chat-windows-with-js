//每条消息的发送时间
		function getTime() {
			var date = new Date();
			return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
		}

//第一个窗口的事件
		function getMesOne() {
			var msg = document.getElementById('input1').value;
//用DOM方法创建三个子元素（div用于管理消息、时间）
			var target_dome = document.createElement('div');
			var target_msg = document.createElement('p');
			var target_date = document.createElement('span');
//给每条消息添加一个class，在css里设置位置用到
			target_dome.classList.add('ip1');
//获取变量值
			target_msg.innerHTML = msg;
			target_date.innerHTML = getTime();
//div获取消息和时间
			target_dome.append(target_msg);
			target_dome.append(target_date);
//分别获取两个窗口的每条消息到聊天框口
			document.getElementById('chat1').appendChild(target_dome.cloneNode(true));
			document.getElementById('chat2').appendChild(target_dome.cloneNode(true));
//清空输入框消息
			document.getElementById('input1').value = '';
//（随着消息的增加）框口始终显示最新一条消息的位置
			chat1.scrollTop += 300;
		}

		function getMesTwo() {
			var msg = document.getElementById('input2').value;
			var target_dome = document.createElement('div');
			var target_msg = document.createElement('p');
			var target_date = document.createElement('span');
			target_dome.classList.add('ip2');
			target_dome.innerHTML = msg;
			target_date.innerHTML = getTime();
			target_dome.append(target_msg);
			target_dome.append(target_date); 
			document.getElementById('chat1').appendChild(target_dome.cloneNode(true));
			document.getElementById('chat2').appendChild(target_dome.cloneNode(true));
			document.getElementById('input2').value = '';
			chat2.scrollTop += 300;
		}

//分别在输入框处添加键盘响应时间（按下回车键并且输入框消息不为空时，调用前面的发送消息函数事件）
function sendOne(event){
			if(event.keyCode==13 && document.getElementById('input1').value){ 
			getMesOne();
			}
			else {
				return false;
			}

			}

function sendTwo(event){
			if(event.keyCode==13 && document.getElementById('input2').value){ 
			getMesTwo();
			}
			else {
				return false;
			}

			}

	
