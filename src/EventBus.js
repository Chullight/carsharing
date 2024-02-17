// EventBus.js
// EventBus.js
// EventBus.js
import { reactive, provide, inject } from 'vue';

// 创建一个空的事件总线对象
const eventBus = reactive({
    events: {},
    $on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },
    $emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(callback => {
                callback(...args);
            });
        }
    }
});

// 将事件总线对象提供给应用程序的所有组件
export function provideEventBus() {
    provide('eventBus', eventBus);
}

// 在组件中使用事件总线
export function useEventBus() {
    const eventBus = inject('eventBus');
    if (!eventBus) {
        throw new Error('useEventBus must be used within a component wrapped with provideEventBus.');
    }
    return eventBus;
}
