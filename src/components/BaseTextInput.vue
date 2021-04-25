<template>
    <div class="base-text-input">
        <input
            type="text"
            class="base-text-input__text-input"
            required
            :value="value"
            @input="handleInput"
        >
        <p
            v-if="placeholder"
            class="base-text-input__placeholder"
        >{{ placeholder }}</p>
    </div>
</template>
<script>
export default {
    name: 'BaseTextInput',

    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        }
    },

    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value);
        }
    }
}
</script>
<style lang="scss">
.base-text-input {
    $block: &;
    position: relative;
    &__text-input {
        will-change: border, color;
        border: $form-control-border-width solid map-get($border-colors, "main");
        @include base-form-control-transition("border", "color");
        font-size: 1em;
        color: map-get($font-colors, "main");
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        color: map-get($font-colors, "main");
        text-align: center;
        padding: 0 10px 0 10px;
        background-color: transparent;
        &:hover,
        &:focus {
            border-color: map-get($border-colors, "focus");
        }
        &:focus {
            outline: none;
            color: map-get($font-colors, "focus");
        }
    }
    &__placeholder {
        will-change: transform, top, left;
        position: absolute;
        color: map-get($font-colors, "placeholder");
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1em;
        margin: 0;
        padding: 0 5px 0 5px;
        white-space: nowrap;
        background-color: $background-color;
        @include base-form-control-transition("transform", "top", "left");
        #{$block}__text-input:focus + &,
        #{$block}__text-input:valid + & {
            top: 0%;
            left: 0%;
            transform: translate(0, -50%) scale(0.8);
            z-index: 2;
        }
    }
}
</style>