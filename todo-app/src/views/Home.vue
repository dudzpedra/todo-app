<template>
  <div class="home">
    <div class="title">
      <i class="fas fa-th-list"></i>
      <h1>To do List</h1>
    </div>
    <div class="container">
      <div class="user-input">
        <input
          v-model="newTodo"
          type="text"
          placeholder="Digite uma nova tarefa..."
        />
        <button
          v-if="!isEditing"
          id="btn-add"
          class="btn"
          @click.prevent="createTodo"
        >
          ADD
        </button>
        <button v-else id="btn-update" class="btn" @click="updateTodo">
          UPDATE
        </button>
      </div>
      <ol>
        <li v-for="(todo, index) in todoList" :key="index">
          {{ todo }}
          <button class="btn" @click="editItem(index, todo)">EDIT</button>
          <button class="btn" @click="deleteItem(index, todo)">DELETE</button>
        </li>
      </ol>
    </div>
    <!-- <div v-for="todo in todoList" :key="todo" class="container">
      <input type="checkbox" :value="todo" :id="todo" v-model="newTodo">
      <label :for="todo">{{ todo }}</label>
    </div> -->
    <the-footer></the-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "Home",
  components: { TheFooter },
  data() {
    return {
      newTodo: "",
      todoList: this.$store.state.todoList,
      selectedIndex: null,
      isEditing: false,
    };
  },
  methods: {
    async createTodo() {
      this.$store.commit("addTodo", this.newTodo);

      const response = await fetch(
        "https://azideias-default-rtdb.firebaseio.com/list.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ todo: this.newTodo }),
        }
      );
      //const responseTodo = response.json();

      if (!response.ok) {
        //error
        console.log("Response not ok");
      }
      this.newTodo = "";
      this.isEditing = false;
    },
    editItem(index, todo) {
      this.newTodo = todo;
      this.selectedIndex = index;
      this.isEditing = true;
    },
    updateTodo() {
      this.todoList.splice(this.selectedIndex, 1, this.newTodo);
      this.isEditing = false;
      this.newTodo = "";
    },
    deleteItem(index) {
      this.todoList.splice(index, 1);
    },
  },
};
</script>

<style>
.home {
  margin: 0;
  color: rgb(13, 83, 100);
}
.title {
  text-align: center;
  font-size: 2rem;
  margin: 20px;
}
.title h1 {
  font-size: 32px;
}
.container {
  width: fit-content;
  display: flex;
  flex-direction: column;
  background: rgb(13, 83, 100);
  padding: 15px;
  margin: 10px auto;
  border-radius: 8px;
}
.user-input {
  height: 100%;
  width: fit-content;
  padding: 10px;
}
.user-input input {
  font-family: SF Pro Rounded;
  height: 48px;
  font-size: 24px;
  width: 70%;
  border-radius: 8px;
}
#btn-add,
#btn-update {
  font-size: 20px;
  height: 40px;
  color: rgb(13, 83, 100);
}
.btn {
  width: fit-content;
  margin-left: 25px;
  height: 24px;
  vertical-align: middle;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  font-family: SF Pro Rounded;
  background-color: #42b983;
}
.btn:hover {
  opacity: 0.9;
  box-shadow: 4px 4px 4px #888;
  transform: scale(1.1);
  cursor: pointer;
  color: #fff;
}
li,
label {
  color: #fff;
  font-size: 24px;
  height: 48px;
  width: 100%;
}
</style>
