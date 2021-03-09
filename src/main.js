import { createApp } from 'vue';
import App from './components/App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const mainApp = createApp(App);
mainApp.component('base-card',BaseCard)
mainApp.component('base-button',BaseButton)
mainApp.component('base-dialog',BaseDialog)
mainApp.mount('#app');
