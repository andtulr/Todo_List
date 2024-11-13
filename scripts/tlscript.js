
const Todo = {
    data() {
        return {
            item: "",
            todoList: [
                {text: "Создание портфолио и подготовка к собеседованию"},
                {text: "Фреймворк Vue для языка JavaScript"},
                {text: "Основы программирования на языке JavaScript"},
                {text: "Система контроля версий"},
                {text: "Верстка сайтов (HTML5+CSS3)"},
                {text: "Основные инструменты работы с UIUX аналитикой"},
                {text: "Основы разработки сайтов"},
            ],
        };
    },
    methods: {
        addItem(){
            if (!this.item.trim()) {
                return
            }
            this.todoList.push({
                text: this.item,
            });
            this.item = "";
        },
        deleteItem(text) {
            this.todoList.splice(this.todoList.indexOf(text), 1); //Код для удаления элемента из Массива todos
          }
    },

};


Vue.createApp(Todo).mount("#app");
