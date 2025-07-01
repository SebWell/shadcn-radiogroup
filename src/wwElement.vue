<template>
  <div 
    role="radiogroup"
    :aria-labelledby="content.labelId"
    :aria-describedby="content.descriptionId"
    :class="cn('grid gap-2', content.orientation === 'horizontal' && 'grid-flow-col auto-cols-max', content.customClass)"
  >
    <div 
      v-for="(option, index) in options"
      :key="getOptionKey(option, index)"
      class="flex items-center space-x-2"
    >
      <button
        :id="`radio-${option.value || index}`"
        role="radio"
        type="button"
        :aria-checked="isSelected(option)"
        :disabled="content.disabled || option.disabled"
        @click="selectOption(option)"
        @keydown="handleKeyDown($event, index)"
        :class="cn(
          'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          isSelected(option) && 'bg-primary border-primary',
          content.size === 'sm' && 'h-3 w-3',
          content.size === 'lg' && 'h-5 w-5'
        )"
      >
        <!-- Inner circle for selected state -->
        <div
          v-if="isSelected(option)"
          :class="cn(
            'flex items-center justify-center',
            'h-full w-full'
          )"
        >
          <div 
            :class="cn(
              'h-2.5 w-2.5 rounded-full bg-current',
              content.size === 'sm' && 'h-1.5 w-1.5',
              content.size === 'lg' && 'h-3 w-3'
            )"
          />
        </div>
      </button>
      
      <label
        :for="`radio-${option.value || index}`"
        :class="cn(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer',
          content.disabled || option.disabled && 'cursor-not-allowed opacity-70',
          content.labelClass
        )"
        @click="!content.disabled && !option.disabled && selectOption(option)"
      >
        {{ getDisplayValue(option) }}
      </label>
      
      <!-- Description for option -->
      <div 
        v-if="getOptionDescription(option)"
        :class="cn(
          'text-sm text-muted-foreground',
          content.descriptionClass
        )"
      >
        {{ getOptionDescription(option) }}
      </div>
    </div>
    
    <!-- Error message -->
    <div
      v-if="content.error"
      :class="cn(
        'text-sm font-medium text-destructive',
        content.errorClass
      )"
    >
      {{ content.error }}
    </div>
    
    <!-- Helper text -->
    <div
      v-if="content.helperText"
      :class="cn(
        'text-sm text-muted-foreground',
        content.helperClass
      )"
    >
      {{ content.helperText }}
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { cn } from './cn.js'

const props = defineProps({
  content: {
    type: Object,
    default: () => ({})
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: null
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

// Computed properties
const options = computed(() => props.content.options || [])

// Helper functions
const getDisplayValue = (option) => {
  if (typeof option === 'object') {
    return option[props.content.labelKey || 'label'] || option[props.content.valueKey || 'value'] || ''
  }
  return String(option)
}

const getOptionValue = (option) => {
  if (typeof option === 'object') {
    return option[props.content.valueKey || 'value']
  }
  return option
}

const getOptionKey = (option, index) => {
  return getOptionValue(option) || index
}

const getOptionDescription = (option) => {
  if (typeof option === 'object') {
    return option[props.content.descriptionKey || 'description'] || ''
  }
  return ''
}

const isSelected = (option) => {
  const optionValue = getOptionValue(option)
  return optionValue === props.modelValue
}

// Methods
const selectOption = (option) => {
  if (props.content.disabled || option.disabled) return
  
  const value = getOptionValue(option)
  emit('update:modelValue', value)
  emit('change', value, option)
}

const handleKeyDown = (event, currentIndex) => {
  if (props.content.disabled) return
  
  switch (event.key) {
    case 'ArrowDown':
    case 'ArrowRight':
      event.preventDefault()
      navigateToOption(currentIndex + 1)
      break
      
    case 'ArrowUp':
    case 'ArrowLeft':
      event.preventDefault()
      navigateToOption(currentIndex - 1)
      break
      
    case 'Home':
      event.preventDefault()
      navigateToOption(0)
      break
      
    case 'End':
      event.preventDefault()
      navigateToOption(options.value.length - 1)
      break
      
    case ' ':
    case 'Enter':
      event.preventDefault()
      selectOption(options.value[currentIndex])
      break
  }
}

const navigateToOption = (targetIndex) => {
  const availableOptions = options.value.filter(option => !option.disabled)
  if (availableOptions.length === 0) return
  
  let newIndex = targetIndex
  
  // Wrap around if necessary
  if (newIndex >= options.value.length) {
    newIndex = 0
  } else if (newIndex < 0) {
    newIndex = options.value.length - 1
  }
  
  // Skip disabled options
  while (options.value[newIndex]?.disabled && newIndex !== targetIndex) {
    newIndex = newIndex + 1 >= options.value.length ? 0 : newIndex + 1
  }
  
  // Focus the new option
  const radioElement = document.getElementById(`radio-${getOptionValue(options.value[newIndex]) || newIndex}`)
  if (radioElement) {
    radioElement.focus()
  }
}
</script>

<style>
/* Import global shadcn/ui styles */
@import './globals.css';
</style> 