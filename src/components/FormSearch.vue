<template>
    <form
        class="form-search"
        @submit.prevent="emitSubmit"
    >
        <BaseTextInput
            v-model="textInputValue"
            :placeholder="translate('GITHUB_USERNAME')"
            class="form-search__text-input"
        />
        <button
            type="submit"
            class="form-search__button button"
        >{{ translate('SEARCH') }}</button>
    </form>
</template>
<script>
import BaseTextInput from './BaseTextInput';
export default {
    name: 'FormSearch',

    components: {
        BaseTextInput
    },

    data() {
        return {
            textInputValue: ""
        }
    },

    methods: {
        emitSubmit() {
            this.$emit('submit', this.textInputValue);
        }
    }
}
</script>
<style lang="scss">
.form-search {
    display: flex;
    flex-direction: column;
    @include min-width("small") {
        flex-direction: row;
    }
    &__text-input {
        width: 100%;
        height: 40px;
        font-size: 1.2rem;
        @include min-width("small") {
            width: 70%;
        }
    }
    &__button {
        margin-top: 10px;
        height: 40px;
        width: 100%;
        @include min-width("small") {
            margin-top: 0;
            margin-left: 10px;
            width: 30%;
        }
    }
}
</style>