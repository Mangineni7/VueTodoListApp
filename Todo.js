const app=Vue.createApp({
    data(){
        return{
            todo:'',
            todos:[],
            setIndex:null,
            isEditing :false,
            checkbox:false,
            ii:null,
            ind:null
        }
    },
    computed:{
        isChecked(i){ 
            if(this.todos.index==i){
                 
                  checkbox=true
             }
           
        },
    },
    methods:{
        addTodo(){
            if(this.todo.trim()!==""){
            this.todos.push({task:this.todo ,completed:false})
            }
            this.todo=""
           
        },
        editTodo(index, todo){
            this.todo=todo.task
            this.setIndex=index
            this.isEditing=true 
        },
        updateTodo() {
            if (this.setIndex !== null && this.todo.trim() !== "") {
                this.todos[this.setIndex].task = this.todo;
                this.isEditing = false;
                this.todo = "";
            }
        },
        deleteTodo(index){
            this.todos.splice(index,1)
        }
    }
})
app.mount('#app')