// 数据为空时 b区域不显示 c区域提示还没有添加任务
// 有数据时 回车后 b区域显示 c区域显示提交默认状态
//点击c区域数据 显示checked装态
//点击右侧关闭按钮 删除当前节点

// var obj = new Vue({
// 	el:'',
// 	data:{},
// 	methods:{}
// })
//绑定事件@ v-model='' v-for=' in ' v-show='' :class='{}'

var list = [
	// {
	// 	'title':'吃饭睡觉',
	// 	'isChecked':true,
	// },
	// {
	// 	'title':'吃觉',
	// 	'isChecked':false,
	// },
];
var obj = new Vue({
	el:'.main',
	data:{
		list:list,
		todo:"",

	},
	methods:{
		addTodo(ev){
			this.list.push({
				title:this.todo,
				isChecked:false
			})
			this.todo = ''
		},
		remove(todo){
			var index = this.list.indexOf(todo)
			this.list.splice(index,1)
		}
	},
});