<template>
  <div
    class="input"
    :class="[outlined ? 'outlined' : 'filled', {'disabled': disabled}]"
  >
    <icon v-if="icon !== ''" class="icon" :icon="icon"/>
    <input
      :class="{'padding-left': icon !== '', 'focused': inputFocused}"
      :id="`input-${placeholder}`"
      :autocomplete="autocomplete ? 'on' : 'off'"
      :autocorrect="autocorrect ? 'on' : 'off'"
      :spellcheck="spellcheck ? 'on' : 'off'"
      :autofocus="autofocus"
      :disabled="disabled"
      :value="value"
      :type="type"
      @focus="inputFocused = true"
      @blur="inputFocused = false"
      @keypress.prevent.enter="$emit('enter')"
      @input="$emit('input', $event.target.value); $emit('change')"
    />
    <div
      class="placeholder"
      :class="{'active': inputFocused || value !== '', 'no-icon': icon === ''}"
    >
     {{ placeholder }}
    </div>
    <span class="error">{{error}}</span>
    <span
      v-if="limit !== 0 && error === ''"
      class="limit"
      :class="{'exceeded': value.length > limit}"
    >{{ value.length }} / {{ limit }}</span>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    limit: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: Boolean,
      default: false,
    },
    autocorrect: {
      type: Boolean,
      default: false,
    },
    spellcheck: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputFocused: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.input {
  user-select: none;
  height: 56px;
  font-size: 16px;
  margin-bottom: 24px;
  align-items: center;
  display: inline-flex;
  box-sizing: border-box;

  input {
    width: 100%;
  }

  .error {
    position: absolute;
    bottom: -18px;
    font-size: 0.7em;
    left: 7px;
    color: red;
  }

  .limit {
    position: absolute;
    bottom: -18px;
    font-size: 0.7em;
    right: 7px;
    color: inherit;
    transition: all .2s ease;

    &.exceeded {
      color: red;
    }
  }

  input {
    background-color: transparent;
    color: $primary-font-color;
    font-family: $font-family;
    font-size: 1em;
    outline: none;
    border: unset;
    z-index: 999;
  }

  &.filled {
    position: relative;

    input {
      height: 100%;
      box-sizing: border-box;
      padding: 20px 16px 6px 16px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      background-color: rgba(0, 0, 0, .17);

      &.padding-left {
        padding-left: 48px;
      }
    }

    .placeholder {
      position: absolute;
      font-size: 1em;
      left: 46px;
      top: 22px;
      transition: all .2s ease;

      &.no-icon {
        left: 16px;
      }

      &.active {
        top: 9px;
        font-size: .8em;
      }
    }

    .icon {
      position: absolute;
      font-size: 24px;
      bottom: 25%;
      left: 16px;
    }
  }

  &.outlined {
    position: relative;

    input {
      height: 100%;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 14px 16px 12px 16px;
      background-color: transparent;
      border: 1px solid rgba($color: $primary-background-color, $alpha: 1);

      &.padding-left {
        padding-left: 48px;
      }
    }

    .placeholder {
      background-color: $secondary-background-color;
      position: absolute;
      font-size: 1em;
      left: 46px;
      top: 22px;
      transition: all .2s ease;

      &.no-icon {
        left: 16px;
      }

      &.active {
        top: -6px;
        left: 16px;
        z-index: 99999;
        font-size: .8em;
        font-size: 0.8em;
      }
    }

    .icon {
      position: absolute;
      font-size: 24px;
      bottom: 25%;
      left: 16px;
    }
  }
}
</style>
