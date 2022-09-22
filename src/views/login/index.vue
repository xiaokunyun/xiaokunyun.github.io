<template>
  <div class="relative w-screen h-screen flex justify-center items-center">
    <!-- bg-green-200 -->
    <div class="w-100 h-100">
      <div class="flex justify-center items-center h-20" :class="{active:isMobileTerminal}">
        <Logo />
        <div @click="themeChangel(false)">
          <icon-sun v-show="useStore().theme == true" />
        </div>
        <div @click="themeChangel(true)">
          <icon-moon v-show="useStore().theme == false" />
        </div>
        <div @click="localesChange1('en')">
          <icon-chinese-fill v-show="useStore().locales == 'zh'" />
        </div>
        <div @click="localesChange1('zh')">
          <icon-english-fill v-show="useStore().locales == 'en'" />
        </div>
      </div>
      <div>
        <div class="login-form-wrapper">
          <div class="login-form-title">{{ $t('login.form.title') }}</div>
          <div class="login-form-sub-title">{{ $t('login.form.title') }}</div>
          <div class="login-form-error-msg">{{ errorMessage }}</div>
          <a-form ref="formRef" :model="userInfo" :style="{width:'400px'}" class="login-form" layout="vertical"
            @submit="handleSubmit">
            <a-form-item field="username" :rules="[{ required: true, message: $t('login.form.userName.errMsg') }]"
              :validate-trigger="['change', 'blur']" hide-label>
              <a-input v-model="userInfo.username" :placeholder="$t('login.form.userName.placeholder')">
                <template #prefix>
                  <icon-user />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item field="password" :rules="[{ required: true, message: $t('login.form.password.errMsg') }]"
              :validate-trigger="['change', 'blur']" hide-label>
              <a-input-password v-model="userInfo.password" :placeholder="$t('login.form.password.placeholder')"
                allow-clear>
                <template #prefix>
                  <icon-lock />
                </template>
              </a-input-password>
            </a-form-item>
            <!-- <a-space :size="16" direction="vertical">
              <div class="login-form-password-actions">
                <a-checkbox checked="rememberPassword" :model-value="loginConfig.rememberPassword"
                  @change="(setRememberPassword as any)">
                  {{ $t('login.form.rememberPassword') }}
                </a-checkbox>
                <a-link>{{ $t('login.form.forgetPassword') }}</a-link>
              </div>
              <a-button type="primary" html-type="submit" long :loading="loading">
                {{ $t('login.form.login') }}
              </a-button>
              <a-button type="text" long class="login-form-register-btn">
                {{ $t('login.form.register') }}
              </a-button>
            </a-space> -->
            <!-- <a-form-item field="name" :label="t('login.username')" validate-trigger="input" required>
              <a-input v-model="form.username" placeholder="please enter your username..." />
              <template #extra>
                <div>{{t('login.usernameRule')}}</div>
              </template>
            </a-form-item> -->
            <a-form-item>
              <a-space>
                <a-button html-type="submit">{{ $t('login.form.login') }}</a-button>
                <a-button>{{ $t('login.form.register') }}</a-button>
                <!--  @click="$refs.formRef.resetFields()" -->
              </a-space>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/user'
import { useRouter } from 'vue-router'
import { isMobileTerminal } from '@/util/flex'
import { useI18n } from 'vue-i18n'
const i18n = useI18n()
const { t } = useI18n() // use as global scope
const router = useRouter();
const userInfo = reactive({
  username: 'admin', // 演示默认值
  password: 'admin', // demo default value
})
// const isAuthenticated=ref(useStore().isAuthenticated)
const handleSubmit = () => {
  // console.log('values:', values, '\nerrors:', errors)
  useStore().isAuthenticatedChange(true)
  console.log("isAuthenticated", useStore().isAuthenticated);
  router.push({
    path: '/',
  });
}
const errorMessage = ref('');
const themeChangel = (val: boolean) => {//主题切换
  useStore().themeChange(val)
  let body = document.body
  if (useStore().theme == true) {
    body.className = ''
    // 恢复亮色主题
    document.body.removeAttribute('arco-theme');
  } else {
    body.className = 'dark'
    // 设置为暗黑主题
    document.body.setAttribute('arco-theme', 'dark')
  }
}
const localesChange1 = (val: string) => {//语言切换
  useStore().localesChange(val)
  console.log("useStore().locales", useStore().locales);
  i18n.locale.value = val
}
</script>

<style scoped lang="scss">
.active {
  font-size: 16px;

  svg {
    font-size: 20px;
  }
}

svg {
  font-size: 26px;
}

.login-form {
  &-wrapper {
    width: 100vw;
  }

  &-title {
    text-align: center;
    color: var(--color-text-1);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  &-sub-title {
    text-align: center;
    color: var(--color-text-3);
    font-size: 16px;
    line-height: 24px;
  }

  // &-error-msg {
  //   height: 32px;
  //   color: rgb(var(--red-6));
  //   line-height: 32px;
  // }

  // &-password-actions {
  //   display: flex;
  //   justify-content: space-between;
  // }

  // &-register-btn {
  //   color: var(--color-text-3) !important;
  // }
}
</style>
