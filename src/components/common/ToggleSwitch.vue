<template>
  <label class="switch">
    <input type="checkbox" :checked="modelValue" @input="handleInput">
    <span class="slider">
      <span class="slider-circle"></span>
    </span>
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (event) => {
  const target = event.target
  emit('update:modelValue', target.checked)
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background: var(--border_gradient);
  transition: .4s;
}

.slider::before {
  content: '';
  position: absolute;
  top: 1.5px;
  left: 1.5px;
  right: 1.5px;
  bottom: 1.5px;
  border-radius: 34px;
  background: var(--button_gradient);
  transition: opacity 0.3s ease;
}

.slider-circle {
  position: absolute;
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  border-radius: 50%;
  background: var(--gradient_grey_border);
  transition: .4s;
}

.slider-circle::after {
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  border-radius: 50%;
  background: var(--gradient_grey_color);
  transition: .4s;
}

input:checked+.slider {
  background: var(--unactive_text);
}

input:checked+.slider::before {
  opacity: 0;
}

input:checked+.slider .slider-circle {
  transform: translateX(20px);
}

input:checked+.slider .slider-circle::before {
  background: var(--unactive_text);
}

input:checked+.slider .slider-circle::after {
  background: var(--active_text);
}

@keyframes gradientIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
