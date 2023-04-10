<template>
  <div>
    在Vue模板中添加一个输入框和按钮用于输入和发送消息
    <div>
      <input v-model="inputMessage" @keydown.enter="sendMessage" placeholder="请输入消息..." />
      <button @click="sendMessage">发送</button>
      <ul>
        <!-- 在Vue模板中显示聊天记录 -->
        <li v-for="message in messages" :key="message.id">
          {{ message.sender }}: {{ message.content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup >
//lang="ts"
import axios from "axios";
const inputMessage = ref(""); // 使用 ref 函数定义响应式数据
const messages = ref([]); // 使用 ref 函数定义响应式数据
const key = "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";
const model = "text-davinci-003"; // ChatGPT 模型名称
const sendMessage = () => {
  // 向ChatGPT API发送请求并处理响应
  axios
    .post(
      "https://api.openai.com/v1/chat/completions",
      // "https://api.openai.com/v1/completions",
      // "https://service-0wiwmlkg-1315488797.usw.apigw.tencentcs.com/v1/chat/completions"
      {
        messages: [
          { role: "system", content: key },
          { role: "user", content: inputMessage.value },
          { role: "assistant", content: model } // 添加一个包含 model 参数的对象
        ],
      },
      {
        headers: {
          "Authorization": `Bearer ${key}`, // 替换为您的ChatGPT API密钥
          "Content-Type": "application/json",
          "model":model // 替换为您要使用的 ChatGPT 模型名称
        },
      }
    )
    .then((response) => {
      // 提取并处理ChatGPT API的响应
      const reply = response.data.choices[0].text;
      messages.value.push({ sender: "ChatGPT", content: reply });
      inputMessage.value = "";
    })
    .catch((error) => {
      console.error(error);
    });
};
</script>

<style scoped lang="scss"></style>
